import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * Choose one size
	 */
	readonly aspectSize?: 's' | 'm';
	/**
	 * Define to show the overlay even if the user is not hovering the Chip
	 */
	readonly isOverlayAlwaysVisible?: boolean;
	/**
	 * Define hovered chip text. If empty there is no overlay on hover
	 */
	readonly overlayContent?: string | JSX.Element;
	/**
	 * Define the click handler on chip overlay when hovered
	 */
	readonly onOverlayClick?: (event: React.MouseEvent) => void;
	/**
	 * Choose the color variant
	 */
	readonly variant?: 'blue' | 'green' | 'grey' | 'red' | 'yellow' | 'transparent';
};

type ChipProps<T extends React.ElementType = 'link'> = ExtendedFlexProps<Props, T>;

type ChipComponent = ExtendedFlexComponent<Props>;

export { ChipComponent, ChipProps };
