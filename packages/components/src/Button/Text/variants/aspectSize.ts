import { StyledProps } from 'styled-components';

import { createVariant } from 'components/private/utils/variants';
import { StyledButtonTextProps } from 'components/Button/Text/types';

const generateCSS = (props: StyledProps<StyledButtonTextProps>, aspectSize: StyledButtonTextProps['aspectSize']) => ({
	fontSize: props.theme.components.button.fontSizes[aspectSize!],
	lineHeight: props.theme.components.button.lineHeights[aspectSize!]
});

export default createVariant<StyledButtonTextProps, 'aspectSize'>('aspectSize', generateCSS);
