import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import { BoxComponent } from './types';

const Box: BoxComponent = styled.div.withConfig({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.box}
`;

Box.defaultProps = {
	position: 'relative'
};

Box.displayName = 'Box';

export default Box;
