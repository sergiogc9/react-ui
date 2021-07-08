import React from 'react';
import merge from 'lodash/merge';
import {
	ArgsTable as SBArgsTable,
	Meta as SBMeta,
	Story as SBStory,
	Canvas as SBCanvas
} from '@storybook/addon-docs/blocks';
import { getFixedStoryParams, getExcludedProps, getPlaygroundStoryParams } from 'storybook/parameters';
import { ArgsTableProps, StoryProps } from './types';

export const Canvas = SBCanvas;
export const Meta = SBMeta;

export const ArgsTable: React.FC<ArgsTableProps> = props => {
	const { include = [], exclude = [], ...rest } = props;

	const excludedProps = getExcludedProps(include, exclude);

	return <SBArgsTable {...rest} exclude={excludedProps} />;
};

/**
 *  Commented due it is not working correctly. As using mdx it always gets the default Story component even importing from here.
 */
export const Story = SBStory;
// export const Story: React.FC<StoryProps> = (props) => {
//   const {
//     include = [],
//     isPlayground = false,
//     exclude = [],
//     parameters,
//     ...rest
//   } = props;

//   const excludedProps = __getExcludedProps(include, exclude);

//   const finalParameters = merge(
//     isPlayground ? getPlaygroundStoryParams() : getFixedStoryParams(),
//     parameters
//   );

//   finalParameters.controls = {
//     ...finalParameters.controls,
//     exclude: excludedProps
//   };

//   return <SBStory {...rest} parameters={finalParameters} />;
// };
