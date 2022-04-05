import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import { BoxProps } from './types';

// TODO! remove isReally prop once migration is done
const Box: React.FC<BoxProps & { isReallyABox: boolean }> = styled.div.withConfig<BoxProps>({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.box}
`;

Box.defaultProps = {
	position: 'relative'
};

export default Box;
