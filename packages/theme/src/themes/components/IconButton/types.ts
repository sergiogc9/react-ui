type IconButtonAspectSizes = 's' | 'm' | 'l' | 'xl';
type IconButtonBackgrounds = Record<'default' | 'hover' | 'active', string>;
type IconButtonColors = Record<'icon', string> &
	Partial<Record<'borderActive', string>> &
	Record<'background', IconButtonBackgrounds>;
type IconButtonSizes = Record<IconButtonAspectSizes, number | number[]>;

export interface IconButton {
	readonly colors: IconButtonColors;
	readonly sizes: IconButtonSizes;
}
