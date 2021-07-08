import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import PopoverContext from '../Context';
import { PopoverContextData } from '../Context/types';
import Popover from '..';
import { PopoverContentProps } from './types';

const popoverContentTestId = 'PopoverContent';
const text = 'Awesome content';
const mockOnMouseDown = jest.fn();
const mockOnTouchStart = jest.fn();

const ref = React.createRef<HTMLDivElement>() as React.MutableRefObject<HTMLElement>;
const defaultContextData: PopoverContextData = {
	popoverRef: ref
};

const renderPopoverContent = (
	props: Partial<PopoverContentProps> = {},
	contextData: Partial<PopoverContextData> = {}
) =>
	render(
		withTheme(
			<PopoverContext.Provider value={{ ...defaultContextData, ...contextData }}>
				<Popover.Content
					data-testid={popoverContentTestId}
					onMouseDown={mockOnMouseDown}
					onTouchStart={mockOnTouchStart}
					{...props}
				>
					{props?.children || text}
				</Popover.Content>
			</PopoverContext.Provider>
		)
	);

describe('PopoverContent component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should not render content by default', () => {
		renderPopoverContent();

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visible is true', () => {
		renderPopoverContent({ isVisible: true });

		expect(screen.getByText(text)).toBeVisible();
	});

	it('should render not string children', () => {
		const contentText = 'This is a box!';
		renderPopoverContent({
			children: <div>{contentText}</div>,
			isVisible: true
		});

		expect(screen.getByText(contentText)).toBeVisible();
	});

	it('should override default values and be visible', () => {
		renderPopoverContent({
			distance: 20,
			isInteractive: true,
			isVisible: true,
			skidding: 30,
			zIndex: 100
		});
		const popover = screen.getByTestId(popoverContentTestId);

		expect(popover).toBeVisible();
	});

	it('should call onMouseDown', () => {
		renderPopoverContent({ isVisible: true });

		userEvent.click(screen.getByText(text));

		expect(mockOnMouseDown).toHaveBeenCalled();
	});

	it('should not call onMouseDown if not provided', () => {
		renderPopoverContent({ isVisible: true, onMouseDown: undefined });

		userEvent.click(screen.getByText(text));

		expect(mockOnMouseDown).not.toHaveBeenCalled();
	});

	it('should call onTouchStart', () => {
		renderPopoverContent({ isVisible: true });

		fireEvent.touchStart(screen.getByText(text));

		expect(mockOnTouchStart).toHaveBeenCalled();
	});

	it('should not call onTouchStart if not provided', () => {
		renderPopoverContent({ isVisible: true, onTouchStart: undefined });

		fireEvent.touchStart(screen.getByText(text));

		expect(mockOnTouchStart).not.toHaveBeenCalled();
	});
});
