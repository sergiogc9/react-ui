import { DefaultTheme } from 'styled-components';

import { ExtractThemeAttributes, ThemeColors } from 'theme/types';

type ThemeAttributes = ExtractThemeAttributes<DefaultTheme>;

export type AlertAspectSize = 's' | 'm';
export type AlertStatus = 'error' | 'info' | 'success' | 'warning';

type AlertSizes = Record<ThemeAttributes['AlertAspectSize'], Record<'minHeight' | 'padding', number>>;
type AlertColors = Record<ThemeAttributes['AlertStatus'], Record<'bg' | 'icon' | 'text', string>>;

export interface Alert {
	readonly colors: ThemeColors<AlertColors>;
	readonly sizes: AlertSizes;
}
