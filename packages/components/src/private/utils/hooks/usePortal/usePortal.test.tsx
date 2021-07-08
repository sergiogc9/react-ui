import React from 'react';
import { cleanup, render } from '@testing-library/react';

import usePortal from 'components/private/utils/hooks/usePortal';

const wrapperId = 'wrapper';
const testClass = 'test-class';

type TestProps = { id: string };
const TestComponent = ({ id }: TestProps) => {
  const targetRef = usePortal(id);
  targetRef.current.classList.add(testClass);

  return <div id={wrapperId} />;
};

const renderTestComponent = (props: Partial<TestProps> = {}) =>
  render(<TestComponent id={wrapperId} {...props} />);

describe('usePortal test', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should create div inside wrapper div if div with passed id exists', () => {
    const { container } = renderTestComponent();
    expect(
      container.querySelector(`#${wrapperId} > .${testClass}`)
    ).toBeInTheDocument();
  });

  it('should create div inside body div if div with passed id not exists', () => {
    const { baseElement } = renderTestComponent({ id: 'wrong' });
    expect(
      baseElement.querySelector(`body > .${testClass}`)
    ).toBeInTheDocument();
  });
});
