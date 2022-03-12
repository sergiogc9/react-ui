import { ThemeColors } from 'theme/types';

type AvatarColors = Record<'background', string>;

export interface Divider {
	readonly colors: ThemeColors<AvatarColors>;
}
