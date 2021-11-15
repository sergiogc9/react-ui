import React from 'react';
import { ButtonProps, ModalProps } from '@sergiogc9/react-ui';

type Props = {
	/**
	 * The cancel button text. If not provided, the button is not shown.
	 */
	readonly cancelText?: string;

	/**
	 * The cancel button variant
	 */
	readonly cancelBtnVariant?: ButtonProps['variant'];

	/**
	 * The confirm text. If not provided, the button is not shown.
	 */
	readonly confirmText?: string;

	/**
	 * The confirm button variant
	 */
	readonly confirmBtnVariant?: ButtonProps['variant'];

	/**
	 * The modal content. Use a string to pass a simple text or use a Trans component to perform complex translations from i18n. You can provide a custom Element if wanted.
	 */
	readonly content: React.ReactNode;

	/**
	 * Handler called when confirm button is clicked.
	 */
	readonly onCancel: () => void;

	/**
	 * Handler called when confirm button is clicked.
	 */
	readonly onConfirm: () => void;

	/**
	 * The title text.
	 */
	readonly titleText: string;
};

export type DialogProps = Props & Omit<ModalProps, 'onClose'>;
