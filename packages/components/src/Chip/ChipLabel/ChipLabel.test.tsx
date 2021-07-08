import React from 'react';
import { render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Chip from '..';

const labelText = 'Label content';

const renderChipGroup = () =>
  render(
    withTheme(
      <Chip href="https://gironafc.cat" variant="white" aspectSize="s">
        <Chip.Label>{labelText}</Chip.Label>
      </Chip>
    )
  );

describe('Chip Label component', () => {
  it('should render the label content', () => {
    renderChipGroup();
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByText(labelText)).toHaveStyle({ fontWeight: 600 });
  });
});
