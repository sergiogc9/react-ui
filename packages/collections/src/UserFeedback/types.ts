import React from 'react';
import { BoxProps, ButtonProps } from '@sergiogc9/react-ui';

type Props = {
	/**
	 * The button text. If not provided, the button is not shown.
	 */
	readonly buttonText?: string;

	/**
	 * The image source string.
	 */
	readonly imageSrc: string;

	/**
	 * The button click handler
	 */
	readonly onButtonClick?: ButtonProps['onClick'];

	/**
	 * The content text. Use a string to pass a simple text or use a Trans component to perform complex translations from i18n.
	 */
	readonly text?: string | React.ReactNode;

	/**
	 * The title text.
	 */
	readonly titleText: string;
};

export type UserFeedbackProps = Props & BoxProps;
export type StyledUserFeedbackProps = BoxProps;
