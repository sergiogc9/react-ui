import React from 'react';

import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = {
	/**
	 * The source of the image
	 */
	readonly src: string;
};

type ImageProps<T extends React.ElementType = 'img'> = ExtendedFlexProps<Props, T, ['src']>;

type ImageComponent = ExtendedFlexComponent<Props>;

export { ImageComponent, ImageProps };
