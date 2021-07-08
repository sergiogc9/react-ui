import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import { BaseAnimationProps } from 'components/Animation';
import FadeIn, { FadeInAnimation } from './FadeIn';

const fadeInTestId = 'FadeIn';
const text = 'Awesome!';

const renderFadeIn = (props?: Partial<BaseAnimationProps>) =>
	render(
		withTheme(
			<FadeIn data-testid={fadeInTestId} {...props}>
				{text}
			</FadeIn>
		)
	);

describe('FadeIn Animation component', () => {
	afterEach(cleanup);

	it('should render the content', () => {
		renderFadeIn();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should have correct animation name', () => {
		renderFadeIn();
		expect(screen.getByTestId(fadeInTestId)).toHaveStyle(`
      animation-name: ${FadeInAnimation.getName()}
    `);
	});
});
