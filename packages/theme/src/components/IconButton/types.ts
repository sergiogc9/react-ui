type IconButtonAspectSizes = 's' | 'm' | 'l';
type IconButtonVariants = 'default' | 'floating';
type IconButtonBackgrounds = Record<'default' | 'hover' | 'active', string>;
type IconButtonColor = Record<'icon', string> &
  Partial<Record<'borderActive', string>> &
  Record<'background', IconButtonBackgrounds>;
type IconButtonColors = Record<IconButtonVariants, IconButtonColor>;
type IconButtonSizes = Record<IconButtonAspectSizes, number | number[]>;

export interface IconButton {
  readonly colors: IconButtonColors;
  readonly sizes: IconButtonSizes;
}
