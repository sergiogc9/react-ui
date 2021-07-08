import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import { BaseAnimationProps } from 'components/Animation';
import FadeOut, { FadeOutAnimation } from './FadeOut';

const FadeOutTestId = 'FadeOut';
const text = 'Awesome!';

const renderFadeOut = (props?: Partial<BaseAnimationProps>) =>
	render(
		withTheme(
			<FadeOut data-testid={FadeOutTestId} {...props}>
				{text}
			</FadeOut>
		)
	);

describe('FadeOut Animation component', () => {
	afterEach(cleanup);

	it('should render the content', () => {
		renderFadeOut();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should have correct animation name', () => {
		renderFadeOut();
		expect(screen.getByTestId(FadeOutTestId)).toHaveStyle(`
      animation-name: ${FadeOutAnimation.getName()}
    `);
	});
});
