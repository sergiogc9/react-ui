import React from 'react';
import shouldForwardProp from '@styled-system/should-forward-prop';

export const createNameSpacedComponent = <T extends React.ElementType, U extends Record<string, React.ElementType>>(
	mainComponent: T,
	composedComponents: U
) => {
	// eslint-disable-next-line @typescript-eslint/ban-types
	const composedComponent = { ...(mainComponent as object) };
	Object.keys(composedComponents).forEach(key => {
		(composedComponent as any)[key] = composedComponents[key];
	});
	return composedComponent as T & U;
};

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
