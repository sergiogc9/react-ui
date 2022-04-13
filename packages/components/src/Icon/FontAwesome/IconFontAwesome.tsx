import { getColorFromTheme } from '@sergiogc9/react-ui-theme';
import React, { forwardRef } from 'react';
import { useTheme } from 'styled-components';

import { StyledFontAwesomeIcon } from './styled';
import { IconFontAwesomeProps } from './types';

const IconFontAwesome = forwardRef<SVGSVGElement, IconFontAwesomeProps>(
	(
		{ aspectSize = 'm', color, fill, primaryColor, primaryOpacity, secondaryColor, secondaryOpacity, style, ...rest },
		ref
	) => {
		const theme = useTheme();
		const finalColor = getColorFromTheme(theme, fill ?? color ?? 'currentColor');

		const finalStyle: Record<string, string | number> = { ...style };
		if (primaryColor && !finalStyle['--fa-primary-color'])
			finalStyle['--fa-primary-color'] = getColorFromTheme(theme, primaryColor);
		if (primaryOpacity && !finalStyle['--fa-primary-opacity']) finalStyle['--fa-primary-opacity'] = primaryOpacity;
		if (secondaryColor && !finalStyle['--fa-secondary-color'])
			finalStyle['--fa-secondary-color'] = getColorFromTheme(theme, secondaryColor);
		if (secondaryOpacity && !finalStyle['--fa-secondary-opacity'])
			finalStyle['--fa-secondary-opacity'] = secondaryOpacity;

		return (
			<StyledFontAwesomeIcon
				aspectSize={aspectSize}
				color={finalColor}
				forwardedRef={ref}
				style={finalStyle}
				{...(rest as any)}
			/>
		);
	}
);

export default React.memo(IconFontAwesome);
