import React from 'react';

import RealFlex, { FlexProps as RealFlexProps } from 'components/Flex';

// This file simplifies Flex props for a better DX in storybook docs.
// If you need to add more props, add them in StorybookFlexProps type and in storyArgs object

type StorybookFlexProps = 'alignItems' | 'flexDirection' | 'gap' | 'justifyContent';

export type FlexProps = {
	[prop in keyof Pick<RealFlexProps<'div'>, StorybookFlexProps>]: Exclude<
		Extract<RealFlexProps<'div'>[prop], string>,
		{ _?: unknown }
	>;
};

export const storyArgs: Pick<Required<RealFlexProps<'div'>>, StorybookFlexProps> = {
	alignItems: 'center',
	flexDirection: 'row',
	gap: 'lg',
	justifyContent: 'space-between'
};

export const Flex = (props: FlexProps) => <RealFlex {...props} />;
