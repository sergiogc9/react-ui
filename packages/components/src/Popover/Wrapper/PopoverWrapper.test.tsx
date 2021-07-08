import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import PopoverContext from '../Context';
import { PopoverContextData } from '../Context/types';
import Popover from '..';
import { PopoverWrapperProps } from './types';

const popoverWrapperTestId = 'PopoverWrapper';
const text = 'Awesome content';

const ref = React.createRef<HTMLDivElement>() as React.MutableRefObject<HTMLElement>;
const defaultContextData: PopoverContextData = {
	popoverRef: ref
};

const renderPopoverWrapper = (
	props: Partial<PopoverWrapperProps> = {},
	contextData: Partial<PopoverContextData> = {}
) =>
	render(
		withTheme(
			<PopoverContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<Popover.Wrapper data-testid={popoverWrapperTestId} render={() => <div>{text}</div>} {...props} />
			</PopoverContext.Provider>
		)
	);

describe('PopoverWrapper component', () => {
	afterEach(cleanup);

	it('should not render content by default', () => {
		renderPopoverWrapper();
		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visible is true', async () => {
		renderPopoverWrapper({ isVisible: true });
		await waitFor(() => expect(screen.getByText(text)).toBeVisible());
	});

	it('should override default values', () => {
		renderPopoverWrapper({
			distance: 20,
			isVisible: true,
			skidding: 30,
			zIndex: 100
		});
		const popover = screen.getByText(text);
		expect(popover).toBeVisible();
	});
});
