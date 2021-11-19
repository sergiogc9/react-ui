import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';
import faker from 'faker';

import { withTheme } from 'components/private/utils/tests';
import TextFieldBase from './TextFieldBase';
import { TextFieldBaseProps } from './types';

const textFieldBaseCounterTestId = 'input-counter';
const textFieldBaseTestId = 'textFieldBase';
const removeButtonTestId = 'textfield__remove-button';
const placeHolderText = faker.random.words();
const inputText = faker.random.word();

const mockOnBlur = jest.fn();
const mockOnFocus = jest.fn();
const mockOnChange = jest.fn();
const mockOnRemoveBtnClicked = jest.fn();
const renderTextFieldBase = (props?: Partial<TextFieldBaseProps>) =>
	render(
		withTheme(
			<TextFieldBase
				data-testid={textFieldBaseTestId}
				onBlur={mockOnBlur}
				onChange={mockOnChange}
				onFocus={mockOnFocus}
				onRemoveButtonClick={mockOnRemoveBtnClicked}
				placeholder={placeHolderText}
				{...props}
			/>
		)
	);

describe('TextFieldBase component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render correct size', () => {
		renderTextFieldBase({ aspectSize: 'l' });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveStyle(`height: ${theme.components.input.aspectSize.l.height}px;`);
	});

	it('should render placeholder', () => {
		const { container } = renderTextFieldBase({ placeholder: placeHolderText });

		expect(container.querySelector(`input[placeholder="${placeHolderText}"]`)).toBeInTheDocument();
	});

	it('should show the correct value when value is passed', () => {
		renderTextFieldBase({ value: inputText });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveValue(inputText);
	});

	it('should show the correct default value when defaultValue is passed', () => {
		renderTextFieldBase({ defaultValue: inputText });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveValue(inputText);
	});

	it('should render error border', () => {
		renderTextFieldBase({ isError: true });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveStyle(`border-color: ${theme.colors.red['500']};`);
	});

	it('should call on change many times', () => {
		renderTextFieldBase();
		const input = screen.getByPlaceholderText(placeHolderText);

		userEvent.type(input, inputText);

		expect(mockOnChange).toHaveBeenCalledTimes(inputText.length);
	});

	it('should call on change never', () => {
		renderTextFieldBase({ onChange: undefined });

		const input = screen.getByPlaceholderText(placeHolderText);
		userEvent.type(input, inputText);

		expect(mockOnChange).toHaveBeenCalledTimes(0);
	});

	it('should call on focus once', () => {
		renderTextFieldBase();
		const input = screen.getByPlaceholderText(placeHolderText);

		userEvent.type(input, inputText);
		fireEvent.blur(input);

		expect(mockOnFocus).toHaveBeenCalledTimes(1);
	});

	it('should call on blur once', () => {
		renderTextFieldBase();
		const input = screen.getByPlaceholderText(placeHolderText);

		userEvent.type(input, inputText);
		fireEvent.blur(input);

		expect(mockOnBlur).toHaveBeenCalledTimes(1);
	});

	it('should do nothing if disabled', () => {
		renderTextFieldBase({ isDisabled: true });
		const input = screen.getByPlaceholderText(placeHolderText);

		userEvent.type(input, inputText);
		fireEvent.blur(input);

		expect(mockOnBlur).toHaveBeenCalledTimes(1);
		expect(mockOnChange).toHaveBeenCalledTimes(0);
	});

	it('should pass props to input', () => {
		renderTextFieldBase({ type: 'password' });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveAttribute('type', 'password');
	});

	it('should have default state in input counter', () => {
		renderTextFieldBase({ value: '123456', maxLength: 20 });
		const textFieldBase = screen.getByTestId(textFieldBaseCounterTestId);

		expect(textFieldBase).toHaveStyle(`color: ${theme.colors.neutral['500']};`);
	});

	it('should have warning state in input counter', () => {
		renderTextFieldBase({ value: '123456789123456789', maxLength: 20 });
		const textFieldBase = screen.getByTestId(textFieldBaseCounterTestId);

		expect(textFieldBase).toHaveStyle(`color: ${theme.colors.yellow['700']};`);
	});

	it('should have error state in input counter', () => {
		renderTextFieldBase({ value: '12345678901234567890', maxLength: 20 });
		const textFieldBase = screen.getByTestId(textFieldBaseCounterTestId);

		expect(textFieldBase).toHaveStyle(`color: ${theme.colors.red['500']};`);
	});

	it('should pass maxLength to input', () => {
		renderTextFieldBase({ maxLength: 20 });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveAttribute('maxLength', '20');
	});

	it('should check for value', () => {
		renderTextFieldBase({ value: inputText });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveAttribute('value', inputText);
	});

	it('should check for defaultValue', () => {
		renderTextFieldBase({ defaultValue: inputText });
		const input = screen.getByPlaceholderText(placeHolderText);

		expect(input).toHaveAttribute('value', inputText);
	});

	it('should render left content', () => {
		renderTextFieldBase({ leftContent: <div>{inputText}</div> });
		expect(screen.getByText(inputText)).toBeInTheDocument();
	});

	it('should render right content', () => {
		renderTextFieldBase({ rightContent: <div>{inputText}</div> });
		expect(screen.getByText(inputText)).toBeInTheDocument();
	});

	it('should not show the remove button by default', () => {
		renderTextFieldBase();

		userEvent.type(screen.getByTestId(textFieldBaseTestId), inputText);

		expect(screen.queryByTestId(removeButtonTestId)).toBeNull();
	});

	it('should show the remove button when the input has value', () => {
		renderTextFieldBase({ hasRemoveButton: true });

		userEvent.type(screen.getByTestId(textFieldBaseTestId), inputText);

		expect(screen.queryByTestId(removeButtonTestId)).toHaveStyle('display: flex');
	});

	it('should not show the remove button when the input has no value', () => {
		renderTextFieldBase({ hasRemoveButton: true });

		expect(screen.queryByTestId(removeButtonTestId)).not.toBeVisible();
	});

	it('should show the remove button when the input has no value', () => {
		const removeButtonHandler = jest.fn();
		renderTextFieldBase({
			hasRemoveButton: true,
			onRemoveButtonClick: removeButtonHandler
		});
		const input = screen.getByPlaceholderText(placeHolderText);

		userEvent.type(input, inputText);
		screen.queryByTestId(removeButtonTestId)?.click();

		expect(input).toHaveValue('');
		expect(removeButtonHandler).toHaveBeenCalled();
	});

	it('should render label', () => {
		renderTextFieldBase({ label: 'Nice label' });

		expect(screen.getByText('Nice label')).toBeInTheDocument();
	});

	it('should render outside label', () => {
		renderTextFieldBase({ label: 'Nice label', labelPosition: 'outside' });

		expect(screen.getByText('Nice label')).toBeInTheDocument();
	});

	it('should call remove btn click handler', () => {
		renderTextFieldBase({ hasRemoveButton: true });
		userEvent.click(screen.getByTestId(removeButtonTestId));

		expect(mockOnRemoveBtnClicked).toHaveBeenCalled();
	});

	it('should not call remove btn click handler if not provided', () => {
		renderTextFieldBase({
			hasRemoveButton: true,
			onRemoveButtonClick: undefined
		});
		userEvent.click(screen.getByTestId(removeButtonTestId));

		expect(mockOnRemoveBtnClicked).not.toHaveBeenCalled();
	});
});
