import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import { BaseAnimationProps } from 'components/Animation';
import SlideDown, { SlideDownAnimation } from './SlideDown';

const SlideDownTestId = 'SlideDown';
const text = 'Awesome!';

const renderSlideDown = (props?: Partial<BaseAnimationProps>) =>
	render(
		withTheme(
			<SlideDown data-testid={SlideDownTestId} {...props}>
				{text}
			</SlideDown>
		)
	);

describe('SlideDown Animation component', () => {
	afterEach(cleanup);

	it('should render the content', () => {
		renderSlideDown();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should have correct animation name', () => {
		renderSlideDown();
		expect(screen.getByTestId(SlideDownTestId)).toHaveStyle(`
      animation-name: ${SlideDownAnimation.getName()}
    `);
	});
});
