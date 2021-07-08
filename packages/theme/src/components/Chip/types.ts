type ChipColorVariants = 'blue' | 'green' | 'grey' | 'red' | 'white' | 'yellow';

type ChipHoverTypes = Record<'default' | 'hover', string>;
type ChipColorAttrs = Record<'color', string>;
type ChipBorderColor = Record<
  'borderColor' | 'background' | 'actionableBg',
  ChipHoverTypes
>;

type ChipColorsParams = ChipColorAttrs & ChipBorderColor;
type ChipColors = Record<ChipColorVariants, ChipColorsParams>;

type ChipSizeVariants = 's' | 'm';

type ChipSizeParams = Partial<
  Record<
    'width' | 'px' | 'py' | 'fontSize' | 'height' | 'borderRadius',
    string | number
  >
>;
type ChipSizeTypes = 'chip' | 'iconWrapper';
type ChipSizes = Record<
  ChipSizeTypes,
  Record<ChipSizeVariants, ChipSizeParams>
>;

export interface Chip {
  readonly sizes: ChipSizes;
  readonly colors: ChipColors;
}
