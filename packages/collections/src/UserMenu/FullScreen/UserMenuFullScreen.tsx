import React from 'react';
import ReactDOM from 'react-dom';
import { Animation, Box, Icon, IconButton } from '@sergiogc9/react-ui';

import { UserMenuFullScreenProps } from './types';

const UserMenuFullScreen: React.FC<UserMenuFullScreenProps> = ({
	appendTo,
	children,
	isVisible,
	onClose,
	reference
}) => {
	const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(!!isVisible);
	const targetElement: HTMLElement = appendTo?.current || document.body;

	const onRefElementClick = React.useCallback(() => {
		setIsMenuVisible(true);
	}, []);

	React.useEffect(() => {
		const referenceElement = reference;
		if (referenceElement && 'current' in referenceElement && referenceElement.current) {
			referenceElement.current.addEventListener('click', onRefElementClick);
		}
		return () => {
			if (referenceElement && 'current' in referenceElement && referenceElement.current) {
				referenceElement.current.removeEventListener('click', onRefElementClick);
			}
		};
	}, [onRefElementClick, reference]);

	const onCloseClick = React.useCallback(() => {
		setIsMenuVisible(false);
		if (onClose) onClose();
	}, [onClose]);

	return ReactDOM.createPortal(
		<Animation.FadeIn
			bg="neutral.0"
			duration="0.25s"
			height="100%"
			isVisible={isVisible ?? isMenuVisible}
			left={0}
			overflowY="auto"
			position="fixed"
			top={0}
			width="100vw"
			zIndex={999}
		>
			<Box flexDirection="column" height="100%" pt={4} width="100%">
				<IconButton
					aspectSize="l"
					data-testid="userMenuMobileCloseBtn"
					onClick={onCloseClick}
					position="absolute"
					right={3}
					top={4}
				>
					<Icon aspectSize="l" icon="close" styling="outlined" />
				</IconButton>
				{children}
			</Box>
		</Animation.FadeIn>,
		targetElement
	);
};

export default React.memo(UserMenuFullScreen);
