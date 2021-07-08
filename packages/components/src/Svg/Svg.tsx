import React, { forwardRef } from 'react';

import InnerSvg from './styled';
import { SvgProps } from './types';

const Svg = forwardRef<SVGSVGElement, SvgProps>(({ children, height, src, title, viewBox, width, ...props }, ref) => {
	const srcProps = src && src({})!.props;

	const finalViewBox =
		viewBox ||
		(srcProps && srcProps.width && srcProps.height && `0 0 ${srcProps.width} ${srcProps.height}`) ||
		(srcProps && srcProps.viewBox) ||
		'0 0 0 0';

	const [finalWidth, finalHeight] = [
		width || (srcProps && srcProps.width) || `${finalViewBox.split(' ')[2]}px`,
		height || (srcProps && srcProps.height) || `${finalViewBox.split(' ')[3]}px`
	];

	const finalChildren = srcProps ? srcProps.children : children;

	return (
		<InnerSvg
			{...(props as any)}
			{...srcProps}
			as="svg"
			aria-hidden={title ? undefined : 'true'}
			height={finalHeight}
			ref={ref}
			viewBox={finalViewBox}
			width={finalWidth}
		>
			{title && <title>{title}</title>}
			<use aria-hidden={title ? undefined : 'true'} />
			{finalChildren}
		</InnerSvg>
	);
});

export default React.memo(Svg);
