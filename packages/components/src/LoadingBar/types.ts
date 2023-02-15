import { FlexProps } from 'components/Flex';

export interface LoadingBarProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
	/**
	 * Boolean to show or hide the bar
	 */
	readonly isVisible: boolean;
}
export interface StyledLoadingBarProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export interface StyledLoadingBarProgressProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	percentage: number;
}
