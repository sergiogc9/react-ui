import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';
import { StyledStepperIconProps, StyledStepperIconFontAwesomeProps } from './types';

const StyledStepperIcon: React.FC<StyledStepperIconProps> = styled(Icon)<StyledStepperIconProps>`
	animation-delay: ${props => props.delay ?? (props.current > props.index ? '0.25s' : '0.5s')};
`;

StyledStepperIcon.defaultProps = {
	aspectSize: 's',
	fill: 'currentColor'
};

const StyledStepperFontAwesomeIcon: React.FC<StyledStepperIconFontAwesomeProps> = styled(
	Icon.FontAwesome
).withConfig<StyledStepperIconFontAwesomeProps>({
	shouldForwardProp: prop => {
		if (
			[
				'animateAtMount',
				'animation',
				'current',
				'delay',
				'direction',
				'duration',
				'fillMode',
				'index',
				'isEnabled',
				'isLast',
				'isVisible',
				'iterationCount',
				'onAnimationEnd',
				'playState',
				'showCheckIcon',
				'timingFunction'
			].includes(prop)
		)
			return false;

		return true;
	}
})`
	animation-delay: ${props => props.delay ?? (props.current > props.index ? '0.25s' : '0.5s')};
`;

StyledStepperFontAwesomeIcon.defaultProps = {
	aspectSize: 's',
	fill: 'currentColor'
};

export { StyledStepperIcon, StyledStepperFontAwesomeIcon };
