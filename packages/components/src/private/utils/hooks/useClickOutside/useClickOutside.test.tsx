import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useClickOutside from 'components/private/utils/hooks/useClickOutside';

const testId = 'test';
const innerText = 'inside';
const outerText = 'outside';

type TestProps = { onOutsideClick: () => void };
const TestComponent = ({ onOutsideClick }: TestProps) => {
  const ref = React.useRef(null);
  useClickOutside(ref, onOutsideClick);

  return (
    <>
      <div ref={ref}>{innerText}</div>
      <div>{outerText}</div>
    </>
  );
};

const mockOnOutsideClick = jest.fn();
const renderTestComponent = (props: Partial<TestProps> = {}) =>
  render(
    <TestComponent
      data-testid={testId}
      onOutsideClick={mockOnOutsideClick}
      {...props}
    />
  );

describe('useClickOutside test', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should not call handler if clicked inside', () => {
    renderTestComponent();
    userEvent.click(screen.getByText(innerText));
    expect(mockOnOutsideClick).toHaveBeenCalledTimes(0);
  });

  it('should call handler if clicked outside', () => {
    renderTestComponent();
    userEvent.click(screen.getByText(outerText));
    expect(mockOnOutsideClick).toHaveBeenCalledTimes(1);
  });
});
