import { ThemeColors } from 'theme/types';

type BaseColors = Record<'bg' | 'text', string>;
type IconColors = { icon: Record<'bg' | 'color', string> };

interface SwitchBoxItemColors extends BaseColors, IconColors {}

export interface SwitchBox {
	readonly colors: ThemeColors<SwitchBoxItemColors>;
}
