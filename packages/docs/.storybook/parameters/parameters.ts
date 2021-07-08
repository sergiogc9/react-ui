const EXCLUDED_PROPS = [
	'as',
	'backgroundClip',
	'boxSizing',
	'color',
	'columnGap',
	'cursor',
	'fill',
	'fontFamily',
	'gap',
	'id',
	'key',
	'outline',
	'pointerEvents',
	'ref',
	'rowGap',
	'stroke',
	'textDecoration',
	'textTransform',
	'transform',
	'transition',
	'whiteSpace',
	'wordBreak'
];

const playgroundStoryParams = {
	options: { showPanel: true },
	docs: { disable: true }
};

const fixedStoryParams = {
	controls: { disable: true },
	actions: { disable: true },
	options: { showPanel: false }
};

export const getExcludedProps = (include: string[], exclude: string[]) =>
	[...EXCLUDED_PROPS, ...exclude].filter(prop => !include.includes(prop));

export const getPlaygroundStoryParams = (
	{ include, exclude, ...rest }: Record<'include' | 'exclude', string[]> = {
		include: [],
		exclude: []
	}
) => ({
	...playgroundStoryParams,
	controls: {
		...playgroundStoryParams,
		exclude: getExcludedProps(include || [], exclude || [])
	},
	...rest
});

export const getFixedStoryParams = () => fixedStoryParams;
