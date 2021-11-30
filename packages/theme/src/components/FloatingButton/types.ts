type FloatingButtonAspectSizes = 's' | 'm' | 'l';
type FloatingButtonBackgrounds = Record<'default' | 'hover' | 'active', string>;
type FloatingButtonColors = Record<'focusShadow', string> &
	Partial<Record<'border' | 'text', string>> &
	Record<'background', FloatingButtonBackgrounds>;
type FloatingButtonHeights = Record<FloatingButtonAspectSizes, number | number[]>;
type FloatingButtonIconMargins = Record<FloatingButtonAspectSizes, string | string[]>;
type FloatingButtonPadding = Record<'default' | 'withText', string | number>;
type FloatingButtonPaddings = Record<FloatingButtonAspectSizes, FloatingButtonPadding>;

export interface FloatingButton {
	readonly colors: FloatingButtonColors;
	readonly heights: FloatingButtonHeights;
	readonly iconMargins: FloatingButtonIconMargins;
	readonly paddings: FloatingButtonPaddings;
}
