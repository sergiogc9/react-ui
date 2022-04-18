import styled from 'styled-components';
import { space } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import aspectSize from './variants/aspectSize';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon).withConfig({
	shouldForwardProp: prop => {
		if (['aspectSize', 'size'].includes(prop)) return false;

		return true;
	}
})`
	${space}
	${aspectSize}

	flex-shrink: 0;
`;

export { StyledFontAwesomeIcon };
