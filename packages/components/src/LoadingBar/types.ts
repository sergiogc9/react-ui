import { FlexProps } from 'components/Flex';

type Props = {
	/**
	 * Boolean to show or hide the bar
	 */
	readonly isVisible: boolean;
};

export type LoadingBarProps = Props & FlexProps;
export type StyledLoadingBarProps = FlexProps;
export type StyledLoadingBarProgressProps = FlexProps & { percentage: number };
