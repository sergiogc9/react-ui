import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Counter from 'components/Counter';
import { CounterProps } from './types';

const counterTestId = 'counterTestId';

const renderCounter = (props?: Partial<CounterProps>) =>
  render(withTheme(<Counter data-testid={counterTestId} {...props} />));

describe('Icon component', () => {
  afterEach(cleanup);

  it('should render the Counter component', () => {
    renderCounter({ numberOfItems: 3 });
    const counter = screen.getByTestId(counterTestId);
    expect(counter).toBeInTheDocument();
  });

  it('should not render the Counter component', () => {
    renderCounter();
    const counter = screen.queryByTestId(counterTestId);
    expect(counter).not.toBeInTheDocument();
  });

  it('should render the desired count', () => {
    renderCounter({
      numberOfItems: 3
    });
    const counter = screen.getByTestId(counterTestId);

    expect(counter.firstElementChild).toHaveTextContent('3');
  });

  it('should render the maximum permitted in badge (+999) if more than 1000 items are present', () => {
    renderCounter({
      numberOfItems: 1000
    });
    const counter = screen.getByTestId(counterTestId);

    expect(counter.firstElementChild).toHaveTextContent('+999');
  });
});
