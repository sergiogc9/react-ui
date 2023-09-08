import React from 'react';
import merge from 'lodash/merge';
import {
	ArgTypes as SBArgTypes,
	Canvas as SBCanvas,
	Controls as SBControls,
	Meta as SBMeta,
	Story as SBStory
} from '@storybook/addon-docs';
import { getExcludedProps } from 'storybook/parameters';

export const Canvas = SBCanvas;
export const Controls = SBControls;
export const Meta = SBMeta;
export const Story = SBStory;

type ArgTypesProps = React.ComponentProps<typeof SBArgTypes>;

export const ArgTypes: React.FC<ArgTypesProps> = props => {
	const { include = [], exclude = [], ...rest } = props;

	const excludedProps = getExcludedProps(include as string[], exclude as string[]);

	return <SBArgTypes {...rest} exclude={excludedProps} />;
};
