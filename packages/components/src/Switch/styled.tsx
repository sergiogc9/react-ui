import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import Flex from 'components/Flex';
import aspectSize from './variants/aspectSize';
import { SwitchProps } from './types';

const SwitchBackground = styled(Flex)<SwitchProps>`
	${props =>
		systemCSS({
			bg: props.theme.components.switch.colors.background.default
		})}

	${props =>
		props.isChecked &&
		systemCSS({
			bg: props.theme.components.switch.colors.background.checked
		})}}
	${props =>
		props.isDisabled &&
		systemCSS({
			bg: props.theme.components.switch.colors.background.disabled
		})}};
`;

SwitchBackground.defaultProps = {
	borderRadius: 1,
	height: '100%',
	opacity: '0.5',
	transition: 'background-color cubic-bezier(0.4, 0, 0.2, 1) 200ms',
	width: '100%'
};

const SwitchToggle = styled(Flex)<SwitchProps>`
	${props =>
		systemCSS({
			bg: props.theme.components.switch.colors.toggle.color
		})}

	${props =>
		!props.isDisabled &&
		css`
			&::after {
				content: '';
				background-color: ${props.theme.colors.neutral['900']};
				border-radius: 50%;
				height: 200%;
				opacity: 0;
				position: absolute;
				transition: background-color, opacity cubic-bezier(0.4, 0, 0.2, 1) 400ms;
				width: 200%;
				z-index: -1;
			}
		`}

	${props =>
		props.isChecked &&
		css`
			transform: translate(90%);
			&::after {
				background-color: inherit;
			}
		`}

  ${props =>
		!props.isChecked &&
		css`
			background-color: ${props.theme.colors.neutral['0']};
		`}

  ${props =>
		props.isDisabled &&
		css`
			background-color: ${props.theme.colors.neutral['300']};
		`}
`;

SwitchToggle.defaultProps = {
	as: 'span',
	alignItems: 'center',
	display: 'flex',
	borderRadius: '50%',
	boxShadow: 'center2',
	justifyContent: 'center',
	left: 0,
	position: 'absolute',
	transform: 'translate(-20%)',
	transition: 'background-color cubic-bezier(0.4, 0, 0.2, 1) 150ms, transform ease-in 150ms'
};

const StyledSwitch: React.FC<SwitchProps> = styled(Flex)<SwitchProps>`
	user-select: none;

	@media (hover: hover) {
		&:hover ${SwitchToggle}::after {
			opacity: 0.08;
		}
	}

	${props =>
		props.isDisabled &&
		css`
			cursor: default;
		`}

	${props => aspectSize(props)};
`;

StyledSwitch.defaultProps = {
	alignItems: 'center',
	cursor: 'pointer',
	flexGrow: 0,
	justifyContent: 'center',
	padding: 0
};

export { SwitchBackground, SwitchToggle };
export default StyledSwitch;
