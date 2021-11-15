import React, { isValidElement } from 'react';
import findIndex from 'lodash/findIndex';
import reject from 'lodash/reject';
import { useUpdateEffect } from '@sergiogc9/react-hooks';

import { AnimationListProps, ListElement } from './types';

const getInitialElementsListFromChildren = (children: React.ReactNode, animateAtMount: boolean): ListElement[] => {
	return React.Children.map(children, child => child)!
		.filter(React.isValidElement)
		.map(child => ({
			animateAtMount,
			child: React.cloneElement(child),
			isVisible: true,
			key: child.key!
		}));
};

const mergeElementsFromChildren = (children: React.ReactNode, prevElements: ListElement[]): ListElement[] => {
	const prevElementsHash = prevElements.reduce<Record<React.Key, ListElement>>(
		(prev, current) => ({ ...prev, [current.key]: current }),
		{}
	);

	const childrenKeys = React.Children.toArray(children).reduce<Record<React.Key, boolean>>((prev, current) => {
		if (isValidElement(current)) return { ...prev, [current.key!]: true };

		return prev;
	}, {});

	const nextElements: ListElement[] = [];
	React.Children.map(children, c => c)!.forEach(child => {
		if (isValidElement(child)) {
			nextElements.push({
				animateAtMount: prevElementsHash[child.key!]?.animateAtMount ?? true,
				child: React.cloneElement(child),
				isVisible: true,
				key: child.key!
			});
		}
	});

	// Check for removed elements
	prevElements.forEach((prevElement, index) => {
		if (!childrenKeys[prevElement.key]) {
			// Add element into elements array while unmounting animation is performed
			const prevElementPreviousElementKey = index > 0 ? prevElements[index - 1].key : null;
			const insertIndex = prevElementPreviousElementKey
				? findIndex(nextElements, { key: prevElementPreviousElementKey }) + 1
				: 0;
			nextElements.splice(insertIndex, 0, { ...prevElement, isVisible: false });
		}
	});

	return nextElements;
};

const AnimationList: React.FC<AnimationListProps> = ({ animateAtMount = false, children }) => {
	const [elements, setElements] = React.useState<ListElement[]>(() =>
		getInitialElementsListFromChildren(children, animateAtMount)
	);

	useUpdateEffect(() => {
		setElements(mergeElementsFromChildren(children, elements));
	}, [children]);

	const content = React.useMemo(() => {
		return elements.map(element => (
			<element.child.type
				animateAtMount={element.animateAtMount}
				key={element.child.key}
				{...element.child.props}
				isVisible={element.isVisible}
				onAnimationEnd={(ev: React.AnimationEvent) => {
					if (!element.isVisible) {
						setElements(current =>
							reject([...current], {
								key: element.child.key!
							})
						);
					}
					if (element.child.props.onAnimationEnd) element.child.props.onAnimationEnd(ev);
				}}
			/>
		));
	}, [elements]);

	return <>{content}</>;
};

export default AnimationList;
