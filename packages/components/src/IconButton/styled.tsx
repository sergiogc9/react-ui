import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import Flex from 'components/Flex';
import aspectSize from './variants/aspectSize';
import { IconButtonProps } from './types';

const StyledIconButton = styled(Flex)<IconButtonProps>`
	${props =>
		systemCSS({
			bg: (props.bg as any) ?? props.theme.components.iconButton.colors.background.default,
			borderColor: (props.borderColor as any) ?? 'transparent',
			color: (props.color as any) ?? props.theme.components.iconButton.colors.icon,

			'&:focus-visible': {
				borderColor: props.theme.components.iconButton.colors.borderActive || 'transparent'
			},

			'@media (hover: hover)': (!props.isDisabled as any) && {
				'&:hover': {
					bg: (props.bg as any) ?? props.theme.components.iconButton.colors.background.hover
				}
			},

			'&:active': (!props.isDisabled as any) && {
				bg: (props.bg as any) ?? props.theme.components.iconButton.colors.background.active
			}
		})}

	${props =>
		props.isDisabled &&
		css`
			cursor: not-allowed;
			opacity: 0.4;
		`}

	${aspectSize};
`;

StyledIconButton.defaultProps = {
	alignItems: 'center',
	borderRadius: '50%',
	borderStyle: 'solid',
	borderWidth: '2px',
	boxSizing: 'border-box',
	cursor: 'pointer',
	flexShrink: 0,
	justifyContent: 'center',
	outline: 'none',
	padding: 0,
	position: 'relative',
	overflow: 'hidden',
	transition: 'all ease 0.3s',
	whiteSpace: 'nowrap'
};

export default StyledIconButton;
