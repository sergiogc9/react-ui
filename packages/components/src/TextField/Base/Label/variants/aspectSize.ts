import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { TextFieldLabelProps } from '../types';

export default (props: StyledProps<TextFieldLabelProps>) => {
	const generateCSS = (aspectSize: TextFieldLabelProps['aspectSize']) => {
		if (!props.value!.toString().trim() && !props.placeholder && !props.isInputFocused) {
			return {
				fontSize: props.theme.components.input.fontSize[aspectSize!].text
			};
		}

		if (props.labelPosition === 'inside') {
			return {
				transform: `translateY(-${props.theme.components.textField.aspectSize[aspectSize!].label.offset}px)`
			};
		}

		const leftPadding = props.leftContent ? 48 : 16;
		return {
			pl: 0,
			pointerEvents: 'inherit',
			transform: `translate(-${leftPadding}px, calc(-50% - 10px))`
		};
	};

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
