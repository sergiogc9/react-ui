import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Overlay from 'components/Overlay';
import { OverlayProps } from './types';

const overlayId = 'overlays';
const overlayTestId = 'Overlay';
const rootTestId = 'root';
const renderOverlay = (props?: Partial<OverlayProps>) =>
	render(
		withTheme(
			<>
				<div id="root" data-testid={rootTestId}>
					<Overlay data-testid={overlayTestId} {...props} />
				</div>
				<div id={overlayId} />
			</>
		)
	);

describe('Overlay component', () => {
	afterEach(cleanup);

	it('should render overlay inside overlays div', () => {
		const { container } = renderOverlay();

		expect(container.querySelector(`#${overlayId} > div`)).toBeInTheDocument();
	});

	it('should render blur in root div', () => {
		renderOverlay({ blur: 30, isVisible: true });
		const root = screen.getByTestId(rootTestId);

		expect(root).toHaveStyle('filter: blur(30px);');
	});

	it('should not render blur if not visible', () => {
		renderOverlay({ blur: 30, isVisible: false });
		const root = screen.getByTestId(rootTestId);

		expect(root).not.toHaveStyle('filter: blur(30px);');
	});
});
