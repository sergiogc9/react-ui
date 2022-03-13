import { ThemeColors } from 'theme/types';

type SkeletonColors = Record<'color', string>;

export interface Skeleton {
	readonly colors: ThemeColors<SkeletonColors>;
}
