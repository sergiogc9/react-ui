import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import Tabs from 'components/Tabs';
import { TabsProps } from './types';

const TabsTestId = 'tabs';
const defaultTab = 'awesome-tab';
const nonDefaultTab = 'awesome-tab-of-my-life';
const TabTitle = 'Awesome tab';
const TabContent = 'Awesome content';
const nonDefaultTabContent = 'Awesome content of my life';

const renderTabs = (props?: Partial<TabsProps>) =>
	render(
		withTheme(
			<Tabs defaultTab={defaultTab} data-testid={TabsTestId} {...props}>
				<Tabs.Menu>
					<Tabs.Tab id={defaultTab}>{TabTitle}</Tabs.Tab>
					<Tabs.Tab id={nonDefaultTab}>{nonDefaultTab}</Tabs.Tab>
				</Tabs.Menu>
				<Tabs.Content id={defaultTab}>{TabContent}</Tabs.Content>
				<Tabs.Content id={nonDefaultTab}>{nonDefaultTabContent}</Tabs.Content>
			</Tabs>
		)
	);

describe('Tabs component', () => {
	afterEach(cleanup);

	it('should render tabs content', () => {
		renderTabs();
		expect(screen.getByText(TabContent)).toBeInTheDocument();
	});

	it('should render content if clicking his tab', async () => {
		renderTabs();
		const trigger = screen.getByText(nonDefaultTab);
		userEvent.click(trigger);
		await waitFor(() => expect(screen.getByText(nonDefaultTabContent)).toBeVisible());
	});
});
