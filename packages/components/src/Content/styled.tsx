import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import aspectSize from './variants/aspectSize';
import { ContentProps } from './types';

export const Content: React.FC<ContentProps> = styled.span.withConfig<ContentProps>({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.text}
	${props => aspectSize(props)}
`;

Content.defaultProps = {
	aspectSize: 'm',
	fontFamily: 'main'
};
