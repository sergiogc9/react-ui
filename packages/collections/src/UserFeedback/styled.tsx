import React from 'react';
import styled from 'styled-components';
import { Box } from '@sergiogc9/react-ui';

import { StyledUserFeedbackProps } from './types';

const StyledUserFeedback: React.FC<StyledUserFeedbackProps> = styled(Box)``;

StyledUserFeedback.defaultProps = {
	alignItems: 'center',
	flexDirection: 'column',
	justifyContent: 'center',
	maxWidth: { xs: 350, md: 600 },
	padding: { xs: 3, md: 4 }
};

export default React.memo(StyledUserFeedback);
