import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import { FadeInAnimation } from '../animations';
import BaseAnimation from '../Base';
import AnimationList from './AnimationList';
import { AnimationListProps } from './types';

const animationListTestId = 'AnimationList';
const animationListItemTestId = 'AnimationListItem';

const getComponent = (props?: Partial<AnimationListProps>, keys: string[] = []) =>
	withTheme(
		<AnimationList data-testid={animationListTestId} {...props}>
			{keys.map(key => (
				<BaseAnimation
					animation={FadeInAnimation}
					data-testid={animationListItemTestId + key}
					key={key}
					timingFunction="linear"
				>
					<span>List item</span>
				</BaseAnimation>
			))}
		</AnimationList>
	);

const renderAnimationList = (props?: Partial<AnimationListProps>, keys: string[] = []) =>
	render(getComponent(props, keys));

describe('AnimationList component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should not render children if not provided', () => {
		renderAnimationList();

		expect(screen.queryByTestId(animationListItemTestId)).toBeNull();
	});

	it('should render children without animations at mount', () => {
		renderAnimationList({}, ['111']);

		expect(screen.getByTestId(`${animationListItemTestId}111`)).toBeInTheDocument();
		expect(screen.getByTestId(`${animationListItemTestId}111`)).not.toHaveStyle(`
      animation-name: ${FadeInAnimation.getName()};
    `);
	});

	it('should render children with animation at mount enabled', () => {
		renderAnimationList({ animateAtMount: true }, ['111']);

		expect(screen.getByTestId(`${animationListItemTestId}111`)).toBeInTheDocument();
		expect(screen.getByTestId(`${animationListItemTestId}111`)).toHaveStyle(`
      animation-name: ${FadeInAnimation.getName()};
    `);
	});

	it('should remove item', () => {
		const { rerender } = renderAnimationList({}, ['111', '222']);

		expect(screen.getByTestId(`${animationListItemTestId}111`)).toBeInTheDocument();
		expect(screen.getByTestId(`${animationListItemTestId}222`)).toBeInTheDocument();

		rerender(getComponent({}, ['111']));

		fireEvent.animationEnd(screen.queryByTestId(`${animationListItemTestId}222`)!);

		expect(screen.getByTestId(`${animationListItemTestId}111`)).toBeInTheDocument();
		expect(screen.queryByTestId(`${animationListItemTestId}222`)).toBeNull();
	});

	it('should remove first item', () => {
		const { rerender } = renderAnimationList({}, ['111', '222']);

		expect(screen.getByTestId(`${animationListItemTestId}111`)).toBeInTheDocument();
		expect(screen.getByTestId(`${animationListItemTestId}222`)).toBeInTheDocument();

		rerender(getComponent({}, ['222']));

		fireEvent.animationEnd(screen.queryByTestId(`${animationListItemTestId}111`)!);

		expect(screen.getByTestId(`${animationListItemTestId}222`)).toBeInTheDocument();
		expect(screen.queryByTestId(`${animationListItemTestId}111`)).toBeNull();
	});

	it('should add and remove item', () => {
		const { rerender } = renderAnimationList({}, ['111', '222']);

		expect(screen.queryByTestId(`${animationListItemTestId}333`)).toBeNull();

		rerender(getComponent({}, ['111', '222', '333']));

		fireEvent.animationEnd(screen.queryByTestId(`${animationListItemTestId}333`)!);

		expect(screen.getByTestId(`${animationListItemTestId}333`)).toBeInTheDocument();

		rerender(getComponent({}, ['111', '222']));

		fireEvent.animationEnd(screen.queryByTestId(`${animationListItemTestId}333`)!);

		expect(screen.queryByTestId(`${animationListItemTestId}333`)).toBeNull();
	});
});
