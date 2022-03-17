import { ThemeColors } from 'theme/types';

type ModalAspectSizes = 's' | 'm' | 'l' | 'xl';
type ModalSizes = Record<ModalAspectSizes, string>;
type ModalColors = Record<'bg' | 'border', string>;

export interface Modal {
	readonly colors: ThemeColors<ModalColors>;
	readonly sizes: ModalSizes;
}
