import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import StepperIcon from '.';
import { StepperIconProps } from './types';

const renderStepperIcon = (props: Partial<StepperIconProps> = {}) =>
  render(
    withTheme(
      <StepperIcon styling="outlined" icon="user" {...(props as any)} />
    )
  );

describe('StepperIcon component', () => {
  afterEach(cleanup);

  it('should render icon', () => {
    const { container } = renderStepperIcon();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
