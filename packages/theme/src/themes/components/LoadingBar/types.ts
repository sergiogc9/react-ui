import { ThemeColors } from 'theme/types';

type LoadingBarColors = Record<'active' | 'background', string>;

export interface LoadingBar {
	readonly colors: ThemeColors<LoadingBarColors>;
}
