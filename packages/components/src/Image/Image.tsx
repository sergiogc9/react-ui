import React from 'react';

import Flex from 'components/Flex';
import Skeleton from 'components/Skeleton';

import { ImageProps } from './types';

const ImageFlex: React.FC<ImageProps> = Flex;

const Image: React.FC<ImageProps> = ({ as = 'img', onLoad, onError, src, style, ...rest }) => {
	const [isError, setIsError] = React.useState(false);
	const [isLoaded, setIsLoaded] = React.useState(false);

	const onImageLoaded = React.useCallback<NonNullable<ImageProps['onLoad']>>(
		ev => {
			setIsLoaded(true);
			setIsError(false);
			if (onLoad) onLoad(ev);
		},
		[onLoad]
	);

	const onLoadError = React.useCallback<NonNullable<ImageProps['onError']>>(
		ev => {
			setIsLoaded(false);
			setIsError(true);
			if (onError) onError(ev);
		},
		[onError]
	);

	const isSkeletonVisible = !src || (!isLoaded && !isError);

	return (
		<Flex height="fit-content" width="fit-content">
			{isSkeletonVisible && (
				<Skeleton height="100%" position="absolute" width="100%">
					<Skeleton.Rect borderRadius="0px" height="100%" width="100%" />
				</Skeleton>
			)}
			<ImageFlex
				as={as}
				onError={onLoadError}
				onLoad={onImageLoaded}
				src={src}
				style={{ visibility: isLoaded ? 'visible' : 'hidden', ...style }}
				{...rest}
			/>
		</Flex>
	);
};

export default React.memo(Image);
