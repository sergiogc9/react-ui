import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import TabsMenu from './TabsMenu';
import { TabsMenuProps } from './types';

const tabTestId = 'TabsMenu';
const text = 'Awesome tab';

const renderTabsMenu = (props?: Partial<TabsMenuProps>) =>
  render(
    withTheme(
      <TabsMenu data-testid={tabTestId} {...props}>
        {text}
      </TabsMenu>
    )
  );

describe('TabsMenu component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render content', () => {
    renderTabsMenu();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
