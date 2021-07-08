import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme, { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Button from 'components/Button';
import { ButtonProps } from './types';

const buttonTestId = 'button';
const btnText = 'Awesome btn!';

const mockOnClick = jest.fn();
const renderButton = (
  props?: Partial<ButtonProps>,
  children: React.ReactNode | React.ReactNode[] = btnText
) =>
  render(
    withTheme(
      <Button data-testid={buttonTestId} onClick={mockOnClick} {...props}>
        {children}
      </Button>
    )
  );

describe('Button component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render button with span text', () => {
    renderButton();
    const button = screen.getByTestId(buttonTestId);
    expect(screen.getByText(btnText)).toBeInTheDocument();
    expect(button.querySelector('span')).toBeInTheDocument();
  });

  it('should render button with custom children', () => {
    const divText = 'Awesome';
    renderButton({}, <div>{divText}</div>);
    const button = screen.getByTestId(buttonTestId);
    expect(screen.getByText(divText)).toBeInTheDocument();
    expect(button.querySelector('span')).not.toBeInTheDocument();
  });

  it('should render correct size', () => {
    renderButton({ aspectSize: 'l' });
    const button = screen.getByTestId(buttonTestId);
    expect(button).toHaveStyle(
      `height: ${theme.components.button.heights.l}px;`
    );
  });

  it('should render correct variant', () => {
    renderButton({ variant: 'warning' });
    const button = screen.getByTestId(buttonTestId);
    expect(button).toHaveStyle(
      `background-color: ${getColorFromTheme(
        theme,
        theme.components.button.colors.warning.background.default
      )}FF;`
    );
  });

  it('should render correct link variant', () => {
    renderButton({ variant: 'link' });
    const button = screen.getByTestId(buttonTestId);
    expect(button).toHaveStyle(
      `background-color: ${getColorFromTheme(
        theme,
        theme.components.button.colors.link.background.default
      )};`
    );
  });

  it('should render custom css props', () => {
    renderButton({
      bg: 'lightblue',
      borderColor: 'purple',
      borderRadius: '100px',
      color: 'lightgray',
      height: '200px',
      padding: '50px'
    });
    const button = screen.getByTestId(buttonTestId);
    expect(button).toHaveStyle(`
      background-color: lightblue;
      border-color: purple;
      border-radius: 100px;
      color: lightgray;
      height: 200px;
      padding: 50px;
    `);
  });

  it('should render loaded if loading', () => {
    renderButton({ isLoading: true });
    const button = screen.getByTestId(buttonTestId);

    expect(button.querySelector('span:nth-child(1)')).toBeInTheDocument();
    expect(button.querySelector('span:nth-child(2)')).toBeInTheDocument();
    expect(button.querySelector('span:nth-child(3)')).toBeInTheDocument();
  });

  it('should render button as disabled if disabled', () => {
    renderButton({ isDisabled: true });
    const button = screen.getByTestId(buttonTestId);

    expect(button).toHaveAttribute('disabled');
    expect(button).toHaveStyle('cursor: not-allowed;');
  });

  it('should call onClick handler', () => {
    renderButton();
    const button = screen.getByTestId(buttonTestId);

    userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should not call onClick handler if disabled', () => {
    renderButton({ isDisabled: true });
    const button = screen.getByTestId(buttonTestId);

    userEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('should not call onClick handler if loading', () => {
    renderButton({ isLoading: true });
    const button = screen.getByTestId(buttonTestId);

    userEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('should render left icon', () => {
    renderButton({}, [
      <Button.Icon key={1} styling="filled" icon="add" />,
      <Button.Text key={2}>{btnText}</Button.Text>
    ]);
    const button = screen.getByTestId(buttonTestId);

    expect(screen.getByText(btnText)).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should render right icon', () => {
    renderButton({}, [
      <Button.Text key={2}>{btnText}</Button.Text>,
      <Button.Icon key={1} styling="filled" icon="add" />
    ]);
    const button = screen.getByTestId(buttonTestId);

    expect(screen.getByText(btnText)).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
