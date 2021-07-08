import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Icon from 'components/Icon';
import Button from './IconButton';
import { IconButtonProps } from './types';

const iconButtonTestId = 'button';

const mockOnClick = jest.fn();
const renderButton = (props?: Partial<IconButtonProps>) =>
  render(
    withTheme(
      <Button data-testid={iconButtonTestId} onClick={mockOnClick} {...props}>
        <Icon styling="outlined" icon="close" />
      </Button>
    )
  );

describe('Button component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render button with icon', () => {
    renderButton();
    const iconButton = screen.getByTestId(iconButtonTestId);
    expect(iconButton.querySelector('svg')).toBeInTheDocument();
  });

  it('should render render correct size', () => {
    renderButton({ aspectSize: 's' });
    const iconButton = screen.getByTestId(iconButtonTestId);
    expect(iconButton).toHaveStyle(
      `height: ${theme.components.iconButton.sizes.s}px;`
    );
  });

  it('should render render correct variant', () => {
    renderButton({ variant: 'floating' });
    const iconButton = screen.getByTestId(iconButtonTestId);
    expect(iconButton).toHaveStyle(
      `background: ${theme.components.iconButton.colors.floating.background.default};`
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
    const iconButton = screen.getByTestId(iconButtonTestId);
    expect(iconButton).toHaveStyle(`
      background-color: lightblue;
      border-color: purple;
      border-radius: 100px;
      color: lightgray;
      height: 200px;
      padding: 50px;
    `);
  });

  it('should render button as disabled if disabled', () => {
    renderButton({ isDisabled: true });
    const iconButton = screen.getByTestId(iconButtonTestId);
    expect(iconButton).toHaveAttribute('disabled');
    expect(iconButton).toHaveStyle('cursor: not-allowed;');
  });

  it('should call onClick handler', () => {
    renderButton();
    const iconButton = screen.getByTestId(iconButtonTestId);
    userEvent.click(iconButton);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should not call onClick handler if disabled', () => {
    renderButton({ isDisabled: true });
    const iconButton = screen.getByTestId(iconButtonTestId);

    userEvent.click(iconButton);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
