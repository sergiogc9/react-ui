import { ThemeColors } from 'theme/types';

type TabColors = Record<'active' | 'bar' | 'default' | 'divider', string>;

export interface Tab {
	readonly colors: ThemeColors<TabColors>;
}
