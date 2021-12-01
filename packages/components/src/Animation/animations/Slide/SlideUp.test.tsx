import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { useAnimationsInTests, withTheme } from 'components/private/utils/tests';
import { BaseAnimationProps } from 'components/Animation';
import SlideUp, { SlideUpAnimation } from './SlideUp';

const SlideUpTestId = 'SlideUp';
const text = 'Awesome!';

const renderSlideUp = (props?: Partial<BaseAnimationProps>) =>
	render(
		withTheme(
			<SlideUp data-testid={SlideUpTestId} {...props}>
				{text}
			</SlideUp>
		)
	);

describe('SlideUp Animation component', () => {
	afterEach(cleanup);

	beforeAll(() => {
		useAnimationsInTests();
	});

	it('should render the content', () => {
		renderSlideUp();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should have correct animation name', () => {
		renderSlideUp();
		expect(screen.getByTestId(SlideUpTestId)).toHaveStyle(`
      animation-name: ${SlideUpAnimation.getName()}
    `);
	});
});
