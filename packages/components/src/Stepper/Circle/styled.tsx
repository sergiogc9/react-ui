import React from 'react';
import styled, { css } from 'styled-components';
import theme, { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import Box from 'components/Box';
import variant from './variants/variant';
import { StyledStepperCircleProps } from './types';

const getCircleColors = (props: StyledStepperCircleProps) => {
	const { current, index } = props;

	const activeColor = getColorFromTheme(theme, theme.components.stepper.colors.active);
	const disabledBorderColor = getColorFromTheme(theme, theme.components.stepper.colors.disabledLine);
	const disabledContentColor = getColorFromTheme(theme, theme.components.stepper.colors.disabled);

	if (current === index)
		return css`
			border-color: ${activeColor};
			background-color: ${activeColor};
			transition-delay: 0.5s;
		`;

	if (current > index)
		return css`
			background-color: transparent;
			color: ${activeColor};
		`;

	return css`
		background-color: transparent;
		border-color: ${disabledBorderColor};
		color: ${disabledContentColor};
	`;
};

const StyledStepperCircle = styled(Box)<StyledStepperCircleProps>`
	font-weight: bold;
	${getCircleColors}
	${variant}
`;

StyledStepperCircle.defaultProps = {
	alignItems: 'center',
	bg: 'primary.500',
	borderColor: 'currentColor',
	borderRadius: '50%',
	borderStyle: 'solid',
	borderWidth: '2px',
	boxSizing: 'border-box',
	color: 'neutral.0',
	flexShrink: 0,
	justifyContent: 'center',
	position: 'relative',
	transition: 'color ease-in 0.25s, background-color ease-in 0.25s, border-color ease-in 0.25s'
};

export default React.memo(StyledStepperCircle);
