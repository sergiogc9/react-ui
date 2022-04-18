import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import status from './variants/status';
import { StyledAlertIconProps } from './types';

const StyledAlertIcon: React.FC<StyledAlertIconProps> = styled(Icon)`
	${status}
`;
StyledAlertIcon.defaultProps = {
	mr: 2
};

const StyledAlertIconFontAwesome = styled(Icon.FontAwesome as any)`
	${status}
`;
StyledAlertIconFontAwesome.defaultProps = {
	mr: 2
};

export { StyledAlertIcon, StyledAlertIconFontAwesome };
