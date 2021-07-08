import React, { forwardRef } from 'react';

import icons from './icons';
import StyledIcon from './styled';
import { IconProps } from './types';

const Icon = forwardRef<SVGSVGElement, IconProps>(
	({ aspectSize = 'm', content, icon, styling, viewBox = '0 0 24 24', ...restProps }, ref) => {
		const svgContent = React.useMemo(() => {
			if (content) return content;
			return icons[styling!][icon!];
		}, [content, icon, styling]);

		return (
			<StyledIcon {...restProps} aspectSize={aspectSize} ref={ref} viewBox={viewBox}>
				{svgContent}
			</StyledIcon>
		);
	}
);

export default React.memo(Icon);
