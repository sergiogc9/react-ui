type IconAspectSizes = 's' | 'm' | 'l' | 'xl';
type IconSizes = Record<IconAspectSizes, number>;

export interface Icon {
	readonly sizes: IconSizes;
}
