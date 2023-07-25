import { FlexProps } from 'components/Flex';

export interface TabsProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined> {
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
}
