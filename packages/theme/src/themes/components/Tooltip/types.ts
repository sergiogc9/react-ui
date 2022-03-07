type TooltipVariants = 'dark' | 'light';
type TooltipColors = Record<TooltipVariants, Record<'background' | 'text', string>>;

export interface Tooltip {
	readonly colors: TooltipColors;
}
