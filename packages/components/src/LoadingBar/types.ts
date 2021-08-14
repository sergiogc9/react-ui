import { BoxProps } from 'components/Box';

type Props = {
	/**
	 * Boolean to show or hide the bar
	 */
	readonly isVisible: boolean;
};

export type LoadingBarProps = Props & BoxProps;
export type StyledLoadingBarProps = BoxProps;
export type StyledLoadingBarProgressProps = BoxProps & { percentage: number };
