import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import aspectSize from './variants/aspectSize';
import { TextComponent } from './types';

export const Text: TextComponent = styled.span.withConfig({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.text}
	${aspectSize}
`;

Text.defaultProps = {
	aspectSize: 'm'
};
