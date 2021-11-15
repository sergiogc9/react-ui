import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { getPopoverContentMock, withTheme } from 'components/private/utils/tests';
import Box from 'components/Box';
import Content from 'components/Content';

import Select from '.';
import { SelectProps } from './types';

jest.mock('components/Popover', () => getPopoverContentMock());

const labelText = 'Select an option';
const selectTestId = 'select';

const optionOneID = 'girona';
const optionOne = 'Girona';
const optionTwoID = 'barcelona';
const optionTwo = 'Barcelona';
const optionThreeID = 'tarragona';
const optionThree = 'Tarragona';

const mockOnOptionChange = jest.fn();
const getSelectComponent = (props: Partial<SelectProps> = {}) =>
	withTheme(
		<Select data-testid={selectTestId} onOptionChange={mockOnOptionChange} {...props}>
			<Select.Option id={optionOneID} data-testid={optionOneID}>
				{optionOne}
			</Select.Option>
			<Select.Option id={optionTwoID} data-testid={optionTwoID}>
				{optionTwo}
			</Select.Option>
			<Select.Option id={optionThreeID} data-testid={optionThreeID}>
				{optionThree}
			</Select.Option>
		</Select>
	);

const renderSelect = (props: Partial<SelectProps> = {}) => render(getSelectComponent(props));

