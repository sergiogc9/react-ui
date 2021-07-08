type BadgeVariants = 'blue' | 'green' | 'red' | 'yellow';
type BadgeBackgrounds = Record<'color' | 'bg', string>;
type BadgeColors = Record<BadgeVariants, BadgeBackgrounds>;

export interface Badge {
	readonly colors: BadgeColors;
}
