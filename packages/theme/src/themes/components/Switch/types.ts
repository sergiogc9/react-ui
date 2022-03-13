import { ThemeColors } from 'theme/types';

type SwitchAspectSizes = 's' | 'm';
type SwitchSizesParams = Record<'width' | 'height', string>;
type SwitchBackgroundSizes = Record<SwitchAspectSizes, SwitchSizesParams>;
type SwitchColors = {
	background: Record<'checked' | 'default' | 'disabled', string>;
	toggle: Record<'color', string>;
};
type SwitchToggleSizes = Record<SwitchAspectSizes, SwitchSizesParams>;

export interface Switch {
	readonly backgroundSizes: SwitchBackgroundSizes;
	readonly colors: ThemeColors<SwitchColors>;
	readonly toggleSizes: SwitchToggleSizes;
}
