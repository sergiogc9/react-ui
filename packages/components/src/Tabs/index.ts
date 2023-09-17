import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Header from './Header';
import Menu from './Menu';
import Tabs from './Tabs';
import { TabsProps } from './types';
import TabsContent from './Content';
import { TabsContentProps } from './Content/types';
import TabsTab from './Tab';
import { TabsTabProps } from './Tab/types';

export type { TabsProps, TabsContentProps, TabsTabProps };

export default createNameSpacedComponent(Tabs, {
	Content: TabsContent,
	Header,
	Menu,
	Tab: TabsTab
});
