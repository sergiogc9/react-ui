import React from 'react';
import ReactDOM from 'react-dom';
import { useClickOutside, useKeyPressed, usePortal } from '@sergiogc9/react-hooks';

import Overlay from 'components/Overlay';

import ModalContext, { ModalContextData } from './Context';
import StyledModal, { StyledModalWrapper } from './styled';
import { ModalComponent } from './types';

const Modal: ModalComponent = ({
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

	const portalWrapperRef = usePortal('modals');
	const modalWrapperRef = React.useRef();

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

	useClickOutside(modalWrapperRef, onClickOutside);
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
			<StyledModalWrapper isVisible={isModalVisible}>
				<StyledModal
					aria-modal="true"
					aspectSize={aspectSize}
					duration="0.3s"
					isMobileFullScreen={isMobileFullScreen}
					isVisible={isModalVisible}
					ref={modalWrapperRef}
					role="modal"
					{...rest}
				>
					{children}
				</StyledModal>
			</StyledModalWrapper>
		</ModalContext.Provider>
	);

	return withPortal ? ReactDOM.createPortal(content, portalWrapperRef.current) : content;
};

export default React.memo(Modal);
