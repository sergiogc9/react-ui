import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import aspectSize from './variants/aspectSize';
import { TextProps } from './types';

export const Text: React.FC<TextProps> = styled.span.withConfig<TextProps>({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.text}
	${aspectSize}
`;

Text.defaultProps = {
	aspectSize: 'm'
};
