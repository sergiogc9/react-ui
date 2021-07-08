import React from 'react';
import styled, { css } from 'styled-components';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Box from 'components/Box';
import variant from './variants/variant';
import { StyledStepperCircleLineProps } from './types';

const StyledStepperCircleLine: React.FC<StyledStepperCircleLineProps> = styled(Box)<StyledStepperCircleLineProps>`
	${variant}

	background-color: ${props => getColorFromTheme(props.theme, props.theme.components.stepper.colors.disabledLine)};

	&::after {
		content: '';
		background-color: ${props => getColorFromTheme(props.theme, props.theme.components.stepper.colors.active)};
		transition: height ease-in 0.25s, width ease-in 0.25s;
		transition-delay: 0.25s;
	}

	${props =>
		props.current > props.index &&
		css`
			&::after {
				height: 100%;
				width: 100%;
			}
		`}
`;

StyledStepperCircleLine.defaultProps = {
	position: 'absolute'
};

export default React.memo(StyledStepperCircleLine);
