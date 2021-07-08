import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import { TitleProps } from './types';
import aspectSize from './variants/aspectSize';

export const Title: React.FC<TitleProps> = styled.span.withConfig<TitleProps>({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.text}

	${props => aspectSize(props)}
`;

Title.defaultProps = {
	aspectSize: 'm',
	fontFamily: 'main'
};
