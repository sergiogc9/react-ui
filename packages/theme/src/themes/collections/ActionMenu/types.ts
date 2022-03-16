import { ThemeColors } from 'theme/types';

type ActionMenuItemVariants = 'default' | 'danger';

type ActionMenuItemStates = 'default' | 'hover';

type ActionMenuItemAttrs = 'color' | 'background';

type ActionMenuItemParams = Record<ActionMenuItemAttrs, string>;

type ActionMenuItemStateAttr = Record<ActionMenuItemStates, ActionMenuItemParams>;

type ActionMenuItemColors = Record<ActionMenuItemVariants, ActionMenuItemStateAttr>;

export interface ActionMenu {
	readonly colors: ThemeColors<ActionMenuItemColors>;
}