describe('Select', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.useRealTimers();
		jest.clearAllMocks();
	});

	it('should render select', () => {
		renderSelect();

		expect(screen.getByTestId(selectTestId)).toBeInTheDocument();
	});

	it('should show not results found if no options are provided', () => {
		render(withTheme(<Select data-testid={selectTestId} />));

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		expect(screen.getByText(theme.components.select.locales.en.no_results!)).toBeInTheDocument();
	});

	it('should render non text components', () => {
		const contentText = 'This is a content component';
		const contentText2 = 'This is another content component';

		render(
			withTheme(
				<Select data-testid={selectTestId}>
					<Select.Option id="content-option">
						<Box>
							<Content>{contentText}</Content>
							<Content>{contentText2}</Content>
						</Box>
					</Select.Option>
				</Select>
			)
		);

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		expect(screen.getByText(contentText)).toBeInTheDocument();
	});

	it('should set default option', () => {
		renderSelect({ defaultValue: optionTwoID });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue(optionTwo);

		userEvent.click(input);

		expect(screen.getByText(optionTwo)).toHaveAttribute('aria-selected', 'true');
	});

	it('should set option from controlled value', () => {
		renderSelect({ value: optionTwoID });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue(optionTwo);

		userEvent.click(input);

		expect(screen.getByText(optionTwo)).toHaveAttribute('aria-selected', 'true');
	});

	it('should change option from controlled value', async () => {
		const { rerender } = render(getSelectComponent());

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue('');

		rerender(getSelectComponent({ value: optionThreeID }));

		userEvent.click(input);

		expect(screen.getByText(optionThree)).toHaveAttribute('aria-selected', 'true');

		rerender(getSelectComponent({ value: null }));

		expect(screen.getByText(optionThree)).toHaveAttribute('aria-selected', 'false');
	});

	it('should show options when clicking input', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		expect(screen.getByText(optionOne)).toBeInTheDocument();
	});

	it('should select option when clicking', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		userEvent.click(screen.getByText(optionOne));

		expect(mockOnOptionChange).toHaveBeenCalledWith(optionOneID);
	});

	it('should select previously selected option when clicking', () => {
		renderSelect({ defaultValue: optionOneID });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		userEvent.click(screen.getByText(optionOne));

		expect(mockOnOptionChange).toHaveBeenCalledWith(optionOneID);
	});

	it('should focus input when clicking option', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		userEvent.click(screen.getByText(optionOne));

		expect(mockOnOptionChange).toHaveBeenCalledWith(optionOneID);
		expect(input).toHaveFocus();
	});

	it('should clear select when clicking text field remove button', () => {
		renderSelect({ defaultValue: optionOneID, hasRemoveButton: true });

		userEvent.click(screen.getByTestId('textfield__remove-button'));

		expect(mockOnOptionChange).toHaveBeenCalledWith(null);
	});

	it('should set one default option with multi select', () => {
		renderSelect({
			defaultValue: [optionTwoID],
			isMultiSelect: true
		});

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue(optionTwo);

		userEvent.click(input);

		expect(screen.getByText(optionTwo)).toHaveAttribute('aria-selected', 'true');
	});

	it('should set two default options with multi select', () => {
		renderSelect({
			defaultValue: [optionOneID, optionTwoID],
			label: labelText,
			isMultiSelect: true
		});

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue('');

		userEvent.click(input);

		expect(screen.getByText(optionOne)).toHaveAttribute('aria-selected', 'true');
		expect(screen.getByText(optionTwo)).toHaveAttribute('aria-selected', 'true');
	});

	it('should set option from controlled value with multi select', () => {
		renderSelect({ isMultiSelect: true, value: optionTwoID });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue(optionTwo);

		userEvent.click(input);

		expect(screen.getByText(optionTwo)).toHaveAttribute('aria-selected', 'true');
	});

	it('should set multiple options from controlled value with multi select', () => {
		renderSelect({ isMultiSelect: true, value: [optionOneID, optionTwoID] });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue('');

		userEvent.click(input);

		expect(screen.getByText(optionOne)).toHaveAttribute('aria-selected', 'true');
		expect(screen.getByText(optionTwo)).toHaveAttribute('aria-selected', 'true');
	});

	it('should change option from controlled value with multi select', () => {
		const { rerender } = render(getSelectComponent({ isMultiSelect: true }));

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveValue('');

		rerender(getSelectComponent({ isMultiSelect: true, value: [optionThreeID] }));

		userEvent.click(input);

		expect(screen.getByText(optionThree)).toHaveAttribute('aria-selected', 'true');
	});

	it('should select option when clicking with multi select', () => {
		renderSelect({ defaultValue: [optionTwoID], isMultiSelect: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		expect(screen.getByText(optionOne)).toBeInTheDocument();

		userEvent.click(screen.getByText(optionOne));

		expect(mockOnOptionChange).toHaveBeenCalledWith([optionTwoID, optionOneID]);
	});

	it('should unselect option when clicking with multi select', () => {
		renderSelect({
			defaultValue: [optionOneID, optionTwoID],
			isMultiSelect: true
		});

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		expect(screen.getByText(optionOne)).toBeInTheDocument();

		userEvent.click(screen.getByText(optionOne));

		expect(mockOnOptionChange).toHaveBeenCalledWith([optionTwoID]);
	});

	it('should clear options when clicking clear button with multi select', () => {
		renderSelect({
			defaultValue: [optionOneID, optionTwoID],
			isMultiSelect: true
		});

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		userEvent.click(screen.getByTestId('select-listbox-remove-all-btn'));

		expect(mockOnOptionChange).toHaveBeenCalledWith([]);
	});

	it('should close popover when save button is clicked with multi select', () => {
		renderSelect({
			defaultValue: [optionOneID, optionTwoID],
			isMultiSelect: true
		});

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		userEvent.click(screen.getByTestId('select-listbox-save-btn'));

		expect(screen.queryByText(optionOne)).not.toBeVisible();
	});

	it('should not show counter if no option is selected', () => {
		renderSelect({
			defaultValue: [],
			isMultiSelect: true
		});

		expect(screen.queryByTestId('select-multiple-counter')).toBeNull();
	});

	it('should not show counter if one option is selected', () => {
		renderSelect({
			defaultValue: [optionOneID],
			isMultiSelect: true
		});

		expect(screen.queryByTestId('select-multiple-counter')).toBeNull();
	});

	it('should show counter if more than one option are selected', () => {
		renderSelect({
			defaultValue: [optionOneID, optionTwoID],
			isMultiSelect: true
		});

		expect(screen.getByTestId('select-multiple-counter')).toBeInTheDocument();
	});

	it('should input be readonly by default', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveAttribute('readonly');
	});

	it('should input be editable when autocomplete', () => {
		renderSelect({ isAutocomplete: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).not.toHaveAttribute('readonly');
	});

	it('should call onInputChange handler while typing when autocomplete', () => {
		const mockOnInputChange = jest.fn();
		renderSelect({ isAutocomplete: true, onInputChange: mockOnInputChange });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.type(input, 'whatever');

		expect(mockOnInputChange).toHaveBeenCalledWith('whatever');
		expect(mockOnInputChange).toHaveBeenCalledTimes(8);
	});

	it('should filter options with entered text when autocomplete', () => {
		renderSelect({ isAutocomplete: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.type(input, 'celo');

		expect(screen.getByTestId(optionTwoID)).toBeInTheDocument();
		expect(screen.queryByTestId(optionOneID)).not.toBeInTheDocument();
		expect(screen.queryByTestId(optionThreeID)).not.toBeInTheDocument();
	});

	it('should select option with filtered options when autocomplete', () => {
		renderSelect({ isAutocomplete: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.type(input, 'celo');

		expect(screen.getByTestId(optionTwoID)).toBeInTheDocument();
		userEvent.click(screen.getByTestId(optionTwoID));

		expect(mockOnOptionChange).toBeCalledWith(optionTwoID);
	});

	it('should show not results found if entered text does not match with any option when autocomplete', () => {
		renderSelect({ isAutocomplete: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.type(input, 'I will not match anything');

		expect(screen.getByText(theme.components.select.locales.en.no_results!)).toBeInTheDocument();
		expect(screen.queryByTestId(optionOneID)).not.toBeInTheDocument();
		expect(screen.queryByTestId(optionTwoID)).not.toBeInTheDocument();
		expect(screen.queryByTestId(optionThreeID)).not.toBeInTheDocument();
	});

	it('should mark as bold matched text in filtered options when autocomplete', () => {
		renderSelect({ isAutocomplete: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.type(input, 'celo');

		expect(screen.getByTestId(optionTwoID).querySelector('strong')?.innerHTML).toBe('celo');
	});

	it('should keep input value after click option when autocomplete and multi select', () => {
		renderSelect({ isAutocomplete: true, isMultiSelect: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.type(input, 'celo');

		fireEvent.click(screen.getByTestId(optionTwoID));

		expect(input).toHaveValue('celo');
	});

	it('should render select with correct variant', () => {
		renderSelect({ defaultValue: optionOneID, variant: 'primary' });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		expect(screen.getByTestId(optionOneID)).toHaveStyle(`
      color: ${theme.colors.primary[500]}
    `);
	});

	it('should render input with correct aspect size', () => {
		renderSelect({ aspectSize: 'l' });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveStyle(`
      height: ${theme.components.input.aspectSize.l.height}px;
    `);
	});

	it('should render input as error', () => {
		renderSelect({ isError: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveStyle(`
      border-color: ${theme.colors.red[500]};
    `);
	});

	it('should render input as success', () => {
		renderSelect({ isSuccess: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveStyle(`
      border-color: ${theme.colors.green[500]};
    `);
	});

	it('should render input as disabled', () => {
		renderSelect({ isDisabled: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		expect(input).toHaveStyle(`
      border-color: ${theme.colors.neutral[400]};
    `);
		expect(input).toBeDisabled();
	});

	it('should open popover when clicking down arrow', () => {
		renderSelect();

		userEvent.click(screen.getByTestId('select-field-arrow-down-icon'));

		expect(screen.getByText(optionOne)).toBeInTheDocument();
	});

	it('should open popover when clicking down arrow with autocomplete', () => {
		renderSelect({ isAutocomplete: true });

		userEvent.click(screen.getByTestId('select-field-arrow-down-icon'));

		expect(screen.getByText(optionOne)).toBeInTheDocument();
	});

	it('should close popover when clicking outside the select component', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		expect(screen.getByText(optionOne)).toBeInTheDocument();

		userEvent.click(document.body);

		expect(screen.queryByText(optionOne)).not.toBeVisible();
	});

	it('should update input value if option text changes', () => {
		const { rerender } = render(
			withTheme(
				<Select data-testid={selectTestId} defaultValue="es">
					<Select.Option id="es">Español</Select.Option>
				</Select>
			)
		);

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		expect(input).toHaveValue('Español');

		rerender(
			withTheme(
				<Select data-testid={selectTestId} defaultValue="es">
					<Select.Option id="es">Spanish</Select.Option>
				</Select>
			)
		);

		expect(input).toHaveValue('Spanish');
	});

	it('should keep input value if option text changes with same text', () => {
		const { rerender } = render(
			withTheme(
				<Select data-testid={selectTestId} defaultValue="es">
					<Select.Option id="es">Español</Select.Option>
				</Select>
			)
		);

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		expect(input).toHaveValue('Español');

		rerender(
			withTheme(
				<Select data-testid={selectTestId} defaultValue="es">
					<Select.Option id="es">Español</Select.Option>
				</Select>
			)
		);

		expect(input).toHaveValue('Español');
	});

	it('should keep input value if option text changes but user is typing', () => {
		const { rerender } = render(
			withTheme(
				<Select data-testid={selectTestId} defaultValue="es" isAutocomplete>
					<Select.Option id="es">Español</Select.Option>
				</Select>
			)
		);

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		expect(input).toHaveValue('Español');

		input.focus();

		rerender(
			withTheme(
				<Select data-testid={selectTestId} defaultValue="es" isAutocomplete>
					<Select.Option id="es">English</Select.Option>
				</Select>
			)
		);

		expect(input).toHaveValue('Español');
	});

	it('should not filter options if they are already filtered from outside', () => {
		renderSelect({ isAutocomplete: true, isExternalFiltered: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.clear(input);
		userEvent.type(input, 'celo');

		expect(screen.getByTestId(optionOneID)).toBeVisible();
	});

	it('should not show no results text if input is empty', () => {
		render(withTheme(<Select data-testid={selectTestId} isAutocomplete isExternalFiltered />));

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.clear(input);

		expect(screen.queryByText('No results')).toBeNull();
	});

	it('should show default no results content if not options', () => {
		render(withTheme(<Select data-testid={selectTestId} />));

		userEvent.click(screen.getByTestId(selectTestId));

		expect(screen.getByText('No results')).toBeInTheDocument();
	});

	it('should show custom no results content if not options', () => {
		render(withTheme(<Select data-testid={selectTestId} emptyResultsContent={<div>Custom content!</div>} />));

		userEvent.click(screen.getByTestId(selectTestId));

		expect(screen.queryByText('No results')).toBeNull();
		expect(screen.getByText('Custom content!')).toBeInTheDocument();
	});

	it('should call on blur method after timeout', async () => {
		jest.useFakeTimers();
		const mockOnBlur = jest.fn();
		renderSelect({ onBlur: mockOnBlur });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.click(document.body);
		await waitFor(() => jest.runAllTimers());

		expect(mockOnBlur).toHaveBeenCalled();
	});

	it('should not call on blur method after timeout if not provided', async () => {
		jest.useFakeTimers();
		const mockOnBlur = jest.fn();
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		userEvent.click(document.body);
		await waitFor(() => jest.runAllTimers());

		expect(mockOnBlur).not.toHaveBeenCalled();
	});

	it('should focus first option with enter key in input', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'Enter' });

		await waitFor(() => {
			expect(screen.getByText(optionOne)).toHaveFocus();
		});
		expect(input.closest('[aria-expanded="true"]')).toBeInTheDocument();
	});

	it('should close popover when opened with enter key in input', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'Enter' });

		await waitFor(() => {
			expect(screen.getByText(optionOne)).toHaveFocus();
		});
		expect(input.closest('[aria-expanded="true"]')).toBeInTheDocument();

		fireEvent.keyDown(input, { key: 'Enter' });

		expect(input.closest('[aria-expanded="false"]')).toBeInTheDocument();
	});

	it('should close popover with escape key in input', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'Enter' });

		await waitFor(() => {
			expect(screen.getByText(optionOne)).toHaveFocus();
		});

		fireEvent.keyDown(input, { key: 'Escape' });

		expect(input.closest('[aria-expanded="false"]')).toBeInTheDocument();
	});

	it('should clear options with backspace key in input', () => {
		renderSelect({ defaultValue: optionOneID });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'Backspace' });

		expect(mockOnOptionChange).toHaveBeenCalledWith(null);
	});

	it('should not clear options with backspace key in input if autocomplete', () => {
		renderSelect({ defaultValue: optionOneID, isAutocomplete: true });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'Backspace' });

		expect(mockOnOptionChange).not.toHaveBeenCalled();
	});

	it('should focus first option with arrow down key in input', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'ArrowDown' });

		await waitFor(() => {
			expect(screen.getByText(optionOne)).toHaveFocus();
		});
		expect(input.closest('[aria-expanded="true"]')).toBeInTheDocument();
	});

	it('should focus last option with arrow up key in input', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'ArrowUp' });

		await waitFor(() => {
			expect(screen.getByText(optionThree)).toHaveFocus();
		});
		expect(input.closest('[aria-expanded="true"]')).toBeInTheDocument();
	});

	it('should sent over not handled key events in text field', () => {
		const onMockKeyDown = jest.fn();
		renderSelect({ onKeyDown: onMockKeyDown });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		fireEvent.keyDown(input, { key: 'Shift' });

		expect(onMockKeyDown).toHaveBeenCalled();
	});

	it('should close popover with tab event key in listbox', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByRole('listbox'), { key: 'Tab' });

		expect(input.closest('[aria-expanded="false"]')).toBeInTheDocument();
	});

	it('should close popover with escape event key in listbox', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByRole('listbox'), { key: 'Escape' });

		expect(input.closest('[aria-expanded="false"]')).toBeInTheDocument();
	});

	it('should sent over not handled key events in listbox', () => {
		const onMockKeyDown = jest.fn();
		renderSelect({ onKeyDown: onMockKeyDown });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);
		fireEvent.keyDown(screen.getByRole('listbox'), { key: 'Shift' });

		expect(onMockKeyDown).toHaveBeenCalled();
	});

	it('should hover next option with arrow down key event in option', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByText(optionOne), { key: 'ArrowDown' });

		expect(screen.getByText(optionTwo)).toHaveFocus();
	});

	it('should hover first option with arrow down key event in last option', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByText(optionThree), { key: 'ArrowDown' });

		await waitFor(() => {
			expect(screen.getByText(optionOne)).toHaveFocus();
		});
	});

	it('should hover previous option with arrow up key event in option', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByText(optionTwo), { key: 'ArrowUp' });

		await waitFor(() => {
			expect(screen.getByText(optionOne)).toHaveFocus();
		});
	});

	it('should hover last option with arrow up key event in first option', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByText(optionOne), { key: 'ArrowUp' });

		await waitFor(() => {
			expect(screen.getByText(optionThree)).toHaveFocus();
		});
	});

	it('should select option with space key event in option', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByText(optionOne), { key: ' ' });

		expect(mockOnOptionChange).toHaveBeenCalledWith(optionOneID);
	});

	it('should select option with enter key event in option', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByText(optionOne), { key: 'Enter' });

		expect(mockOnOptionChange).toHaveBeenCalledWith(optionOneID);
	});

	it('should sent over not handled key events in option', () => {
		const onMockKeyDown = jest.fn();
		renderSelect({ onKeyDown: onMockKeyDown });

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		userEvent.click(input);

		fireEvent.keyDown(screen.getByText(optionOne), { key: 'Shift' });

		expect(onMockKeyDown).toHaveBeenCalled();
	});

	it('should focus first option that matches keys pressed', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		fireEvent.keyDown(input, { key: 'b' });

		await waitFor(() => {
			expect(screen.getByText(optionTwo)).toHaveFocus();
		});
	});

	it('should change focused first option that matches keys pressed after waiting timeout', async () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;

		fireEvent.keyDown(input, { key: 'b' });

		await waitFor(() => {
			expect(screen.getByText(optionTwo)).toHaveFocus();
		});

		await new Promise(resolve => setTimeout(resolve, 1500));

		fireEvent.keyDown(screen.getByText(optionTwo), { key: 'g' });

		await waitFor(() => {
			expect(screen.getByText(optionOne)).toHaveFocus();
		});
	});

	it('should not focus any option if key pressed does not match an option text', () => {
		renderSelect();

		const input = screen.getByTestId(selectTestId).querySelector('input')!;
		input.focus();

		fireEvent.keyDown(input, { key: 'z' });

		expect(input).toHaveFocus();
	});
});
