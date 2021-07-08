import React from 'react';
import { cleanup, render } from '@testing-library/react';

import usePageBlur from 'components/private/utils/hooks/usePageBlur';

const blurDefaultPx = 10;
const rootId = 'root';

type TestProps = { blurPx: number | undefined; id: string };
const TestComponent = ({ blurPx, id }: TestProps) => {
  usePageBlur(blurPx);

  return <div id={id} />;
};

const renderTestComponent = (props: Partial<TestProps> = {}) =>
  render(<TestComponent blurPx={blurDefaultPx} id={rootId} {...props} />);

describe('usePageBlur test', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should add blur styling to root div', () => {
    const { container } = renderTestComponent();
    expect(container.querySelector(`#${rootId}`)).toHaveStyle(
      'filter: blur(10px);'
    );
  });

  it('should add blur styling to body if root div is not found', () => {
    const { baseElement } = renderTestComponent({ id: 'another-id' });
    expect(baseElement).toHaveStyle('filter: blur(10px);');
  });

  it('should not add blur styling if blur not provided', () => {
    const { container } = renderTestComponent({ blurPx: undefined });
    expect(container.querySelector(`#${rootId}`)).not.toHaveStyle(
      'filter: blur(10px);'
    );
  });

  it('should set last blur to element if more than one hook is called', async () => {
    const TestMultiple = () => {
      usePageBlur(10);
      usePageBlur(20);

      return <div id={rootId} />;
    };
    const { container } = render(<TestMultiple />);
    expect(container.querySelector(`#${rootId}`)).toHaveStyle(
      'filter: blur(20px);'
    );
  });
});
