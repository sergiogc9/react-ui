type TextAspectSizes = 's' | 'xs' | 'm' | 'l' | 'xl';
type TextFontWeights = Record<TextAspectSizes, string | string[]>;
type TextFontSizes = Record<TextAspectSizes, number | number[]>;
type TextLineHeights = Record<TextAspectSizes, number | number[]>;

export interface Text {
	readonly fontWeights: TextFontWeights;
	readonly fontSizes: TextFontSizes;
	readonly lineHeights: TextLineHeights;
}
