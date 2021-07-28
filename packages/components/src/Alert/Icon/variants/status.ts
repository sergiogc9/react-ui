import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { StyledAlertIconProps } from '../types';

export default (props: StyledProps<StyledAlertIconProps>) => {
	const generateCSS = (statusProp: StyledAlertIconProps['status']) => ({
		fill: props.fill ?? props.theme.components.alert.colors[statusProp!].icon
	});

	return variant({
		prop: 'status',
		variants: {
			error: generateCSS('error'),
			info: generateCSS('info'),
			success: generateCSS('success'),
			warning: generateCSS('warning')
		}
	});
};
