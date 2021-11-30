import React from 'react';
import { render, screen } from '@testing-library/react';

import { simulateScreenWidthChange, withTheme } from 'collections/private/utils/tests';

import Responsive from './Responsive';

import { ResponsiveProps } from './types';

const text = 'Awesome!';
const xsWidth = 100;
const mdWidth = 1000;
const lgWidth = 1500;

const getComponent = (props: Partial<ResponsiveProps> = {}) => {
	return render(
		withTheme(
			<Responsive visibility={['xs', 'sm', 'md']} {...props}>
				<div>{text}</div>
			</Responsive>
		)
	);
};

describe('Responsive', () => {
	it('should render content if visibility includes mobile and size is xs', () => {
		simulateScreenWidthChange(xsWidth);
		getComponent({ visibility: ['xs'] });

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should not render content if visibility not includes xs and size is xs', () => {
		simulateScreenWidthChange(xsWidth);
		getComponent({ visibility: ['md', 'lg'] });

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visibility includes md and size is md', () => {
		simulateScreenWidthChange(mdWidth);
		getComponent({ visibility: ['md'] });

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should not render content if visibility not includes md and size is md', () => {
		simulateScreenWidthChange(mdWidth);
		getComponent({ visibility: ['xs', 'lg'] });

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visibility includes lg and size is lg', () => {
		simulateScreenWidthChange(lgWidth);
		getComponent({ visibility: ['lg'] });

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should not render content if visibility not includes lg and size is lg', () => {
		simulateScreenWidthChange(lgWidth);
		getComponent({ visibility: ['xs', 'md'] });

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visibility is mobile', () => {
		simulateScreenWidthChange(xsWidth);
		getComponent({ visibility: 'mobile' });

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render content if visibility is mobile and screen is not mobile', () => {
		simulateScreenWidthChange(mdWidth);
		getComponent({ visibility: 'mobile' });

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visibility is tablet', () => {
		simulateScreenWidthChange(mdWidth);
		getComponent({ visibility: 'tablet' });

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render content if visibility is tablet and screen is not tablet', () => {
		simulateScreenWidthChange(lgWidth);
		getComponent({ visibility: 'tablet' });

		expect(screen.queryByText(text)).toBeNull();
	});

	it('should render content if visibility is desktop', () => {
		simulateScreenWidthChange(lgWidth);
		getComponent({ visibility: 'desktop' });

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render content if visibility is desktop and screen is not desktop', () => {
		simulateScreenWidthChange(xsWidth);
		getComponent({ visibility: 'desktop' });

		expect(screen.queryByText(text)).toBeNull();
	});
});
