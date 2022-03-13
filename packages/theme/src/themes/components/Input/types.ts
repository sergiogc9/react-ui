import { ThemeColors } from 'theme/types';

type Color = 'default' | 'background' | 'borderDefault' | 'disabled' | 'error' | 'hover' | 'information' | 'success';
type InputColors = Record<Color, string>;
type VariantProps = 'bg' | 'color';

export type AspectSize = 's' | 'm' | 'l';

export interface Input {
	aspectSize: Record<AspectSize, Record<'height', number | string>>;
	colors: ThemeColors<InputColors>;
	removeButton: Record<VariantProps, string>;
}
