import { BoxProps } from 'components/Box';

type Props = {
	/**
	 * The number of circles of the animation. From 1 to 3.
	 */
	readonly circles?: number;

	/**
	 * The first color used
	 */
	readonly color?: string;

	/**
	 * The second color used
	 */
	readonly color2?: string;

	/**
	 * The third color used
	 */
	readonly color3?: string;

	/**
	 * The circles width. In px. Default: 4px
	 */
	readonly circleSize?: number;
};

export type SpinnerCircleProps = Props & Omit<BoxProps, 'color'>;
