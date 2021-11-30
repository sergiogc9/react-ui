type ButtonAspectSizes = 's' | 'm' | 'l';
type ButtonVariants = 'danger' | 'default' | 'link' | 'primary' | 'secondary' | 'subtle' | 'warning';
type ButtonBackgrounds = Record<'default' | 'hover' | 'active', string>;
type ButtonColor = Record<'focusShadow', string> &
	Partial<Record<'border' | 'text', string>> &
	Record<'background', ButtonBackgrounds>;
type ButtonColors = Record<ButtonVariants, ButtonColor>;
type ButtonHeights = Record<ButtonAspectSizes, number | number[]>;
type ButtonIconMargins = Record<ButtonAspectSizes, string | string[]>;
type ButtonFontSizes = Record<ButtonAspectSizes, number | number[]>;
type ButtonLineHeights = Record<ButtonAspectSizes, number | number[]>;
type ButtonPadding = Record<'default' | 'leftIcon' | 'rightIcon', string | string[]>;
type ButtonPaddings = Record<ButtonAspectSizes, ButtonPadding>;

export interface Button {
	readonly colors: ButtonColors;
	readonly heights: ButtonHeights;
	readonly iconMargins: ButtonIconMargins;
	readonly fontSizes: ButtonFontSizes;
	readonly lineHeights: ButtonLineHeights;
	readonly paddings: ButtonPaddings;
}
