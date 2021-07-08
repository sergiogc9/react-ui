import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import TabsContext from '../Context';
import { TabsContextData } from '../Context/types';
import TabsContent from './TabsContent';
import { TabsContentProps } from './types';

const tabContentTestId = 'TabsContent';
const text = 'Awesome tab';

const defaultContextData: TabsContextData = {
	activeID: 'fake-id',
	onTabClicked: jest.fn()
};

const renderTabsContent = (props: Partial<TabsContentProps> = {}, contextData: Partial<TabsContextData> = {}) =>
	render(
		withTheme(
			<TabsContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<TabsContent id={tabContentTestId} data-testid={tabContentTestId} {...props}>
					{text}
				</TabsContent>
			</TabsContext.Provider>
		)
	);

describe('TabsContent component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});
	it('should not render content by default', () => {
		renderTabsContent();
		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if is active tab', () => {
		renderTabsContent({}, { activeID: tabContentTestId });
		expect(screen.getByText(text)).toBeVisible();
	});
});
