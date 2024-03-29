import { PropsWithChildren } from 'react';

import { FlexProps } from 'components/Flex';
import { TabsProps } from '../types';

export interface TabsMenuProps extends PropsWithChildren<FlexProps<'ul'>> {}

export interface StyledTabsMenuProps extends TabsMenuProps, Required<Pick<TabsProps, 'tabsLayout'>> {}
