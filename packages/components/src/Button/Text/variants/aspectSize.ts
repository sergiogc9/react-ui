import { variant } from 'styled-system';
import { Theme } from '@sergiogc9/react-ui-theme';

import { StyledButtonTextProps } from 'components/Button/Text/types';

export default (theme: Theme) => {
	const generateCSS = (aspectSize: StyledButtonTextProps['aspectSize']) => ({
		fontSize: theme.components.button.fontSizes[aspectSize!],
		lineHeight: theme.components.button.lineHeights[aspectSize!]
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			xs: generateCSS('xs'),
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l')
		}
	});
};
