import { TabsProps } from '../types';

export interface TabsContextData {
	activeID?: string;
	onTabClicked: (id: string) => void;
	tabsLayout: NonNullable<TabsProps['tabsLayout']>;
}
