import {
	BackgroundProps,
	BorderProps,
	ColorProps,
	FlexboxProps,
	GridProps,
	LayoutProps,
	PositionProps,
	ShadowProps,
	SpaceProps,
	TypographyProps
} from 'styled-system';

/**
 * There is a bug where the color prop type is not working fine because it is not compatible with react's HTMLAttributes color attribute.
 * This fix prevents typescript from complaining. More info at:
 * https://stackoverflow.com/questions/53711454/styled-system-props-typing-with-typescript
 */
interface FixedColor {
	color?: string;
}
interface FixedColorProps extends Omit<ColorProps, 'color'>, FixedColor {}

interface CustomBoxProps {
	id?: string;
	backgroundClip?: string;
	boxSizing?: string;
	columnGap?: GridProps['gridColumnGap'];
	cursor?: string;
	gap?: GridProps['gridGap'];
	outline?: string;
	pointerEvents?: string;
	rowGap?: GridProps['gridRowGap'];
	textDecoration?: string;
	transform?: string | Record<string, string> | string[];
	transition?: string | Record<string, string> | string[];
	whiteSpace?: string;
}

interface CustomTextProps {
	cursor?: string;
	id?: string;
	textTransform?: string;
	transition?: string | Record<string, string> | string[];
	textDecoration?: string;
	textOverflow?: string;
	whiteSpace?: string;
	wordBreak?: string;
}

interface CustomSvgProps {
	cursor?: string;
	fill?: string;
	pointerEvents?: string;
	stroke?: string;
}

export interface ComposedBoxProps
	extends FlexboxProps,
		LayoutProps,
		SpaceProps,
		FixedColorProps,
		BorderProps,
		PositionProps,
		BackgroundProps,
		ShadowProps,
		TypographyProps,
		CustomBoxProps {}
export interface ComposedColorProps extends FixedColorProps {}

interface ExtraGridProps {
	columnGap?: GridProps['gridColumnGap'];
	gap?: GridProps['gridGap'];
	rowGap?: GridProps['gridRowGap'];
}
export interface ComposedGridProps
	extends ComposedBoxProps,
		Omit<GridProps, 'gridGap' | 'gridColumnGap' | 'gridRowGap'>,
		ExtraGridProps {}
export interface ComposedTextProps
	extends LayoutProps,
		SpaceProps,
		FixedColorProps,
		PositionProps,
		TypographyProps,
		CustomTextProps {}
export interface ComposedSvgProps extends FlexboxProps, LayoutProps, PositionProps, SpaceProps, CustomSvgProps {}
