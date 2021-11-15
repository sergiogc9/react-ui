import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'collections/private/utils/tests';

import { DialogProps } from './types';
import Dialog from '.';

const cancelBtnText = 'Cancel';
const confirmBtnText = 'Confirm';
const dialogTestId = 'Dialog';
const text = 'Awesome text';
const title = 'Awesome title';

const mockOnCancel = jest.fn();
const mockOnConfirm = jest.fn();

const renderComponent = (props: Partial<DialogProps> = {}) =>
	render(
		withTheme(
			<Dialog
				cancelText={cancelBtnText}
				confirmText={confirmBtnText}
				content={text}
				data-testid={dialogTestId}
				isVisible
				onCancel={mockOnCancel}
				onConfirm={mockOnConfirm}
				titleText={title}
				{...props}
			/>
		)
	);

describe('Dialog', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render the dialog', () => {
		renderComponent();

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render custom content instead of text', () => {
		renderComponent({ content: <div>Custom content</div> });

		expect(screen.getByText('Custom content')).toBeInTheDocument();
	});

	it('should render both buttons', () => {
		renderComponent();

		expect(screen.getByText(cancelBtnText)).toBeInTheDocument();
		expect(screen.getByText(confirmBtnText)).toBeInTheDocument();
	});

	it('should not render cancel btn', () => {
		renderComponent({ cancelText: undefined });

		expect(screen.queryByText(cancelBtnText)).toBeNull();
	});

	it('should not render confirm btn', () => {
		renderComponent({ confirmText: undefined });

		expect(screen.queryByText(confirmBtnText)).toBeNull();
	});

	it('should cancel the dialog', () => {
		renderComponent();

		userEvent.click(screen.getByText(cancelBtnText));

		expect(mockOnCancel).toHaveBeenCalled();
	});

	it('should cancel the dialog by clicking close btn', () => {
		renderComponent();

		userEvent.click(screen.getByTestId('modalCloseBtn'));

		expect(mockOnCancel).toHaveBeenCalled();
	});

	it('should confirm the dialog', () => {
		renderComponent();

		userEvent.click(screen.getByText(confirmBtnText));

		expect(mockOnConfirm).toHaveBeenCalled();
	});

	it('should use custom cancel btn variant', () => {
		renderComponent({ cancelBtnVariant: 'danger' });

		expect(screen.getByText(cancelBtnText).closest('button')).toHaveStyle(`
      background-color: ${theme.colors.red[500]}FF;
    `);
	});

	it('should use custom confirm btn variant', () => {
		renderComponent({ confirmBtnVariant: 'danger' });

		expect(screen.getByText(confirmBtnText).closest('button')).toHaveStyle(`
      background-color: ${theme.colors.red[500]}FF;
    `);
	});
});
