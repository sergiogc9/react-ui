import { ArgTypes } from '@storybook/react';

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

export const getExcludedProps = (include: string[] = [], exclude: string[] = []) =>
	[...EXCLUDED_PROPS, ...exclude].filter(prop => !include.includes(prop));

export const getExcludedArgTypes = <T extends Object>(
	include: string[] = [],
	exclude: string[] = []
): Partial<ArgTypes<T>> =>
	getExcludedProps(include, exclude).reduce((prev: Partial<ArgTypes<T>>, curr) => {
		prev[curr as keyof Partial<ArgTypes<T>>] = { table: { disable: true } };

		return prev;
	}, {});
