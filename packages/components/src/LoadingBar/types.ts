import { FlexProps } from 'components/Flex';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * Boolean to show or hide the bar
	 */
	readonly isVisible: boolean;
};

type LoadingBarProps<T extends React.ElementType = 'div'> = ExtendedFlexProps<Props, T>;

type LoadingBarComponent = ExtendedFlexComponent<Props>;

type StyledLoadingBarProps<T extends React.ElementType = 'div'> = FlexProps<T>;

type StyledLoadingBarProgressProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	percentage: number;
};

export { LoadingBarComponent, LoadingBarProps, StyledLoadingBarProgressProps, StyledLoadingBarProps };
