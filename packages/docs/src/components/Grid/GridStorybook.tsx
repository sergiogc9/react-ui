import React from 'react';

import RealGrid, { GridProps as RealGridProps } from 'components/Grid';

// This file simplifies Grid props for a better DX in storybook docs.
// If you need to add more props, add them in StorybookGridProps type and in storyArgs object

type StorybookGridProps = 'columnGap' | 'columns' | 'rowGap' | 'rows' | 'width';

export type GridProps = {
	[prop in keyof Pick<RealGridProps<'div'>, StorybookGridProps>]: Exclude<
		Extract<RealGridProps<'div'>[prop], string>,
		{ _?: unknown }
	>;
};

export const storyArgs: Pick<Required<RealGridProps<'div'>>, StorybookGridProps> = {
	columnGap: 'sm',
	columns: 12,
	rowGap: 'sm',
	rows: 4,
	width: 800
};

export const Grid = (props: GridProps) => <RealGrid {...props} />;
