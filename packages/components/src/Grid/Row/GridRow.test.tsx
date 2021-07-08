import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import { GridRow } from './styled';
import { GridRowProps } from './types';

const testID = 'gridRow';
const text = 'Awesome text';

const renderGridRow = (props?: GridRowProps) =>
  render(
    withTheme(
      <GridRow data-testid={testID} {...props}>
        {text}
      </GridRow>
    )
  );

describe('Box', () => {
  afterEach(cleanup);

  it('should render content', () => {
    renderGridRow();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should render default grid styles', () => {
    renderGridRow();
    expect(screen.getByText(text)).toHaveStyle(`
      grid-column: 1 / -1;
      grid-row: span 1;
    `);
  });
});
