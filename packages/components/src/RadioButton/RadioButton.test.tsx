import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import RadioButton from 'components/RadioButton';
import { RadioButtonProps } from './types';

const radioButtonTestId = 'AwesomeRadioButton';

const renderRadioButton = (props?: Partial<RadioButtonProps>) =>
  render(withTheme(<RadioButton data-testid={radioButtonTestId} {...props} />));

describe('RadioButton component', () => {
  it('should render the radioButton', () => {
    renderRadioButton();
    const radioButtonTest = screen.getByTestId(radioButtonTestId);
    expect(radioButtonTest).toBeInTheDocument();
  });

  it('should render radioButton as selected', () => {
    renderRadioButton({ isSelected: true });
    const radioButtonTest = screen.getByTestId(radioButtonTestId);
    expect(radioButtonTest).toBeInTheDocument();
  });

  it('should render radioButton as disabled', () => {
    renderRadioButton({ isDisabled: true });
    const radioButtonTest = screen.getByTestId(radioButtonTestId).firstChild;
    expect(radioButtonTest).toHaveStyle(`
      opacity: 0.4;
    `);
  });
});
