import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import TextAreaLabel from '.';
import { TextAreaLabelProps } from './types';

const textAreaLabelTestId = 'TextAreaLabel';
const text = 'Awesome Label';

const renderTextAreaLabel = (props?: Partial<TextAreaLabelProps>) =>
  render(
    withTheme(
      <TextAreaLabel
        data-testid={textAreaLabelTestId}
        labelPosition="inside"
        value=""
        {...props}
      >
        {text}
      </TextAreaLabel>
    )
  );

describe('TextAreaLabel component', () => {
  afterEach(cleanup);

  it('should render text', () => {
    renderTextAreaLabel();

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render styles without label or placeholder', () => {
    renderTextAreaLabel();

    expect(screen.getByTestId(textAreaLabelTestId)).toHaveStyle(`
      font-size: ${theme.fontSizes[2]}px;
      transform: translate(17px,8px);
    `);
  });

  it('should render styles with inside label and placeholder without value', () => {
    renderTextAreaLabel({ placeholder: 'Enter text' });

    expect(screen.getByTestId(textAreaLabelTestId)).toHaveStyle(`
      font-size: ${theme.fontSizes[0]}px;
      transform: translate(17px,8px);
    `);
  });

  it('should render styles with outside label and value', () => {
    renderTextAreaLabel({ value: 'Some text', labelPosition: 'outside' });

    expect(screen.getByTestId(textAreaLabelTestId)).toHaveStyle(`
      font-size: ${theme.fontSizes[0]}px;
      padding-left: 0;
      pointer-events: auto;
      transform: translate(1px,-20px);
    `);
  });
});
