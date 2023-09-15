import { FlexProps } from 'components/Flex';

export type TabsProps<T extends React.ElementType = 'div'> = FlexProps<T> & {
	/**
	 * The default active tab ID
	 */
	readonly defaultTab: string;

	/**
	 * A handler called when the active tab changes
	 */
	readonly onTabChange?: (id: string) => void;

	/**
	 * Defines the layout for tabs.
	 */
	readonly tabsLayout?: 'small-left' | 'small-evenly' | 'big-evenly';
};
