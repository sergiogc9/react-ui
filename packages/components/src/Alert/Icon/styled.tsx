import styled from 'styled-components';

import Icon from 'components/Icon';

import status from './variants/status';
import { StyledAlertIconProps } from './types';

const StyledAlertIcon: React.FC<StyledAlertIconProps> = styled(Icon)<StyledAlertIconProps>`
	${status}
`;

export default StyledAlertIcon;
