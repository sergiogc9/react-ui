import { TokenPath } from '@sergiogc9/react-ui-theme';
import { CSSProperties } from 'react';
import { DefaultTheme } from 'styled-components';
import {
	BackgroundProps,
	BorderColorProps,
	BorderRadiusProps,
	BorderProps as StyledSystemBorderProps,
	BorderWidthProps,
	ColorProps as StyledSystemColorProps,
	FlexboxProps,
	GridProps,
	LayoutProps,
	PositionProps as StyledSystemPositionProps,
	ResponsiveValue,
	SpaceProps as StyledSystemSpaceProps,
	TypographyProps,
	ZIndexProps
} from 'styled-system';

// This types makes TS to autocomplete literal union values when using together with string or number
type AnyString = string & { _?: unknown };
type AnyStringOrNumber = number | (string & { _?: unknown });

interface CustomBoxProps {
	id?: string;
	backgroundClip?: CSSProperties['backgroundClip'];
	boxSizing?: CSSProperties['boxSizing'];
	columnGap?: ResponsiveValue<TokenPath<DefaultTheme['space']> | AnyStringOrNumber>;
	cursor?: CSSProperties['cursor'];
	gap?: ResponsiveValue<TokenPath<DefaultTheme['space']> | AnyStringOrNumber>;
	outline?: CSSProperties['outline'];
	pointerEvents?: CSSProperties['pointerEvents'];
	rowGap?: ResponsiveValue<TokenPath<DefaultTheme['space']> | AnyStringOrNumber>;
	textDecoration?: CSSProperties['textDecoration'];
	transform?: ResponsiveValue<CSSProperties['transform']>;
	transition?: ResponsiveValue<CSSProperties['transition']>;
	whiteSpace?: CSSProperties['whiteSpace'];
}

interface CustomTextProps {
	cursor?: CSSProperties['cursor'];
	id?: string;
	textTransform?: CSSProperties['textTransform'];
	transition?: ResponsiveValue<CSSProperties['transition']>;
	textDecoration?: CSSProperties['textDecoration'];
	textOverflow?: CSSProperties['textOverflow'];
	whiteSpace?: CSSProperties['whiteSpace'];
	wordBreak?: CSSProperties['wordBreak'];
}

interface CustomSvgProps {
	cursor?: CSSProperties['cursor'];
	fill?: CSSProperties['fill'];
	pointerEvents?: CSSProperties['pointerEvents'];
	stroke?: CSSProperties['stroke'];
}

type StyledSystemTheme = Omit<DefaultTheme, 'breakpoints' | 'colors'> & {
	breakpoints: Record<TokenPath<DefaultTheme['breakpoints']>, string>;
	colors: Record<string, string>;
};

type BorderProps = Omit<
	StyledSystemBorderProps<StyledSystemTheme>,
	keyof BorderColorProps | keyof BorderWidthProps | keyof BorderRadiusProps
> &
	BorderColorProps<StyledSystemTheme, TokenPath<DefaultTheme['colors']> | AnyString> &
	BorderWidthProps<StyledSystemTheme, TokenPath<DefaultTheme['borderWidths']> | AnyStringOrNumber> &
	BorderRadiusProps<StyledSystemTheme, TokenPath<DefaultTheme['radii']> | AnyStringOrNumber>;

type ColorProps = Omit<
	StyledSystemColorProps<StyledSystemTheme, TokenPath<DefaultTheme['colors']> | AnyString>,
	'color'
> & {
	/**
	 * There is a bug where the color prop type is not working fine because it is not compatible with react's HTMLAttributes color attribute.
	 * This fix prevents typescript from complaining. More info at:
	 * https://stackoverflow.com/questions/53711454/styled-system-props-typing-with-typescript
	 */
	color?: TokenPath<DefaultTheme['colors']> | AnyString;
};

type SpaceProps = StyledSystemSpaceProps<StyledSystemTheme, TokenPath<DefaultTheme['space']> | AnyStringOrNumber>;

type ShadowProps = {
	boxShadow?:
		| ResponsiveValue<CSSProperties['boxShadow'] | number | keyof DefaultTheme['shadows'], StyledSystemTheme>
		| undefined;
	textShadow?:
		| ResponsiveValue<CSSProperties['textShadow'] | number | keyof DefaultTheme['shadows'], StyledSystemTheme>
		| undefined;
};

type PositionProps = Omit<StyledSystemPositionProps<StyledSystemTheme>, keyof ZIndexProps> & {
	zIndex?: ResponsiveValue<CSSProperties['zIndex'] | TokenPath<DefaultTheme['zIndices']>, StyledSystemTheme>;
};

export interface ComposedBoxProps
	extends FlexboxProps,
		LayoutProps,
		SpaceProps,
		ColorProps,
		BorderProps,
		PositionProps,
		BackgroundProps,
		ShadowProps,
		TypographyProps,
		CustomBoxProps {}

export interface ComposedColorProps extends ColorProps {}

interface ExtraGridProps {
	columnGap?: ResponsiveValue<TokenPath<DefaultTheme['space']> | AnyStringOrNumber>;
	gap?: ResponsiveValue<TokenPath<DefaultTheme['space']> | AnyStringOrNumber>;
	rowGap?: ResponsiveValue<TokenPath<DefaultTheme['space']> | AnyStringOrNumber>;
}

export interface ComposedGridProps
	extends ComposedBoxProps,
		Omit<GridProps, 'gridGap' | 'gridColumnGap' | 'gridRowGap'>,
		ExtraGridProps {}
export interface ComposedTextProps
	extends LayoutProps,
		SpaceProps,
		ColorProps,
		PositionProps,
		TypographyProps,
		CustomTextProps {}
export interface ComposedSvgProps extends FlexboxProps, LayoutProps, PositionProps, SpaceProps, CustomSvgProps {}
