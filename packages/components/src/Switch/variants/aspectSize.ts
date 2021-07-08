import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { SwitchProps } from 'components/Switch/types';

export default (props: StyledProps<SwitchProps>) => {
	const generateCSS = (aspectSize: SwitchProps['aspectSize']) => ({
		width: props.theme.components.switch.backgroundSizes[aspectSize!].width,
		height: props.theme.components.switch.backgroundSizes[aspectSize!].height,
		'> span': {
			width: props.theme.components.switch.toggleSizes[aspectSize!].width,
			height: props.theme.components.switch.toggleSizes[aspectSize!].height
		}
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m')
		}
	});
};
