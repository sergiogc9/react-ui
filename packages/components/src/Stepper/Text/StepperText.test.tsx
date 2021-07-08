import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import StepperText, { StepperTextOptional } from '.';
import { StepperStepContext } from '../Context';
import { StepperStepContextData } from '../Context/types';
import { StepperTextProps } from './types';

const defaultContextData: StepperStepContextData = {
  current: 0,
  index: 0,
  isLast: false,
  showCheckIcon: false,
  variant: 'vertical'
};

const text = 'awesome text';
const renderStepperText = (
  props: Partial<StepperTextProps> = {},
  contextData: Partial<StepperStepContextData> = {}
) =>
  render(
    withTheme(
      <StepperStepContext.Provider
        value={{ ...defaultContextData, ...contextData }}
      >
        <StepperText {...props}>{text}</StepperText>
      </StepperStepContext.Provider>
    )
  );

const renderStepperTextOptional = (
  props: Partial<StepperTextProps> = {},
  contextData: Partial<StepperStepContextData> = {}
) =>
  render(
    withTheme(
      <StepperStepContext.Provider
        value={{ ...defaultContextData, ...contextData }}
      >
        <StepperTextOptional {...props}>{text}</StepperTextOptional>
      </StepperStepContext.Provider>
    )
  );

describe('StepperText component', () => {
  afterEach(cleanup);

  it('should render text', () => {
    renderStepperText();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render text in bold if step is the current one', () => {
    renderStepperText({}, { current: 1, index: 1 });
    expect(screen.getByText(text)).toHaveStyle(`
      font-weight: ${theme.fontWeights.bold};
    `);
  });

  it('should render text in disabled if step has not been reached yet', () => {
    renderStepperText({}, { current: 1, index: 2 });
    expect(screen.getByText(text)).toHaveStyle(`
      font-weight: ${theme.fontWeights.regular};
    `);
  });

  it('should print correct optional text default styles', () => {
    renderStepperTextOptional();
    expect(screen.getByText(text)).toHaveStyle(`
      font-size: ${theme.fontSizes[0]}px;
    `);
  });

  it('should print correct optional text overriden styles', () => {
    renderStepperTextOptional({
      color: 'red.500',
      fontSize: 1,
      fontWeight: 'bold',
      marginTop: '30px'
    });
    expect(screen.getByText(text)).toHaveStyle(`
      color: ${theme.colors.red['500']};
      font-size: ${theme.fontSizes[1]}px;
      font-weight: ${theme.fontWeights.bold};
      margin-top: 30px;
    `);
  });
});
