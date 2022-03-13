import { ThemeColors } from 'theme/types';

type PopoverColors = Record<'background' | 'border', string>;

export interface Popover {
	readonly colors: ThemeColors<PopoverColors>;
}
