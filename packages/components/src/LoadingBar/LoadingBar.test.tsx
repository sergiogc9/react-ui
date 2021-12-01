import React from 'react';
import { render, screen } from '@testing-library/react';

import { useAnimationsInTests, withTheme } from 'components/private/utils/tests';

import { LoadingBarProps } from './types';
import LoadingBar from '.';

const barTestId = 'loadingBar';
const barProgressTestId = 'loadingBarProgress';

const getComponent = (props: Partial<LoadingBarProps> = {}) => <LoadingBar isVisible {...props} />;

const renderComponent = (props: Partial<LoadingBarProps> = {}) => render(withTheme(getComponent(props)));

jest.useFakeTimers('modern');

describe('LoadingBar', () => {
	beforeAll(() => {
		useAnimationsInTests();
	});

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render bar and bar progress', () => {
		renderComponent();

		expect(screen.getByTestId(barTestId)).toBeInTheDocument();
		expect(screen.getByTestId(barProgressTestId)).toBeInTheDocument();
	});

	it('should render bar with progress equal to 0', () => {
		renderComponent();

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 0%;
		`);
	});

	it('should render bar with progress equal to 55% in first iteration', () => {
		renderComponent();

		jest.advanceTimersByTime(100);

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 55%;
		`);
	});

	it('should render bar with progress equal to 70% in second iteration', () => {
		renderComponent();

		jest.advanceTimersByTime(300);

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 70%;
		`);
	});

	it('should render bar with progress equal to 80% in third iteration', () => {
		renderComponent();

		jest.advanceTimersByTime(4000);

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 80%;
		`);
	});

	it('should render bar with progress equal to 90% after animation ends', () => {
		renderComponent();

		jest.advanceTimersByTime(25000);

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 90%;
		`);
	});

	it('should render bar to 100% when bar hides after 1 second', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 0%;
		`);

		jest.advanceTimersByTime(1000);

		rerender(getComponent({ isVisible: false }));

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 100%;
		`);
	});

	it('should wait to render progress to 100% when bar hides before 1 second', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 0%;
		`);

		rerender(getComponent({ isVisible: false }));

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 0%;
		`);

		jest.advanceTimersByTime(1200);

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 100%;
		`);
	});

	it('should remove bar after hiding', () => {
		const { rerender } = render(getComponent());

		expect(screen.getByTestId(barProgressTestId)).toHaveStyle(`
			width: 0%;
		`);

		jest.advanceTimersByTime(1000);

		rerender(getComponent({ isVisible: false }));

		jest.advanceTimersByTime(1000);

		expect(screen.getByTestId(barTestId)).toHaveStyle(`
			animation-direction: reverse;
		`);
	});
});
