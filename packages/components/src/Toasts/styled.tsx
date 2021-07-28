import styled from 'styled-components';

import Box from 'components/Box';

import placement from './variants/placement';
import { StyledToastsProps } from './types';

const StyledToasts: React.FC<StyledToastsProps> = styled(Box)<StyledToastsProps>`
	${placement}
`;

StyledToasts.defaultProps = {
	maxWidth: '100%',
	paddingX: 3,
	paddingY: 1,
	pointerEvents: 'none',
	position: 'fixed',
	width: 600,
	zIndex: 'toast' as any
};

export default StyledToasts;
