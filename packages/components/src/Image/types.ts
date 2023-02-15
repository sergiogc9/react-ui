import React from 'react';

import { FlexProps } from 'components/Flex';

export interface ImageProps extends Omit<FlexProps<React.ImgHTMLAttributes<HTMLImageElement>>, 'src'> {
	/**
	 * The source of the image
	 */
	readonly src: string;
}
