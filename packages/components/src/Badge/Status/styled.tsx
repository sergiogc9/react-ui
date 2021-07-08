import styled from 'styled-components';

import Status from 'components/Status';
import location from './variants/location';
import { BadgeStatusProps } from './types';

const BadgeStatus: React.FC<BadgeStatusProps> = styled(Status)`
	${location}
`;

BadgeStatus.defaultProps = {
	position: 'absolute'
};

export { BadgeStatus };
