type TitleAspectSizes = 'uppercase' | 'subtle' | 's' | 'xs' | 'm' | 'l' | 'xl';
type TitleFontWeights = Record<TitleAspectSizes, string | string[]>;
type TitleFontSizes = Record<TitleAspectSizes, number | number[]>;
type TitleLineHeights = Record<TitleAspectSizes, number | number[]>;

export interface Title {
	readonly fontWeights: TitleFontWeights;
	readonly fontSizes: TitleFontSizes;
	readonly lineHeights: TitleLineHeights;
}
