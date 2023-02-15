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
}
