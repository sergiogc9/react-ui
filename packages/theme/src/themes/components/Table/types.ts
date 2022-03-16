import { ThemeColors } from 'theme/types';

type TableColors = {
	readonly content: Record<'bg' | 'bgHover' | 'text', string>;
	readonly header: Record<'bg' | 'bgHover' | 'border' | 'text', string>;
};

export interface Table {
	readonly colors: ThemeColors<TableColors>;
}
