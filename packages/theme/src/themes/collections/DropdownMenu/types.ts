import { ThemeColors } from 'theme/types';

type DropdownMenuItemColors = Record<'bgHover' | 'optionText' | 'text', string>;

export interface DropdownMenu {
	readonly colors: ThemeColors<DropdownMenuItemColors>;
}
