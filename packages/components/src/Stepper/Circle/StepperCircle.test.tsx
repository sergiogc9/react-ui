import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import StepperCircle from './StepperCircle';
import { StepperStepContext } from '../Context';
import { StepperStepContextData } from '../Context/types';
import { StepperCircleProps } from './types';

const text = 'Awesome tab';
const defaultContextData: StepperStepContextData = {
  current: 0,
  index: 0,
  isLast: false,
  showCheckIcon: false,
  variant: 'vertical'
};

const renderStepperCircle = (
  props: Partial<StepperCircleProps> = {},
  contextData: Partial<StepperStepContextData> = {}
) =>
  render(
    withTheme(
      <StepperStepContext.Provider
        value={{ ...defaultContextData, ...contextData }}
      >
        <StepperCircle {...props}>{text}</StepperCircle>
      </StepperStepContext.Provider>
    )
  );

describe('StepperCircle component', () => {
  afterEach(cleanup);

  it('should render content', () => {
    renderStepperCircle();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should not render line', () => {
    renderStepperCircle({});
    expect(screen.getByTestId('stepper-circle-line')).toBeInTheDocument();
  });

  it('should not render line if last', () => {
    renderStepperCircle({}, { isLast: true });
    expect(screen.queryByTestId('stepper-circle-line')).toBeNull();
  });

  it('should not render with active color', () => {
    renderStepperCircle({}, { current: 2, index: 1 });
    expect(screen.getByText(text)).toHaveStyle(`
      background-color: transparent;
      color: ${theme.colors.primary['500']};
    `);
  });

  it('should not render with transparent color', () => {
    renderStepperCircle({}, { current: 1, index: 1 });
    expect(screen.getByText(text)).toHaveStyle(`
      background-color: ${theme.colors.primary['500']};
      color: ${theme.colors.neutral['0']};
    `);
  });

  it('should not render with disabled color', () => {
    renderStepperCircle({}, { current: 1, index: 3 });
    expect(screen.getByText(text)).toHaveStyle(`
       background-color: transparent;
       color: ${theme.colors.neutral['500']};
    `);
  });

  it('should render check icon if previous step', () => {
    renderStepperCircle({}, { current: 2, index: 1, showCheckIcon: true });
    expect(screen.getByTestId('stepper-circle-check-icon')).toBeInTheDocument();
  });

  it('should not render check icon if not previous step', () => {
    renderStepperCircle({}, { current: 2, index: 3, showCheckIcon: true });
    expect(screen.queryByTestId('stepper-circle-check-icon')).toBeNull();
  });

  it('should render small check icon for compacted variant', () => {
    renderStepperCircle(
      {},
      { current: 2, index: 1, showCheckIcon: true, variant: 'compacted' }
    );
    expect(screen.getByTestId('stepper-circle-check-icon')).toHaveStyle(
      `width: ${theme.components.icon.sizes.s}px`
    );
  });
});
