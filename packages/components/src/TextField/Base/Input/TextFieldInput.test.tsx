import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import TextFieldInput from '.';
import { TextFieldInputProps } from './types';

const textFieldInputTestId = 'TextFieldInput';

const renderTextFieldInput = (props?: Partial<TextFieldInputProps>) =>
  render(
    withTheme(
      <TextFieldInput
        aspectSize="m"
        data-testid={textFieldInputTestId}
        labelPosition="inside"
        onChange={jest.fn()}
        value=""
        {...props}
      />
    )
  );

describe('TextFieldInput component', () => {
  afterEach(cleanup);

  it('should render styles without label or placeholder', () => {
    renderTextFieldInput();

    expect(screen.getByTestId(textFieldInputTestId)).toHaveStyle(`
      fontSize: ${theme.fontSizes[2]};
      padding-top: ${theme.space[0]};
    `);
  });

  it('should render styles with inside label and placeholder', () => {
    renderTextFieldInput({ label: 'Text', placeholder: 'Enter text' });

    expect(screen.getByTestId(textFieldInputTestId)).toHaveStyle(`
      padding-top: 16px;
    `);
  });
});
