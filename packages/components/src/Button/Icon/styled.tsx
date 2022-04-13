import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';
import aspectSize from './variants/aspectSize';
import { StyledButtonIconProps } from './types';

const StyledButtonIcon: React.FC<StyledButtonIconProps> = styled(Icon)<StyledButtonIconProps>`
	fill: currentColor;

	${aspectSize};
`;

StyledButtonIcon.defaultProps = {
	aspectSize: 'm'
};

export default StyledButtonIcon;
