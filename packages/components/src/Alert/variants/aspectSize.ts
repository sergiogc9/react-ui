import { StyledProps } from 'styled-components';

import { createVariant } from 'components/private/utils/variants';

import { AlertProps } from '../types';

const generateCSS = (props: StyledProps<AlertProps>, aspectSize: AlertProps['aspectSize']) => ({
	minHeight: props.bg ?? props.theme.components.alert.sizes[aspectSize!].minHeight,
	padding: props.bg ?? props.theme.components.alert.sizes[aspectSize!].padding
});

export default createVariant<AlertProps, 'aspectSize'>('aspectSize', generateCSS);
