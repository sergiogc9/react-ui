import { ThemeColors } from 'theme/types';

type ChipColorVariants = 'blue' | 'green' | 'grey' | 'red' | 'transparent' | 'yellow';

type ChipHoverTypes = Record<'default' | 'hover' | 'overlay', string>;
type ChipColorAttrs = Record<'color', string>;
type ChipBorderColor = Record<'borderColor' | 'background', ChipHoverTypes>;
type ChipActionableBg = Record<'actionableBg', Omit<ChipHoverTypes, 'overlay'>>;

interface ChipColorsParams extends ChipColorAttrs, ChipBorderColor, ChipActionableBg {}
export type ChipColors = Record<ChipColorVariants, ChipColorsParams>;

type ChipSizeVariants = 's' | 'm';

type ChipSizeParams = Partial<Record<'width' | 'px' | 'py' | 'fontSize' | 'height' | 'borderRadius', string | number>>;
type ChipSizeTypes = 'chip' | 'iconWrapper';
type ChipSizes = Record<ChipSizeTypes, Record<ChipSizeVariants, ChipSizeParams>>;

export interface Chip {
	readonly sizes: ChipSizes;
	readonly colors: ThemeColors<ChipColors>;
}
