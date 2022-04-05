import { FlexProps } from 'components/Flex';

type Props = {
	/**
	 * The size of the Modal
	 */
	readonly aspectSize?: 's' | 'm' | 'l' | 'xl';
	/**
	 * Close or not the modal if a click outside of it is detected
	 */
	readonly closeOnOutsideClick?: boolean;
	/**
	 * Close or not the modal if escape key is detected
	 */
	readonly closeOnEsc?: boolean;
	/**
	 * Boolean to enable full screen dimensioning in mobile screen sizes
	 */
	readonly isMobileFullScreen?: boolean;
	/**
	 * Boolean to show or hide the modal in a controlled way from outside. If not present, the modal visibility is controlled by itself.
	 */
	readonly isVisible?: boolean;
	/**
	 * Close handler method fired when the modal is closed. Required if you are controlling the modal visibility from outside.
	 */
	readonly onClose?: () => void;
	/**
	 * Boolean to show an overlay behind the modal. Should only be used with `withPortal` as true.
	 */
	readonly withOverlay?: boolean;
	/**
	 * Boolean to insert the modal using a portal or not. If true, the modal will be inserted inside a div with an id equal to `modals` or into `document.body` if not found.
	 */
	readonly withPortal?: boolean;
};

export type ModalProps = Props & FlexProps;
