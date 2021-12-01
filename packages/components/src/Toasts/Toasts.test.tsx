import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import Button from 'components/Button/Button';
import { useAnimationsInTests, withTheme } from 'components/private/utils/tests';

import Toasts, { useToasts } from '.';
import { ToastsProps } from './types';
import { ToastOptions } from './Toast/types';

const toastText = 'Nice text';

const FakeComponent = ({ toastOptions }: { toastOptions: Partial<ToastOptions> }) => {
	const { addToast, closeToast } = useToasts();

	React.useEffect(() => {
		addToast(toastOptions as ToastOptions);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Button onClick={() => addToast({ key: '222', message: 'Added toast' })}>Add toast</Button>
			<Button onClick={() => closeToast('222')}>Remove toast</Button>
		</>
	);
};

const renderToasts = (props: Partial<ToastsProps> = {}, toastOptions: Partial<ToastOptions> = {}) =>
	render(
		withTheme(
			<Toasts {...props}>
				<FakeComponent toastOptions={{ key: '111', message: toastText, ...toastOptions }} />
			</Toasts>
		)
	);

jest.useFakeTimers();

describe('Toasts', () => {
	afterEach(cleanup);

	beforeAll(() => {
		useAnimationsInTests();
	});

	it('should render the toast wrapper and toast', () => {
		renderToasts();

		expect(screen.getByTestId('toasts')).toBeInTheDocument();
		expect(screen.getByTestId('toast')).toBeInTheDocument();
	});

	it('should render the toasts container in another placement', () => {
		renderToasts({ placement: 'top' });

		expect(screen.getByTestId('toasts')).toHaveStyle(`
      align-items: center;
      flex-direction: column;
      left: 50%;
      top: 0;
      transform: translate(-50%,0)
    `);
	});

	it('should hide the toast after timeout', async () => {
		renderToasts();

		const toast = screen.queryByTestId('toast')!;

		expect(toast).toBeInTheDocument();

		await waitFor(() => {
			jest.runAllTimers();
			fireEvent.animationEnd(toast);
			expect(screen.queryByTestId('toast')).toBeNull();
		});
	});

	it('should not hide the toast if duration is always', async () => {
		renderToasts({}, { duration: 'always' });

		const toast = screen.queryByTestId('toast')!;

		expect(toast).toBeInTheDocument();

		await waitFor(() => {
			jest.runAllTimers();
			fireEvent.animationEnd(toast);
		});

		expect(screen.getByTestId('toast')).toBeInTheDocument();
	});

	it('should add toast using the addToast hook', () => {
		renderToasts();

		userEvent.click(screen.getByText('Add toast'));

		expect(screen.getByText('Added toast')).toBeInTheDocument();
		expect(screen.getAllByTestId('toast')).toHaveLength(2);
	});

	it('should update existing toast using the addToast hook', () => {
		renderToasts();

		userEvent.click(screen.getByText('Add toast'));
		userEvent.click(screen.getByText('Add toast'));

		expect(screen.getByText('Added toast')).toBeInTheDocument();
		expect(screen.getAllByTestId('toast')).toHaveLength(2);
	});

	it('should remove existing toast using the closeToast hook', async () => {
		renderToasts();

		userEvent.click(screen.getByText('Add toast'));

		expect(screen.getByText('Added toast')).toBeInTheDocument();
		expect(screen.getAllByTestId('toast')).toHaveLength(2);

		userEvent.click(screen.getByText('Remove toast'));

		await waitFor(() => {
			jest.runAllTimers();
			fireEvent.animationEnd(screen.getAllByTestId('toast')[1]);
		});

		expect(screen.queryByText('Added toast')).toBeNull();
		expect(screen.getAllByTestId('toast')).toHaveLength(1);
	});

	it('should show close icon button', () => {
		renderToasts({}, { hasCloseBtn: true });

		expect(screen.getByTestId('toast').querySelector('button')).toBeInTheDocument();
	});

	it('should show render action content', () => {
		renderToasts({}, { actionContent: <button type="button">Test</button> });

		expect(screen.getByTestId('toast').querySelector('button')).toBeInTheDocument();
	});

	it('should show icon by default', () => {
		renderToasts();

		expect(screen.getByTestId('alertIcon')).toBeInTheDocument();
	});

	it('should hide icon', () => {
		renderToasts({}, { hasIcon: false });

		expect(screen.queryByTestId('alertIcon')).toBeNull();
	});

	it('should render different status toast', () => {
		renderToasts({}, { status: 'success' });

		expect(screen.getByTestId('alert')).toHaveStyle(`
      background-color: ${theme.colors.green[100]}
    `);
	});

	it('should render correct animation for bottom placement', () => {
		renderToasts({ placement: 'bottom' });

		expect(screen.getByTestId('toast')).toBeVisible();
	});

	it('should render correct animation for bottom-right placement', () => {
		renderToasts({ placement: 'bottom-right' });

		expect(screen.getByTestId('toast')).toBeVisible();
	});

	it('should render correct animation for top placement', () => {
		renderToasts({ placement: 'top' });

		expect(screen.getByTestId('toast')).toBeVisible();
	});

	it('should call on close handler when toast exits', async () => {
		const mockOnClose = jest.fn();
		renderToasts({}, { onClose: mockOnClose });

		await waitFor(() => {
			jest.runAllTimers();
			fireEvent.animationEnd(screen.getByTestId('toast'));
		});

		expect(mockOnClose).toHaveBeenCalled();
	});
});
