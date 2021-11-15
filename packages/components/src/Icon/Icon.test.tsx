import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Icon from 'components/Icon';
import { IconProps } from './types';

const iconTestId = 'icon';
const renderIcon = (props?: Partial<IconProps>) =>
	render(
		withTheme(<Icon data-testid={iconTestId} fill="primary.500" icon="users" styling="filled" {...(props as any)} />)
	);

describe('Icon component', () => {
	afterEach(cleanup);

	it('should render a filled icon', () => {
		renderIcon();
		const icon = screen.getByTestId(iconTestId);
		expect(icon.querySelector('path[d]')).toBeInTheDocument();
	});

	it('should render a outlined icon', () => {
		renderIcon({
			styling: 'outlined',
			icon: 'user'
		});
		const icon = screen.getByTestId(iconTestId);
		expect(icon.querySelector('path[d]')).toBeInTheDocument();
	});

	it('should render a custom icon', () => {
		const customPath = 'M9 16.17L4.83';
		renderIcon({
			content: <path d={customPath} />
		});
		const icon = screen.getByTestId(iconTestId);
		expect(icon.querySelector(`path[d="${customPath}"]`)).toBeInTheDocument();
	});

	it('should render correct size', () => {
		renderIcon({ aspectSize: 'l' });
		const icon = screen.getByTestId(iconTestId);
		expect(icon).toHaveStyle('width: 32px');
	});

	it('should render custom viewBox', () => {
		const customViewBox = '0 0 10 10';
		renderIcon({ viewBox: customViewBox });
		const icon = screen.getByTestId(iconTestId);
		expect(icon).toHaveAttribute('viewBox', customViewBox);
	});

	it('should fill color correctly', () => {
		renderIcon();
		const icon = screen.getByTestId(iconTestId);
		expect(icon).toHaveStyle(`fill: ${theme.colors.primary['500']}`);
	});
});
