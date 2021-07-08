import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import PopoverContext, { PopoverContextData } from 'components/Popover/Context';
import Tooltip from 'components/Tooltip';
import { TooltipContentProps } from './types';

const tooltipContentTestId = 'TooltipContent';
const text = 'Awesome content';

const ref = React.createRef<HTMLDivElement>() as React.MutableRefObject<HTMLElement>;
const defaultContextData: PopoverContextData = {
	popoverRef: ref
};

const renderTooltipContent = (
	props: Partial<TooltipContentProps> = {},
	contextData: Partial<PopoverContextData> = {}
) =>
	render(
		withTheme(
			<PopoverContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<Tooltip.Content data-testid={tooltipContentTestId} {...props}>
					{props?.children || text}
				</Tooltip.Content>
			</PopoverContext.Provider>
		)
	);

describe('TooltipContent component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should not render content by default', () => {
		renderTooltipContent();
		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visible is true', () => {
		renderTooltipContent({ isVisible: true });
		expect(screen.getByText(text)).toBeVisible();
	});

	it('should render not string children', () => {
		const contentText = 'This is a box!';
		renderTooltipContent({
			children: <div>{contentText}</div>,
			isVisible: true
		});
		expect(screen.getByText(contentText)).toBeVisible();
	});

	it('should hide arrow', () => {
		renderTooltipContent({ arrow: false, isVisible: true });
		const tooltip = screen.getByTestId(tooltipContentTestId);
		expect(tooltip.querySelector('div[data-popper-arrow]')!).toBeNull();
	});

	it('should override default values', () => {
		renderTooltipContent({
			arrowSize: 5,
			distance: 20,
			skidding: 30,
			variant: 'light',
			zIndex: 100,
			isVisible: true
		});
		const tooltip = screen.getByTestId(tooltipContentTestId);
		const arrow = tooltip.querySelector('div[data-popper-arrow]')!;
		expect(arrow).toHaveStyle(`
      background: transparent;
      width: 5px;
    `);
	});

	it('should set bottom positioning', () => {
		renderTooltipContent({
			arrowSize: 20,
			placement: 'bottom-start',
			isVisible: true
		});
		const tooltip = screen.getByTestId(tooltipContentTestId);
		const arrow = tooltip.querySelector('div[data-popper-arrow]')!;
		expect(arrow).toHaveStyle('top: -10px;');
	});

	it('should set top positioning', () => {
		renderTooltipContent({
			arrowSize: 20,
			placement: 'top-end',
			isVisible: true
		});
		const tooltip = screen.getByTestId(tooltipContentTestId);
		const arrow = tooltip.querySelector('div[data-popper-arrow]')!;
		expect(arrow).toHaveStyle('bottom: -10px;');
	});

	it('should set left positioning', () => {
		renderTooltipContent({
			arrowSize: 20,
			placement: 'left',
			isVisible: true
		});
		const tooltip = screen.getByTestId(tooltipContentTestId);
		const arrow = tooltip.querySelector('div[data-popper-arrow]')!;
		expect(arrow).toHaveStyle('right: -10px;');
	});

	it('should set right positioning', () => {
		renderTooltipContent({
			arrowSize: 20,
			placement: 'right',
			isVisible: true
		});
		const tooltip = screen.getByTestId(tooltipContentTestId);
		const arrow = tooltip.querySelector('div[data-popper-arrow]')!;
		expect(arrow).toHaveStyle('left: -10px;');
	});

	it('should add class visible for animating', async () => {
		renderTooltipContent({
			duration: 300,
			enterDelay: 0,
			exitDelay: 10,
			isVisible: true
		});
		const tooltip = screen.getByTestId(tooltipContentTestId);
		await waitFor(() => expect(tooltip).toHaveStyle('opacity: 1;'));
	});
});
