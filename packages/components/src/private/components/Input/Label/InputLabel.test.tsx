import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import InputLabel from '.';
import { InputLabelProps } from './types';

const inputLabelTestId = 'InputLabel';
const text = 'Awesome Label';

const renderInputHelperText = (props?: Partial<InputLabelProps>) =>
  render(
    withTheme(
      <InputLabel data-testid={inputLabelTestId} {...props}>
        {text}
      </InputLabel>
    )
  );

describe('InputLabel component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render Label text', () => {
    renderInputHelperText();

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render label as error', () => {
    renderInputHelperText({ isError: true });
    const inputLabel = screen.getByTestId(inputLabelTestId);

    expect(inputLabel).toHaveStyle(`color: ${theme.colors.red['500']};`);
  });

  it('should render label as success', () => {
    renderInputHelperText({ isSuccess: true });
    const inputLabel = screen.getByTestId(inputLabelTestId);

    expect(inputLabel).toHaveStyle(`color: ${theme.colors.green['500']};`);
  });

  it('should render label as disabled', () => {
    renderInputHelperText({ isDisabled: true });
    const inputLabel = screen.getByTestId(inputLabelTestId);

    expect(inputLabel).toHaveStyle(`
        color: ${theme.colors.neutral['400']};
    `);
  });
});
