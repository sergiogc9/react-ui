import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import TabsHeader from './TabsHeader';
import { TabsHeaderProps } from './types';

const tabTestId = 'TabsHeader';
const text = 'Awesome tab';

const renderTabsHeader = (props?: Partial<TabsHeaderProps>) =>
  render(
    withTheme(
      <TabsHeader data-testid={tabTestId} {...props}>
        {text}
      </TabsHeader>
    )
  );

describe('TabsHeader component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render content', () => {
    renderTabsHeader();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
