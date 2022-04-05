import React from 'react';
import styled from 'styled-components';

import Animation from 'components/Animation';
import Flex from 'components/Flex';

import location from './variants/location';
import TableContentGradientProps from './types';

const StyledTableGradient: React.FC<TableContentGradientProps> = styled(Flex)`
	${location}
`;

StyledTableGradient.defaultProps = { position: 'absolute' };

const AnimatedStyledTableGradient = Animation.withBaseAnimation(StyledTableGradient, Animation.FadeInAnimation);

export default AnimatedStyledTableGradient;
