import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import Flex from 'components/Flex';
import Modal from 'components/Modal';
import { ModalProps } from './types';

const closeBtnTestId = 'modalCloseBtn';
const modalTestId = 'Modal';
const modalsId = 'modals';
const overlaysId = 'overlays';
const rootId = 'root';
const headerText = 'Awesome header';
const contentText = 'Awesome content';
const footerText = 'Awesome footer';

const mockOnClose = jest.fn();
const renderModal = (props?: Partial<ModalProps>) =>
	render(
		withTheme(
			<>
				<Flex id={modalsId} />
				<Flex id={overlaysId} />
				<Flex id={rootId}>
					<Modal data-testid={modalTestId} onClose={mockOnClose} {...props}>
						<Modal.Header>{headerText}</Modal.Header>
						<Modal.Content>{contentText}</Modal.Content>
						<Modal.Footer>{footerText}</Modal.Footer>
					</Modal>
				</Flex>
			</>
		)
	);

describe('Modal component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render header element', () => {
		renderModal();
		expect(screen.getByText(headerText)).toBeInTheDocument();
	});

	it('should render content element', () => {
		renderModal();
		expect(screen.getByText(contentText)).toBeInTheDocument();
	});

	it('should render footer element', () => {
		renderModal();
		expect(screen.getByText(footerText)).toBeInTheDocument();
	});

	it('should render correct size', () => {
		renderModal({ aspectSize: 'xl' });

		expect(screen.getByRole('modal')).toHaveStyle(`
      width: 1120px;
    `);
	});

	it('should render correct size with is mobile full screen', () => {
		renderModal({ isMobileFullScreen: true });

		expect(screen.getByRole('modal')).toHaveStyle(`
      max-height: calc(100vh - 32px);
      max-width: calc(100% - 32px);
    `);
	});

	it('should not render modal if isVisible is false', () => {
		renderModal({ isVisible: false });
		expect(screen.queryByText(contentText)).toBeNull();
	});

	it('should render modal as portal by default', () => {
		const { baseElement } = renderModal();
		expect(baseElement.querySelector(`#${modalsId} > div > div`)).toBeInTheDocument();
	});

	it('should render modal not as portal', () => {
		const { baseElement } = renderModal({ withPortal: false });
		expect(baseElement.querySelector(`#${modalsId} > div > div`)).toBeNull();
		expect(baseElement.querySelector(`#${rootId} > div > div`)).toBeInTheDocument();
	});

	it('should render overlay', () => {
		const { baseElement } = renderModal();
		expect(baseElement.querySelector(`#${overlaysId} > div > div`)).toBeInTheDocument();
	});

	it('should not render overlay', () => {
		const { baseElement } = renderModal({ withOverlay: false });
		expect(baseElement.querySelector(`#${overlaysId} > div > div`)).toBeNull();
	});

	it('should hide modal if uncontrolled', () => {
		renderModal();

		const closeBtn = screen.getByTestId(closeBtnTestId);
		expect(screen.queryByText(contentText)).toBeInTheDocument();

		userEvent.click(closeBtn);

		expect(screen.queryByText(contentText)).toBeNull();
	});

	it('should call onClose if button is clicked', () => {
		renderModal();
		const closeBtn = screen.getByTestId(closeBtnTestId);
		userEvent.click(closeBtn);
		expect(mockOnClose).toBeCalledTimes(1);
	});

	it('should not call onClose if button is clicked but not prop is provided', () => {
		renderModal({ onClose: undefined });
		const closeBtn = screen.getByTestId(closeBtnTestId);
		userEvent.click(closeBtn);
		expect(mockOnClose).toBeCalledTimes(0);
	});

	it('should call onClose if click outside is done', () => {
		renderModal();
		userEvent.click(document.body);
		expect(mockOnClose).toBeCalledTimes(1);
	});

	it('should not call onClose if click outside is done but prop is false', () => {
		renderModal({ closeOnOutsideClick: false });
		userEvent.click(document.body);
		expect(mockOnClose).toBeCalledTimes(0);
	});

	it('should call onClose if escape key is pressed', () => {
		renderModal();
		fireEvent.keyDown(document, { key: 'Escape' });
		expect(mockOnClose).toBeCalledTimes(1);
	});

	it('should not call onClose if escape key is pressed but prop is false', () => {
		renderModal({ closeOnEsc: false });
		fireEvent.keyDown(document, { key: 'Escape' });
		expect(mockOnClose).toBeCalledTimes(0);
	});
});
