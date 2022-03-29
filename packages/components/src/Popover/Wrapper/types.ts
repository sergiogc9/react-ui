import React from 'react';
import type { TippyProps } from '@tippyjs/react/headless';

// This type fixes an error when building using TippyProps["placement"]
type Placement =
	| 'auto'
	| 'auto-end'
	| 'auto-start'
	| 'bottom'
	| 'bottom-end'
	| 'bottom-start'
	| 'left'
	| 'left-start'
	| 'left-end'
	| 'right'
	| 'right-end'
	| 'right-start'
	| 'top'
	| 'top-start'
	| 'top-end';

type Props = {
	/**
	 * The distance between the tooltip and the reference or trigger
	 */
	readonly distance?: number;
	/**
	 * The animation duration
	 */
	readonly duration?: number;
	/**
	 * The number of milliseconds to wait until tooltip is shown
	 */
	readonly enterDelay?: number;
	/**
	 * The number of milliseconds to wait until tooltip is hidden
	 */
	readonly exitDelay?: number;
	/**
	 * Determines if the tippy has interactive content inside of it, so that it can be hovered over and clicked inside without hiding.
	 */
	readonly isInteractive?: TippyProps['interactive'];
	/**
	 * Boolean to control tooltip visibility. This makes the tooltip to be a controlled component from outside.
	 */
	readonly isVisible?: TippyProps['visible'];
	/**
	 * The tooltip position placement
	 */
	readonly placement?: Placement;
	/**
	 * The reference to use as anchor for the popover. Only use this if not using the Provider with the trigger.
	 */
	readonly reference?: TippyProps['reference'];
	/**
	 * The render function which renders the children inside the wrapper. It receives the attrs object that should passed to children and a boolean if the content should be visible or not (helpful for animations).
	 */
	readonly render: (
		attrs: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'data-placement': Placement;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'data-reference-hidden'?: string | undefined;
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'data-escaped'?: string | undefined;
		},
		isVisible: boolean,
		ref: React.RefObject<HTMLElement>
	) => React.ReactNode;
	/**
	 * The skidding distance of the tooltip
	 * More info: https://popper.js.org/docs/v2/modifiers/offset/#skidding
	 */
	readonly skidding?: number;
	/**
	 * The other tippy props to pass to the Wrapper if needed. See the docs here:
	 * https://atomiks.github.io/tippyjs/v6/all-props/
	 */
	readonly tippyProps?: Omit<Partial<TippyProps>, 'duration'>;
	/**
	 * Changes the visibility behavior on touch devices. See:
	 * https://atomiks.github.io/tippyjs/v6/all-props/#touch
	 */
	readonly touch?: TippyProps['touch'];
	/**
	 * Changes the trigger event.
	 * https://atomiks.github.io/tippyjs/v6/all-props/#trigger
	 */
	readonly trigger?: TippyProps['trigger'];
	/**
	 * The z-index of the tooltip
	 */
	readonly zIndex?: number;
};

export type PopoverWrapperProps = Props;
