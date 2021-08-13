import styled, { css } from 'styled-components';
import theme from '@sergiogc9/react-ui-theme';

import Animation from 'components/Animation';
import Box from 'components/Box';
import aspectSize from './variants/aspectSize';
import { ModalProps } from './types';

const StyledModal: React.FC<ModalProps> = styled(Box)<ModalProps>`
	${aspectSize}

	${props =>
		!props.width &&
		css`
			max-height: calc(100vh - 32px);
			max-width: calc(100% - 32px);

			@media (max-width: ${props.theme.breakpoints.sm}) {
				max-width: calc(100% - 16px);
			}
		`}

    ${props =>
		!props.width &&
		props.isMobileFullScreen &&
		css`
			@media (max-width: ${props.theme.breakpoints.sm}) {
				border-radius: 0;
				height: 100%;
				max-height: 100vh;
				max-width: 100%;
				width: 100%;
			}
		`}
`;

StyledModal.defaultProps = {
	bg: 'neutral.0',
	borderRadius: 1,
	boxShadow: { xs: 'none', md: 'center3' },
	flexDirection: 'column',
	height: 'auto',
	justifyContent: 'space-between',
	overflow: 'auto',
	maxWidth: '100%'
};

const StyledModalWrapper: React.FC<ModalProps> = styled(Box)<ModalProps>`
	${props =>
		props.isVisible &&
		css`
			display: flex;
		`}
`;

StyledModalWrapper.defaultProps = {
	alignItems: 'center',
	display: 'none',
	height: '100%',
	justifyContent: 'center',
	left: '0',
	position: 'fixed',
	top: '0',
	width: '100%',
	zIndex: theme.zIndices.modal
};

const AnimatedModal = Animation.withBaseAnimation(StyledModal, Animation.FadeInAnimation);

export { StyledModalWrapper };
export default AnimatedModal;
