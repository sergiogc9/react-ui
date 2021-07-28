import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { AlertProps } from '../types';

export default (props: StyledProps<AlertProps>) => {
	const generateCSS = (statusProp: AlertProps['status']) => ({
		bg: props.bg ?? props.theme.components.alert.colors[statusProp!].bg,
		color: props.color ?? props.theme.components.alert.colors[statusProp!].text
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
