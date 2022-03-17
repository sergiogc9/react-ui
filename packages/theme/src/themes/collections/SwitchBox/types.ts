import { ThemeColors } from 'theme/types';

type SwitchBoxItemColors = Record<'bg' | 'text', string> & { icon: Record<'bg' | 'color', string> };

export interface SwitchBox {
	readonly colors: ThemeColors<SwitchBoxItemColors>;
}
