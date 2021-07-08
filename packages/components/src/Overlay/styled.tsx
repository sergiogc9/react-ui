import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '@sergiogc9/react-ui-theme';

import Animation from 'components/Animation';
import Box from 'components/Box';
import { OverlayProps } from './types';

const StyledOverlay: React.FC<OverlayProps> = styled(Box)<OverlayProps>``;

StyledOverlay.defaultProps = {
	bg: 'neutral.900',
	height: '100vh',
	left: 0,
	opacity: 0.2,
	position: 'fixed',
	top: 0,
	width: '100vw',
	zIndex: theme.zIndices.overlay
};

const OverlayFadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.2;
  }
`;

const AnimatedOverlay = Animation.withBaseAnimation(StyledOverlay, OverlayFadeInAnimation);

export default AnimatedOverlay;
