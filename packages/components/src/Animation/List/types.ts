import React from 'react';

export type AnimationListProps = {
	/**
	 * Boolean to enable or disable the animation at list first mount.
	 */
	readonly animateAtMount?: boolean;
};

export type ListElement = {
	animateAtMount: boolean;
	child: React.ReactElement;
	isVisible: boolean;
	key: React.Key;
};
