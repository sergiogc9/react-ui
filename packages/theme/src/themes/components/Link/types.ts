import { ThemeColors } from 'theme/types';

type LinkColors = Record<'color', string>;

export interface Link {
	readonly colors: ThemeColors<LinkColors>;
}
