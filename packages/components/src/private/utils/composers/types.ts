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
type FixedColorProps = Omit<ColorProps, 'color'> & { color?: string };

type CustomBoxProps = {
  id?: string;
  backgroundClip?: string;
  boxSizing?: string;
  cursor?: string;
  fontFamily?: string;
  outline?: string;
  pointerEvents?: string;
  textDecoration?: string;
  transform?: string | Record<string, string> | string[];
  transition?: string | Record<string, string> | string[];
  whiteSpace?: string;
};

type CustomTextProps = {
  cursor?: string;
  id?: string;
  textTransform?: string;
  transition?: string | Record<string, string> | string[];
  textDecoration?: string;
  whiteSpace?: string;
  wordBreak?: string;
};

type CustomSvgProps = {
  cursor?: string;
  fill?: string;
  pointerEvents?: string;
  stroke?: string;
};

export type ComposedBoxProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  FixedColorProps &
  BorderProps &
  PositionProps &
  BackgroundProps &
  ShadowProps &
  TypographyProps &
  CustomBoxProps;
export type ComposedColorProps = FixedColorProps;
export type ComposedGridProps = ComposedBoxProps &
  Omit<GridProps, 'gridGap' | 'gridColumnGap' | 'gridRowGap'> & {
    columnGap?: GridProps['gridColumnGap'];
    gap?: GridProps['gridGap'];
    rowGap?: GridProps['gridRowGap'];
  };
export type ComposedTextProps = LayoutProps &
  SpaceProps &
  FixedColorProps &
  PositionProps &
  TypographyProps &
  CustomTextProps;
export type ComposedSvgProps = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  CustomSvgProps;
