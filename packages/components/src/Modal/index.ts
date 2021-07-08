import { createNameSpacedComponent } from 'components/private/utils/components';
import ModalClose from './Close';
import { ModalCloseProps } from './Close/types';
import ModalContent from './Content';
import { ModalContentProps } from './Content/types';
import ModalFooter from './Footer';
import { ModalFooterProps } from './Footer/types';
import ModalHeader from './Header';
import { ModalHeaderProps } from './Header/types';
import Modal from './Modal';
import { ModalProps } from './types';

export { ModalProps, ModalCloseProps, ModalContentProps, ModalFooterProps, ModalHeaderProps };
export default createNameSpacedComponent(Modal, {
	Close: ModalClose,
	Content: ModalContent,
	Footer: ModalFooter,
	Header: ModalHeader
});
