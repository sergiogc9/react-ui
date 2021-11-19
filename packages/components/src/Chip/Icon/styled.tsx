import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import { ChipIconProps } from './types';
import variant from './variants/variant';

const StyledIcon: React.FC<ChipIconProps> = styled(Icon)`
	${variant}
`;

StyledIcon.defaultProps = {
	aspectSize: 's',
	position: 'relative'
};

export default StyledIcon;
