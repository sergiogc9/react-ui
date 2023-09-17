import React from 'react';

import RealBox, { BoxProps as RealBoxProps } from 'components/Box';

// This file simplifies Box props for a better DX in storybook docs.
// If you need to add more props, add them in StorybookBoxProps type and in storyArgs object

type StorybookBoxProps = 'bg' | 'borderStyle' | 'borderRadius' | 'borderWidth' | 'color' | 'px' | 'py' | 'width';

export type BoxProps = {
	[prop in keyof Pick<RealBoxProps<'div'>, StorybookBoxProps>]: Exclude<
		Extract<RealBoxProps<'div'>[prop], string>,
		{ _?: unknown }
	>;
};

export const storyArgs: Pick<Required<RealBoxProps<'div'>>, StorybookBoxProps> = {
	bg: 'green.200',
	borderStyle: 'solid',
	borderRadius: 'lg',
	borderWidth: 'default',
	color: 'neutral.700',
	px: 'md',
	py: 'md',
	width: 300
};

export const Box = (props: BoxProps) => <RealBox {...props} />;
