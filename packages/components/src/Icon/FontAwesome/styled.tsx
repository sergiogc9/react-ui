import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import aspectSize from './variants/aspectSize';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon).withConfig({
	shouldForwardProp: prop => {
		if (['aspectSize', 'size'].includes(prop)) return false;

		return true;
	}
})`
	${aspectSize}

	flex-shrink: 0;
`;

export { StyledFontAwesomeIcon };
