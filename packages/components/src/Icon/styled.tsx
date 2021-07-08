import React from 'react';
import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import aspectSize from './variants/aspectSize';
import { IconProps } from './types';

const StyledIcon: React.FC<Partial<IconProps>> = styled.svg.withConfig<IconProps>({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.svg}
	${props => aspectSize(props)}
`;

StyledIcon.defaultProps = {
	fill: 'currentColor',
	flexShrink: 0
};

export default StyledIcon;
