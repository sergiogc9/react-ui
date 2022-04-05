import React from 'react';

import { FlexProps } from 'components/Flex';

type Props = {
	/**
	 * The source of the image
	 */
	readonly src: string;
};

export type ImageProps = Props & Omit<FlexProps<React.ImgHTMLAttributes<HTMLImageElement>>, 'src'>;
