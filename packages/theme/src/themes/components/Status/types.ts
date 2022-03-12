import { ThemeColors } from 'theme/types';

type StatusVariants = 'blue' | 'green' | 'grey' | 'red' | 'yellow';

type StatusColors = Record<StatusVariants, Record<'bg' | 'color', string>>;

export interface Status {
	readonly colors: ThemeColors<StatusColors>;
}
