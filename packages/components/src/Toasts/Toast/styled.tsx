import React from 'react';
import styled from 'styled-components';

import Alert from 'components/Alert';
import Animation from 'components/Animation';

import { StyledToastProps } from './types';

const StyledToast: React.FC<StyledToastProps> = styled(Alert)<StyledToastProps>``;

StyledToast.defaultProps = {
	borderRadius: 0,
	flexShrink: 0,
	marginY: 2,
	minWidth: 250,
	overflow: 'hidden',
	pointerEvents: 'auto',
	zIndex: 'toast' as any
};

const AnimatedToastWrapper = Animation.BaseAnimation;

export { AnimatedToastWrapper };
export default React.memo(StyledToast);
