import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import PopoverContext, { PopoverContextData } from 'components/Popover/Context';
import Tooltip from '..';
import { TooltipTriggerProps } from './types';

const tooltipTriggerTestId = 'TooltipTrigger';
const text = 'Awesome trigger';

const ref = React.createRef<HTMLDivElement>() as React.MutableRefObject<HTMLElement>;
const defaultContextData: PopoverContextData = {
	popoverRef: ref
};

const renderTooltipTrigger = (
	props: Partial<TooltipTriggerProps> = {},
	contextData: Partial<PopoverContextData> = {}
) =>
	render(
		withTheme(
			<PopoverContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<Tooltip.Trigger data-testid={tooltipTriggerTestId} {...props}>
					{text}
				</Tooltip.Trigger>
			</PopoverContext.Provider>
		)
	);

describe('TooltipTrigger component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render content', () => {
		renderTooltipTrigger();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should pass ref correctly', () => {
		renderTooltipTrigger();
		expect(ref.current!.innerHTML).toEqual(text);
	});
});
