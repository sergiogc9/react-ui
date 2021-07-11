import shouldForwardProp from '@styled-system/should-forward-prop';

/**
 * These are the styled-system props added in composers. To avoid adding new custom props as DOM attributes, add them to the list.
 */
const EXTRA_CSS_PROPS = [
	'boxSizing',
	'columnGap',
	'columns',
	'cursor',
	'direction',
	'fontFamily',
	'fill',
	'gap',
	'outline',
	'pointerEvents',
	'rowGap',
	'rows',
	'stroke',
	'textDecoration',
	'textTransform',
	'transform',
	'transition',
	'whiteSpace',
	'wordBreak'
];

export const shouldStyledComponentForwardProp = (prop: string | number) => {
	if (EXTRA_CSS_PROPS.includes(prop as string)) return false;

	return shouldForwardProp(prop as string);
};
