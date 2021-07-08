import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Svg from 'components/Svg';
import { SvgProps } from './types';

const svgTestId = 'Svg';
const customPath = 'M1 M2';

const getLogo = (props?: Record<string, unknown>) => () => {
	const svgProps = {
		viewBox: '0 0 20 20',
		children: <path d="M1 M2" />,
		...props
	};
	return <svg {...svgProps} />;
};

const renderSvg = (props?: Partial<SvgProps>) => render(withTheme(<Svg data-testid={svgTestId} {...(props as any)} />));

describe('Svg component', () => {
	afterEach(cleanup);

	it('should render a svg with children', () => {
		renderSvg({ children: <path d={customPath} /> });
		const svg = screen.getByTestId(svgTestId);

		expect(svg.querySelector(`path[d="${customPath}"`)).toBeInTheDocument();
	});

	it('should render svg with correct viewBox', () => {
		const customViewBox = '0 0 10 10';
		renderSvg({ viewBox: customViewBox });
		const svg = screen.getByTestId(svgTestId);

		expect(svg).toHaveAttribute('viewBox', customViewBox);
	});

	it('should render logo using src', () => {
		renderSvg({ src: getLogo() });
		const svg = screen.getByTestId(svgTestId);

		expect(svg.querySelector(`path[d="${customPath}"`)).toBeInTheDocument();
	});

	it('should render logo with its viewBox', () => {
		renderSvg({ src: getLogo() });
		const svg = screen.getByTestId(svgTestId);

		expect(svg).toHaveAttribute('viewBox', '0 0 20 20');
	});

	it('should render logo with correct width and height from svg props', () => {
		renderSvg({ src: getLogo({ width: 50, height: 50 }) });
		const svg = screen.getByTestId(svgTestId);

		expect(svg).toHaveStyle(`
      width: 50px;
      height: 50px;
    `);
	});

	it('should render logo with correct width and height from viewBox', () => {
		renderSvg({ src: getLogo() });
		const svg = screen.getByTestId(svgTestId);

		expect(svg).toHaveStyle(`
      width: 20px;
      height: 20px;
    `);
	});

	it('should render logo with correct default viewBox if not provided', () => {
		renderSvg({ src: getLogo({ viewBox: undefined }) });
		const svg = screen.getByTestId(svgTestId);

		expect(svg).toHaveAttribute('viewBox', '0 0 0 0');
	});

	it('should render title if passed', () => {
		renderSvg({ title: 'awesome' });
		const svg = screen.getByTestId(svgTestId);

		expect(svg.querySelector('title')).toBeInTheDocument();
	});
});
