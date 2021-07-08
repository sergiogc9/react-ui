import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import Tooltip from 'components/Tooltip';
import { TooltipProps } from './types';

const tooltipTestId = 'Tooltip';
const contentText = 'Awesome content';
const triggerText = 'Awesome trigger';

const renderTooltip = (props?: Partial<TooltipProps>) =>
	render(
		withTheme(
			<Tooltip data-testid={tooltipTestId} {...props}>
				<Tooltip.Trigger>{triggerText}</Tooltip.Trigger>
				<Tooltip.Content>{contentText}</Tooltip.Content>
			</Tooltip>
		)
	);

describe('Tooltip component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render trigger element', () => {
		renderTooltip();
		expect(screen.getByText(triggerText)).toBeInTheDocument();
	});

	it('should not render content by default', () => {
		renderTooltip();
		expect(screen.queryByText(contentText)).toBeNull();
	});

	it('should render content if hovering the trigger', async () => {
		renderTooltip();
		const trigger = screen.getByText(triggerText);
		userEvent.hover(trigger);
		await waitFor(() => expect(screen.getByText(contentText)).toBeVisible());
	});
});
