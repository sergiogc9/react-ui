import { DefaultTheme } from 'styled-components';
import { ExtractThemeAttributes, ThemeColors } from 'theme/types';

export type ButtonAspectSize = 'xs' | 's' | 'm' | 'l';
export type ButtonVariant = 'danger' | 'default' | 'link' | 'primary' | 'secondary' | 'subtle' | 'success' | 'warning';

type ThemeAttributes = ExtractThemeAttributes<DefaultTheme>;

type ButtonBackgrounds = Record<'default' | 'hover' | 'active', string>;
type ButtonColor = Record<'focusShadow', string> &
	Partial<Record<'border' | 'text', string>> &
	Record<'background', ButtonBackgrounds>;
export type ButtonColors = Record<ThemeAttributes['ButtonVariant'], ButtonColor>;
type ButtonHeights = Record<ThemeAttributes['ButtonAspectSize'], number | number[]>;
type ButtonIconMargins = Record<ThemeAttributes['ButtonAspectSize'], string | string[]>;
type ButtonFontSizes = Record<ThemeAttributes['ButtonAspectSize'], number | number[] | string>;
type ButtonLineHeights = Record<ThemeAttributes['ButtonAspectSize'], number | number[] | string>;
type ButtonPadding = Record<'default' | 'leftIcon' | 'rightIcon', string | string[]>;
type ButtonPaddings = Record<ThemeAttributes['ButtonAspectSize'], ButtonPadding>;

export interface Button {
	readonly colors: ThemeColors<ButtonColors>;
	readonly heights: ButtonHeights;
	readonly iconMargins: ButtonIconMargins;
	readonly fontSizes: ButtonFontSizes;
	readonly lineHeights: ButtonLineHeights;
	readonly paddings: ButtonPaddings;
}
