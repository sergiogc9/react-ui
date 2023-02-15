import React from 'react';

export interface AnimationListProps {
	/**
	 * Boolean to enable or disable the animation at list first mount.
	 */
	readonly animateAtMount?: boolean;
	/**
	 * The children components
	 */
	readonly children?: React.ReactNode;
}

export interface ListElement {
	animateAtMount: boolean;
	child: React.ReactElement;
	isVisible: boolean;
	key: React.Key;
}
