import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { simulateScreenWidthChange, withTheme } from 'collections/private/utils/tests';

import useScreenSize from './useScreenSize';

const getComponent = () => {
	const Component = () => {
		const { size } = useScreenSize();

		return <div>{size}</div>;
	};
	return render(withTheme(<Component />));
};

describe('useScreenSize hook', () => {
	it('should detect xs screen', async () => {
		getComponent();

		simulateScreenWidthChange(100);

		await waitFor(() => expect(screen.getByText('xs')).toBeInTheDocument());
	});

	it('should detect sm screen', async () => {
		getComponent();

		simulateScreenWidthChange(500);

		await waitFor(() => expect(screen.getByText('sm')).toBeInTheDocument());
	});

	it('should detect md screen', async () => {
		getComponent();

		simulateScreenWidthChange(800);

		await waitFor(() => expect(screen.getByText('md')).toBeInTheDocument());
	});

	it('should detect lg screen', async () => {
		getComponent();

		simulateScreenWidthChange(1500);

		await waitFor(() => expect(screen.getByText('lg')).toBeInTheDocument());
	});

	it('should detect xl screen', async () => {
		getComponent();

		simulateScreenWidthChange(2000);

		await waitFor(() => expect(screen.getByText('xl')).toBeInTheDocument());
	});
});
