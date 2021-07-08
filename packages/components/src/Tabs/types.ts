import { BoxProps } from 'components/Box';

export type Props = {
	/**
	 * The default active tab ID
	 */
	readonly defaultTab: string;
};

export type TabsProps = Props & BoxProps;
