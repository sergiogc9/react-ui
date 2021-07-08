import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import Box from 'components/Box';
import Ripple from 'components/Ripple';
import { RippleProps } from './types';

const rippleTestId = 'ripple';
const renderRipple = (props?: Partial<RippleProps>) =>
  render(
    withTheme(
      <Box width="100px" height="100px" position="relative">
        <Ripple data-testid={rippleTestId} {...props} />
      </Box>
    )
  );

jest.useFakeTimers();

describe('Ripple component', () => {
  afterEach(cleanup);

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
      configurable: true,
      value: () => ({
        width: 10,
        height: 10,
        x: 50,
        y: 50,
        top: 0,
        left: 0,
        right: 0
      })
    });
  });

  it('should not render any ripple by default', () => {
    renderRipple();
    const ripple = screen.getByTestId(rippleTestId);
    expect(ripple.querySelector('span')).toBeNull();
  });

  it('should render one ripple after one click', () => {
    renderRipple();
    const ripple = screen.getByTestId(rippleTestId);
    userEvent.click(ripple);
    expect(ripple.querySelectorAll('span')).toHaveLength(1);
  });

  it('should render multiple ripples with multiple clicks', () => {
    renderRipple();
    const ripple = screen.getByTestId(rippleTestId);
    userEvent.click(ripple);
    userEvent.click(ripple);
    userEvent.click(ripple);
    expect(ripple.querySelectorAll('span')).toHaveLength(3);
  });

  it('should disappear all ripples', () => {
    renderRipple();
    const ripple = screen.getByTestId(rippleTestId);
    userEvent.click(ripple);
    userEvent.click(ripple);
    act(() => {
      jest.runAllTimers();
    });
    expect(ripple.querySelectorAll('span')).toHaveLength(0);
  });
});
