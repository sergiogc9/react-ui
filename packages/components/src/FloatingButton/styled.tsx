import styled, { css } from 'styled-components';
import systemCSS from '@styled-system/css';

import Flex from 'components/Flex';

import aspectSize from './variants/aspectSize';
import { StyledFloatingButtonProps } from './types';

const StyledFloatingButton: React.FC<StyledFloatingButtonProps> = styled(Flex)<StyledFloatingButtonProps>`
	${props =>
		systemCSS({
			bg: (props.bg as any) ?? props.theme.components.floatingButton.colors.background.default,
			color: (props.color as any) ?? props.theme.components.floatingButton.colors.text,

			'&:focus-visible': {
				boxShadow: `0 0 0 3px ${(props.bg as string) ?? props.theme.components.floatingButton.colors.focusShadow}`,
				borderColor: 'transparent'
			},

			'@media (hover: hover)':
				!props.isDisabled && !props.isLoading
					? {
							'&:hover': {
								bg: (props.bg as any) ?? props.theme.components.floatingButton.colors.background.hover
							}
					  }
					: {},

			'&:active':
				!props.isDisabled && !props.isLoading
					? {
							bg: (props.bg as any) ?? props.theme.components.floatingButton.colors.background.active
					  }
					: {}
		})}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}

	${props =>
		props.isLoading &&
		css`
			cursor: not-allowed;
		`}

	${aspectSize};
`;

StyledFloatingButton.defaultProps = {
	alignItems: 'center',
	borderWidth: '0px',
	borderRadius: 100,
	boxSizing: 'border-box',
	boxShadow: 'down',
	color: 'neutral.0',
	cursor: 'pointer',
	fontWeight: 'bold',
	justifyContent: 'center',
	position: 'relative',
	outline: 'none',
	overflow: 'hidden',
	textDecoration: 'none',
	transition: 'all ease 0.3s',
	whiteSpace: 'nowrap'
};

export default StyledFloatingButton;
