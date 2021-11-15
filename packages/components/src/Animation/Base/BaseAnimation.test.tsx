import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Title from 'components/Title';
import BaseAnimation from './BaseAnimation';
import Animation from '..';
import { BaseAnimationProps } from './types';
import withBaseAnimation from './withBaseAnimation';

const BaseAnimationTestId = 'BaseAnimation';
const text = 'Awesome!';
const mockOnAnimationEnd = jest.fn();

const renderBaseAnimation = (props?: Partial<BaseAnimationProps>) =>
	render(
		withTheme(
			<BaseAnimation
				animation={Animation.FadeInAnimation}
				data-testid={BaseAnimationTestId}
				onAnimationEnd={mockOnAnimationEnd}
				{...props}
			>
				{text}
			</BaseAnimation>
		)
	);

const renderWithBaseAnimation = (props?: Partial<BaseAnimationProps>) => {
	const AnimatedTitle = withBaseAnimation(Title, Animation.FadeInAnimation);
	render(
		withTheme(
			<AnimatedTitle data-testid={BaseAnimationTestId} {...props}>
				{text}
			</AnimatedTitle>
		)
	);
};

describe('BaseAnimation Animation component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render the content', () => {
		renderBaseAnimation();

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should have correct styles', () => {
		renderBaseAnimation({
			delay: '5s',
			fillMode: 'forwards',
			timingFunction: 'ease-out'
		});

		expect(screen.getByTestId(BaseAnimationTestId)).toHaveStyle(`
      animation-delay: 5s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
    `);
	});

	it('should render animation name', () => {
		renderBaseAnimation();

		expect(screen.getByTestId(BaseAnimationTestId)).toHaveStyle(`
      animation-name: ${Animation.FadeInAnimation.getName()};
    `);
	});

	it('should not render animation name if disabled', () => {
		renderBaseAnimation({ isEnabled: false });

		expect(screen.getByTestId(BaseAnimationTestId)).not.toHaveStyle(
			`animation-name: ${Animation.FadeInAnimation.getName()};`
		);
	});

	it('should not render component', () => {
		renderBaseAnimation({ isVisible: false });

		expect(screen.queryByTestId(BaseAnimationTestId)).toBeNull();
	});

	it('should render component if should always render prop is true', () => {
		renderBaseAnimation({ isVisible: false, shouldAlwaysRender: true });

		expect(screen.getByTestId(BaseAnimationTestId)).toBeInTheDocument();
	});

	it('should render component created with HOC', () => {
		renderWithBaseAnimation();

		expect(screen.getByTestId(BaseAnimationTestId)).toHaveStyle(`
      animation-name: ${Animation.FadeInAnimation.getName()};
    `);
	});

	it('should call on animation end handler', () => {
		renderBaseAnimation();

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(mockOnAnimationEnd).toHaveBeenCalled();
	});

	it('should not call on animation end handler if not provided', () => {
		renderBaseAnimation({ onAnimationEnd: undefined });

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(mockOnAnimationEnd).not.toHaveBeenCalled();
	});

	it('should hide component after animation ended', () => {
		const AnimatedTitle = withBaseAnimation(Title, Animation.FadeInAnimation);
		const { rerender } = render(withTheme(<AnimatedTitle data-testid={BaseAnimationTestId}>{text}</AnimatedTitle>));

		expect(screen.getByTestId(BaseAnimationTestId)).toBeInTheDocument();

		rerender(
			withTheme(
				<AnimatedTitle data-testid={BaseAnimationTestId} isVisible={false}>
					{text}
				</AnimatedTitle>
			)
		);

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(screen.queryByTestId(BaseAnimationTestId)).toBeNull();
	});

	it('should hide component with animation exit config', () => {
		const AnimatedTitle = withBaseAnimation(Title, Animation.FadeInAnimation);
		const { rerender } = render(withTheme(<AnimatedTitle data-testid={BaseAnimationTestId}>{text}</AnimatedTitle>));

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(screen.getByTestId(BaseAnimationTestId)).toBeInTheDocument();

		rerender(
			withTheme(
				<AnimatedTitle
					animationExit={Animation.FadeOutAnimation}
					data-testid={BaseAnimationTestId}
					delayExit="1s"
					directionExit="initial"
					durationExit="2s"
					iterationCountExit={2}
					fillModeExit="backwards"
					isVisible={false}
					timingFunctionExit="linear"
				>
					{text}
				</AnimatedTitle>
			)
		);

		expect(screen.getByTestId(BaseAnimationTestId)).toHaveStyle(`
      animation-name: ${Animation.FadeOutAnimation.getName()};
      animation-delay: 1s;
      animation-direction: initial;
      animation-duration: 2s;
      animation-iteration-count: 2;
      animation-fill-mode: backwards;
      animation-timing-function: linear;
    `);

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(screen.queryByTestId(BaseAnimationTestId)).toBeNull();
	});

	it('should not perform animation at mount', () => {
		const AnimatedTitle = withBaseAnimation(Title, Animation.FadeInAnimation);
		render(
			withTheme(
				<AnimatedTitle data-testid={BaseAnimationTestId} animateAtMount={false}>
					{text}
				</AnimatedTitle>
			)
		);

		expect(screen.getByTestId(BaseAnimationTestId)).not.toHaveStyle(`
      animation-name: ${Animation.FadeInAnimation.getName()};
    `);
	});

	it('should hide and mount component again', () => {
		const AnimatedTitle = withBaseAnimation(Title, Animation.FadeInAnimation);
		const { rerender } = render(withTheme(<AnimatedTitle data-testid={BaseAnimationTestId}>{text}</AnimatedTitle>));

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(screen.getByTestId(BaseAnimationTestId)).toBeInTheDocument();

		rerender(
			withTheme(
				<AnimatedTitle data-testid={BaseAnimationTestId} isVisible={false}>
					{text}
				</AnimatedTitle>
			)
		);

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(screen.queryByTestId(BaseAnimationTestId)).toBeNull();

		rerender(
			withTheme(
				<AnimatedTitle data-testid={BaseAnimationTestId} isVisible>
					{text}
				</AnimatedTitle>
			)
		);

		fireEvent.animationEnd(screen.getByTestId(BaseAnimationTestId));

		expect(screen.getByTestId(BaseAnimationTestId)).toBeInTheDocument();
	});
});
