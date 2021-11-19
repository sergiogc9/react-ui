import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { TextFieldInputProps } from '../types';

export default (props: StyledProps<TextFieldInputProps>) => {
	const generateCSS = (aspectSize: TextFieldInputProps['aspectSize']) => {
		if (
			!props.label ||
			props.labelPosition === 'outside' ||
			(!props.value!.toString().trim() && !props.placeholder && !props.isInputFocused)
		)
			return {};

		const themeOffset = props.theme.components.textField.aspectSize[aspectSize!].label.offset;
		return {
			paddingTop: `${themeOffset * 2 - 4}px`
		};
	};

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l')
		}
	});
};
