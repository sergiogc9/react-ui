import { ThemeColors } from 'theme/types';

type UserMenuItemColors = Record<'bgHover' | 'optionText' | 'text', string>;

export interface UserMenu {
	readonly colors: ThemeColors<UserMenuItemColors>;
}
