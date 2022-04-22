import { StyledProps } from 'styled-components';

import { createVariant } from 'components/private/utils/variants';
import { StyledButtonProps } from 'components/Button/types';

const getButtonPadding = (props: StyledProps<StyledButtonProps>) => {
	if (props.padding) return props.padding;
	if (props.hasIcon === 'left') return props.theme.components.button.paddings[props.aspectSize!].leftIcon;
	if (props.hasIcon === 'right') return props.theme.components.button.paddings[props.aspectSize!].rightIcon;
	return props.theme.components.button.paddings[props.aspectSize!].default;
};

const generateCSS = (props: StyledProps<StyledButtonProps>, value: StyledButtonProps['aspectSize']) => ({
	height: props.height ?? props.theme.components.button.heights[value!],
	padding: getButtonPadding(props)
});

export default createVariant<StyledButtonProps, 'aspectSize'>('aspectSize', generateCSS);
