import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

import { ModalProps } from 'components/Modal';

export default (props: StyledProps<ModalProps>) => {
	const generateCSS = (aspectSize: ModalProps['aspectSize']) => ({
		width: props.width ?? props.size ?? props.theme.components.modal.sizes[aspectSize!]
	});

	return variant({
		prop: 'aspectSize',
		variants: {
			s: generateCSS('s'),
			m: generateCSS('m'),
			l: generateCSS('l'),
			xl: generateCSS('xl')
		}
	});
};
