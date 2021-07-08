import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Title from 'components/Title';
import { TitleProps } from './types';

const testID = 'title';

const renderTitle = (props?: TitleProps) =>
  render(withTheme(<Title data-testid={testID} {...props} />));

describe('Title component', () => {
  afterEach(cleanup);

  it('should render Title by default', () => {
    renderTitle();
    const title = screen.getByTestId(testID);

    expect(title).toHaveStyle('font-weight: 600');
  });

  it('should render Title with custom color', () => {
    renderTitle({ color: 'red.500' });
    const title = screen.getByTestId(testID);

    expect(title).toHaveStyle(`color: ${theme.colors.red['500']};`);
  });

  it('should render Title with custom alignment', () => {
    renderTitle({ textAlign: 'right' });
    const title = screen.getByTestId(testID);

    expect(title).toHaveStyle('text-align: right');
  });
});
