import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import TabsContext from '../Context';
import { TabsContextData } from '../Context/types';
import TabsTab from './TabsTab';
import { TabsTabProps } from './types';

const tabTestId = 'TabsTab';
const text = 'Awesome tab';

const mockOnClick = jest.fn();

const defaultContextData: TabsContextData = {
	activeID: 'fake-id',
	onTabClicked: mockOnClick,
	tabsLayout: 'big-evenly'
};

const renderTabsTab = (props: Partial<TabsTabProps> = {}, contextData: Partial<TabsContextData> = {}) =>
	render(
		withTheme(
			<TabsContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<TabsTab id={tabTestId} data-testid={tabTestId} {...props}>
					{text}
				</TabsTab>
			</TabsContext.Provider>
		)
	);

describe('TabsTab component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render content', () => {
		renderTabsTab();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render tab as error', () => {
		renderTabsTab({ isError: true });
		const tab = screen.getByTestId(tabTestId);
		expect(tab).toHaveStyle(`
      color: ${theme.colors.red['400']};
    `);
	});
	it('should render tab as disabled', () => {
		renderTabsTab({ isDisabled: true });
		const tab = screen.getByTestId(tabTestId);
		expect(tab).toHaveStyle(`
        color: ${theme.colors.neutral['600']};
        opacity: 0.4;
        background: inherit;
    `);
	});
	it('should do nothing if disabled', () => {
		renderTabsTab({ isDisabled: true });
		expect(mockOnClick).toHaveBeenCalledTimes(0);
	});

	it('should call onTabClicked when click', async () => {
		renderTabsTab();
		const tab = screen.getByTestId(tabTestId);
		userEvent.click(tab);
		await waitFor(() => expect(mockOnClick).toHaveBeenCalledTimes(1));
	});

	it("should not call onTabClicked if we don't provide any", async () => {
		renderTabsTab({}, { onTabClicked: undefined });
		const tab = screen.getByTestId(tabTestId);
		userEvent.click(tab);
		await waitFor(() => expect(mockOnClick).toHaveBeenCalledTimes(0));
	});
});
