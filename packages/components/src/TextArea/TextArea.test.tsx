import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import TextArea from 'components/TextArea';
import { TextAreaProps } from './types';

const textAreaCounterTestId = 'input-counter';
const textAreaTestId = 'textArea';
const placeHolderText = 'Enter a text';
const contentText = 'hello';

const mockOnBlur = jest.fn();
const mockOnChange = jest.fn();

const renderTextArea = (props?: Partial<TextAreaProps>) =>
  render(
    withTheme(
      <TextArea
        data-testid={textAreaTestId}
        onBlur={mockOnBlur}
        onChange={mockOnChange}
        placeholder={placeHolderText}
        {...props}
      />
    )
  );

describe('TextArea component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render placeholder', () => {
    const { container } = renderTextArea({ placeholder: placeHolderText });

    expect(
      container.querySelector(`textarea[placeholder="${placeHolderText}"]`)
    ).toBeInTheDocument();
  });

  it('should render error border', () => {
    renderTextArea({ isError: true });

    const textarea = screen.getByPlaceholderText(placeHolderText);

    expect(textarea).toHaveStyle(`border-color: ${theme.colors.red['500']};`);
  });

  it('should render success border', () => {
    renderTextArea({ isSuccess: true });

    const textarea = screen.getByPlaceholderText(placeHolderText);

    expect(textarea).toHaveStyle(`border-color: ${theme.colors.green['500']};`);
  });

  it('should call on change many times', () => {
    renderTextArea();

    const textarea = screen.getByPlaceholderText(placeHolderText);
    userEvent.type(textarea, contentText);

    expect(mockOnChange).toHaveBeenCalledTimes(contentText.length);
  });

  it('should call on change never', () => {
    renderTextArea({ onChange: undefined });

    const textarea = screen.getByPlaceholderText(placeHolderText);
    userEvent.type(textarea, contentText);

    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('should call on blur once', () => {
    renderTextArea();

    const textarea = screen.getByPlaceholderText(placeHolderText);
    userEvent.type(textarea, contentText);
    fireEvent.blur(textarea);

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it('should do nothing if disabled', () => {
    renderTextArea({ isDisabled: true });
    const textarea = screen.getByPlaceholderText(placeHolderText);

    userEvent.type(textarea, contentText);
    fireEvent.blur(textarea);

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('should pass props to textarea', () => {
    renderTextArea({ textareaProps: { autoComplete: 'false' } });

    const textarea = screen.getByPlaceholderText(placeHolderText);

    expect(textarea).toHaveAttribute('autocomplete', 'false');
  });

  it('should have default state in textarea counter', () => {
    renderTextArea({ value: '123456', maxLength: 20 });

    const textArea = screen.getByTestId(textAreaCounterTestId);

    expect(textArea).toHaveStyle(`color: ${theme.colors.neutral['500']};`);
  });

  it('should have warning state in textarea counter', () => {
    renderTextArea({ value: '123456789123456789', maxLength: 20 });
    const textArea = screen.getByTestId(textAreaCounterTestId);
    expect(textArea).toHaveStyle(`color: ${theme.colors.yellow['500']};`);
  });

  it('should have error state in textarea counter', () => {
    renderTextArea({ value: '12345678901234567890', maxLength: 20 });
    const textArea = screen.getByTestId(textAreaCounterTestId);
    expect(textArea).toHaveStyle(`color: ${theme.colors.red['500']};`);
  });

  it('should pass maxLength to textarea', () => {
    renderTextArea({ maxLength: 20 });

    const textarea = screen.getByPlaceholderText(placeHolderText);

    expect(textarea).toHaveAttribute('maxLength', '20');
  });

  it('should check for value', () => {
    renderTextArea({ value: contentText });
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should check for defaultValue', () => {
    renderTextArea({ defaultValue: contentText });
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should render label', () => {
    renderTextArea({ label: 'Nice label' });

    expect(screen.getByText('Nice label')).toBeInTheDocument();
  });

  it('should render outside label', () => {
    renderTextArea({ label: 'Nice label', labelPosition: 'outside' });

    expect(screen.getByText('Nice label')).toBeInTheDocument();
  });

  it('should add padding if inside label', () => {
    renderTextArea({ label: 'Nice label', value: 'Some content' });

    const textarea = screen.getByPlaceholderText(placeHolderText);

    expect(textarea).toHaveStyle(`
      padding-top: 24px;
    `);
  });

  it('should add padding if inside label without value and placeholder', () => {
    renderTextArea({ label: 'Nice label', placeholder: undefined, value: '' });

    const textarea = screen
      .getByTestId(textAreaTestId)
      .querySelector('textarea')!;

    expect(textarea).toHaveStyle(`
      padding-top: 8px;
    `);
  });

  it('should use height from size prop', () => {
    renderTextArea({ size: 50 });

    const textarea = screen.getByPlaceholderText(placeHolderText);

    expect(textarea).toHaveStyle(`
      height: 50px;
    `);
  });

  it('should use height from height prop', () => {
    renderTextArea({ height: 50 });

    const textarea = screen.getByPlaceholderText(placeHolderText);

    expect(textarea).toHaveStyle(`
      height: 50px;
    `);
  });
});
