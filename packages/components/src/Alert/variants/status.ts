import { StyledProps } from 'styled-components';

import { createVariant } from 'components/private/utils/variants';

import { AlertProps } from '../types';

const generateCSS = (props: StyledProps<AlertProps>, status: AlertProps['status']) => ({
	bg: props.bg ?? props.theme.components.alert.colors[status!].bg,
	color: props.color ?? props.theme.components.alert.colors[status!].text
});

export default createVariant<AlertProps, 'status'>('status', generateCSS);
