type Color = 'default' | 'borderDefault' | 'disabled' | 'error' | 'hover' | 'information' | 'success';
type VariantProps = 'bg' | 'color';

export type AspectSize = 's' | 'm' | 'l';

export interface Input {
	aspectSize: Record<AspectSize, Record<'height', number | string>>;
	color: Record<Color, string>;
	removeButton: Record<VariantProps, string>;
}
