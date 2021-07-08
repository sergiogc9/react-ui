import React from 'react';
import ReactDOM from 'react-dom';
import usePortal from 'components/private/utils/hooks/usePortal';
import useClickOutside from 'components/private/utils/hooks/useClickOutside';
import useKeyPressed from 'components/private/utils/hooks/useKeyPressed';
import Overlay from 'components/Overlay';

import ModalContext from './Context';
import StyledModal from './styled';
import { ModalProps } from './types';
import { ModalContextData } from './Context/types';

const Modal: React.FC<ModalProps> = ({
	aspectSize = 'm',
	children,
	closeOnOutsideClick = true,
	closeOnEsc = true,
	isMobileFullScreen = false,
	isVisible,
	onClose,
	withOverlay = true,
	withPortal = true,
	...rest
}) => {
	const [uncontrolledIsModalVisible, setIsModalVisible] = React.useState(true);
	const wrapperRef = usePortal('modals');

	const onModalClosed = React.useCallback(() => {
		setIsModalVisible(false);
		if (onClose) onClose();
	}, [onClose]);

	const onClickOutside = React.useCallback(() => {
		if (closeOnOutsideClick) onModalClosed();
	}, [closeOnOutsideClick, onModalClosed]);

	const onEscKeyPressed = React.useCallback(() => {
		if (closeOnEsc) onModalClosed();
	}, [closeOnEsc, onModalClosed]);

	useClickOutside(wrapperRef, onClickOutside);
	useKeyPressed('Escape', onEscKeyPressed);

	const contextData = React.useMemo<ModalContextData>(
		() => ({
			onCloseModal: onModalClosed
		}),
		[onModalClosed]
	);

	// This is needed because the Modal visibility can be controlled or not from outside
	const isModalVisible = isVisible !== undefined ? isVisible : uncontrolledIsModalVisible;

	const content = (
		<ModalContext.Provider value={contextData}>
			{withOverlay && <Overlay blur={2} isVisible={isModalVisible} />}
			<StyledModal
				aria-modal="true"
				aspectSize={aspectSize}
				duration="0.3s"
				isMobileFullScreen={isMobileFullScreen}
				isVisible={isModalVisible}
				// eslint-disable-next-line jsx-a11y/aria-role
				role="modal"
				{...rest}
			>
				{children}
			</StyledModal>
		</ModalContext.Provider>
	);

	return withPortal ? ReactDOM.createPortal(content, wrapperRef.current) : content;
};

export default React.memo(Modal);
