type SwitchAspectSizes = 's' | 'm';
type SwitchSizesParams = Record<'width' | 'height', string>;
type SwitchBackgroundSizes = Record<SwitchAspectSizes, SwitchSizesParams>;
type SwitchToggleSizes = Record<SwitchAspectSizes, SwitchSizesParams>;

export interface Switch {
	readonly backgroundSizes: SwitchBackgroundSizes;
	readonly color: string;
	readonly toggleSizes: SwitchToggleSizes;
}
