import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Spinner from 'components/Spinner';
import { PulseProps } from './types';

const spinnerPulseTestId = 'spinner';
const renderSpinner = (props?: Partial<PulseProps>) =>
  render(
    withTheme(
      <Spinner data-testid={spinnerPulseTestId}>
        <Spinner.Pulse index={0} {...props} />
      </Spinner>
    )
  );

describe('Spinner component', () => {
  afterEach(cleanup);

  it('should return pulse element as span', () => {
    renderSpinner();
    const spinner = screen.getByTestId(spinnerPulseTestId);
    expect(spinner.querySelector('span')).toBeInTheDocument();
  });
});
