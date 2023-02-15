import React from 'react';
import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import aspectSize from './variants/aspectSize';
import { StyledIconProps } from './types';

const StyledIcon: React.FC<Partial<StyledIconProps>> = styled.svg.withConfig<StyledIconProps>({
	shouldForwardProp: shouldStyledComponentForwardProp
})`
	${composers.svg}
	${aspectSize}
`;

StyledIcon.defaultProps = {
	fill: 'currentColor',
	flexShrink: 0
};

export default StyledIcon;
