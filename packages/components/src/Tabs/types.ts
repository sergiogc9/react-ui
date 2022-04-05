import { FlexProps } from 'components/Flex';

export type Props = {
	/**
	 * The default active tab ID
	 */
	readonly defaultTab: string;

	/**
	 * A handler called when the active tab changes
	 */
	readonly onTabChange?: (id: string) => void;
};

export type TabsProps = Props & FlexProps;
