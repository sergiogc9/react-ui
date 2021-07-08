import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import CheckBox from 'components/CheckBox';
import { CheckBoxProps } from './types';

const checkBoxTestId = 'AwesomeCheckBox';

const renderCheckBox = (props?: Partial<CheckBoxProps>) =>
  render(withTheme(<CheckBox data-testid={checkBoxTestId} {...props} />));

describe('CheckBox component', () => {
  it('should render the checkBox', () => {
    renderCheckBox();
    const checkBoxTest = screen.getByTestId(checkBoxTestId);
    expect(checkBoxTest).toBeInTheDocument();
    expect(checkBoxTest.querySelector('svg')).not.toBeInTheDocument();
  });

  it('should render the svg icon if isDefaultSelected', () => {
    renderCheckBox({ isDefaultSelected: true });
    const checkBoxTest = screen.getByTestId(checkBoxTestId);
    expect(checkBoxTest.querySelector('svg')).toBeInTheDocument();
  });

  it('should render checkBox as selected', () => {
    renderCheckBox({ isSelected: true });
    const checkBoxTest = screen.getByTestId(checkBoxTestId);
    expect(checkBoxTest).toBeInTheDocument();
  });

  it('should render checkBox as disabled', () => {
    renderCheckBox({ isDisabled: true });
    const checkBoxTest = screen.getByTestId(checkBoxTestId).firstChild;
    expect(checkBoxTest).toHaveStyle(`
      opacity: 0.4;
    `);
  });
});
