import React from 'react';
import { keyframes } from 'styled-components';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Animate from './Animate';
import { AnimateProps } from './types';

const AnimateTestId = 'Animate';
const text = 'Awesome!';
const mockOnAnimationEnd = jest.fn();

const CustomAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CustomAnimation2 = keyframes`
  from {
    opacity: 0px;
  }

  to {
    margin-left: 100px;
  }
`;

const getComponent = (props?: Partial<AnimateProps>) =>
	withTheme(
		<Animate animation={[CustomAnimation]} data-testid={AnimateTestId} onAnimationEnd={mockOnAnimationEnd} {...props}>
			{text}
		</Animate>
	);

const renderAnimate = (props?: Partial<AnimateProps>) => render(getComponent(props));

describe('Animate Animation component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render the content', () => {
		renderAnimate();

		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should have correct styles', () => {
		renderAnimate({
			delay: ['5s'],
			direction: ['revert'],
			duration: ['1s'],
			iterationCount: [1],
			fillMode: ['forwards'],
			playState: ['running'],
			timingFunction: ['ease-out']
		});

		expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`
      animation-delay: 5s;
      animation-direction: revert;
      animation-duration: 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      animation-play-state: running;
      animation-timing-function: ease-out;
    `);
	});

	it('should have correct delay value in milliseconds', () => {
		renderAnimate({ delay: ['5000ms'] });

		expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`
      animation-delay: 5000ms;
    `);
	});

	it('should not use animation if disabled', () => {
		renderAnimate({ isEnabled: false });

		expect(screen.getByTestId(AnimateTestId)).not.toHaveStyle(`animation-name: ${CustomAnimation.getName()};`);
	});

	it('should not use render if not visible', () => {
		renderAnimate({ isVisible: false });

		expect(screen.queryByTestId(AnimateTestId)).toBeNull();
	});

	it('should not use render if not visible and animation exit', () => {
		renderAnimate({
			animationExit: [CustomAnimation2, CustomAnimation, CustomAnimation2],
			isVisible: false
		});

		expect(screen.queryByTestId(AnimateTestId)).toBeNull();
	});

	it('should change to next animation', async () => {
		renderAnimate({ animation: [CustomAnimation, CustomAnimation2] });

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		await waitFor(() =>
			expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`animation-name: ${CustomAnimation2.getName()};`)
		);
	});

	it('should call on animation end handler', async () => {
		renderAnimate();

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		expect(mockOnAnimationEnd).toHaveBeenCalled();
	});

	it('should not call on animation end handler', async () => {
		renderAnimate({ onAnimationEnd: undefined });

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		expect(mockOnAnimationEnd).not.toHaveBeenCalled();
	});

	it('should change to previous animation', async () => {
		const { rerender } = render(getComponent({ animation: [CustomAnimation, CustomAnimation2] }));

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		await waitFor(() =>
			expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`animation-name: ${CustomAnimation2.getName()};`)
		);

		rerender(
			getComponent({
				animation: [CustomAnimation, CustomAnimation2],
				isVisible: false
			})
		);

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		await waitFor(() =>
			expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`animation-name: ${CustomAnimation.getName()};`)
		);
	});

	it('should remove from DOM after last transition', async () => {
		const { rerender } = render(getComponent({ animation: [CustomAnimation, CustomAnimation2] }));

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		await waitFor(() =>
			expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`animation-name: ${CustomAnimation2.getName()};`)
		);

		rerender(
			getComponent({
				animation: [CustomAnimation, CustomAnimation2],
				isVisible: false
			})
		);

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		await waitFor(() =>
			expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`animation-name: ${CustomAnimation.getName()};`)
		);

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		await waitFor(() => expect(screen.queryByTestId(AnimateTestId)).toBeNull());
	});

	it('should perform exit animations', () => {
		const { rerender } = render(getComponent({ animation: [CustomAnimation, CustomAnimation2] }));

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));
		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`animation-name: ${CustomAnimation2.getName()};`);

		rerender(
			getComponent({
				animation: [CustomAnimation, CustomAnimation2],
				animationExit: [CustomAnimation2, CustomAnimation, CustomAnimation2],
				delayExit: ['1s', '2s', '0.5s'],
				directionExit: ['initial', 'revert', 'initial'],
				durationExit: ['2s', '0.25s', '2s'],
				iterationCountExit: ['infinite', 2, 1],
				fillModeExit: ['forwards', 'both', 'backwards'],
				isVisible: false,
				timingFunctionExit: ['linear', 'ease-in', 'step-end']
			})
		);

		expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`
      animation-name: ${CustomAnimation2.getName()};
      animation-delay: 1s;
      animation-direction: initial;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
    `);

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`
      animation-name: ${CustomAnimation.getName()};
      animation-delay: 2s;
      animation-direction: revert;
      animation-duration: 0.25s;
      animation-iteration-count: 2;
      animation-fill-mode: both;
      animation-timing-function: ease-in;
    `);

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		expect(screen.getByTestId(AnimateTestId)).toHaveStyle(`
      animation-name: ${CustomAnimation2.getName()};
      animation-delay: 0.5s;
      animation-direction: initial;
      animation-duration: 2s;
      animation-iteration-count: 1;
      animation-fill-mode: backwards;
      animation-timing-function: step-end;
    `);

		fireEvent.animationEnd(screen.getByTestId(AnimateTestId));

		expect(screen.queryByTestId(AnimateTestId)).toBeNull();
	});

	it('should not perform animation if animateAtMount is false', () => {
		render(
			getComponent({
				animation: [CustomAnimation, CustomAnimation2],
				animateAtMount: false
			})
		);

		expect(screen.getByTestId(AnimateTestId)).not.toHaveStyle(`animation-name: ${CustomAnimation.getName()};`);
	});
});
