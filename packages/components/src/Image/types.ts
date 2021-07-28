import React from 'react';

import { BoxProps } from 'components/Box';

type Props = {
	/**
	 * The source of the image
	 */
	readonly src: string;
};

export type ImageProps = Props & Omit<BoxProps<React.ImgHTMLAttributes<HTMLImageElement>>, 'src'>;
