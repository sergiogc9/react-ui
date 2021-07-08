import React from 'react';
import { render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import Link from 'components/Link';
import { withTheme } from 'components/private/utils/tests';
import { LinkProps } from './types';

const linkTestId = 'Link';
const renderLink = (props?: LinkProps) =>
  render(withTheme(<Link data-testid={linkTestId} {...props} />));

describe('Link', () => {
  beforeEach(() => renderLink());
  it('should render the Link element', () => {
    const link = screen.getByTestId(linkTestId);
    expect(link).toBeInTheDocument();
  });

  it('should render the link with the correct style', () => {
    const link = screen.getByTestId(linkTestId);
    expect(link).toHaveStyle(`
        color: ${theme.colors.blue['700']};
        cursor: pointer;
      `);
  });
});
