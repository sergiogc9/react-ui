import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';

import FloatingButton from '.';
import { FloatingButtonProps } from './types';

const floatingButtonTestId = 'FloatingButton';
const btnText = 'Awesome btn!';

const mockOnClick = jest.fn();
const renderFloatingButton = (
	props?: Partial<FloatingButtonProps>,
	children: React.ReactNode | React.ReactNode[] = btnText
) =>
	render(
		withTheme(
			<FloatingButton data-testid={floatingButtonTestId} onClick={mockOnClick} {...props}>
				{children}
			</FloatingButton>
		)
	);

describe('FloatingButton component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render with span text', () => {
		renderFloatingButton();

		expect(screen.getByTestId(floatingButtonTestId)).toBeInTheDocument();
		expect(screen.getByText(btnText)).toBeInTheDocument();
	});

	it('should render icon and text', () => {
		renderFloatingButton({}, [
			<FloatingButton.Icon key={1} styling="filled" icon="add" />,
			<FloatingButton.Text key={2}>{btnText}</FloatingButton.Text>
		]);

		const button = screen.getByTestId(floatingButtonTestId);

		expect(screen.getByText(btnText)).toBeInTheDocument();
		expect(button.querySelector('svg')).toBeInTheDocument();
	});

	it('should render with custom children', () => {
		const divText = 'Awesome';
		renderFloatingButton({}, <div>{divText}</div>);

		expect(screen.getByText(divText)).toBeInTheDocument();
	});

	it('should render correct size', () => {
		renderFloatingButton({ aspectSize: 's' });

		expect(screen.getByTestId(floatingButtonTestId)).toHaveStyle(
			`height: ${theme.components.floatingButton.heights.s}px;`
		);
	});

	it('should render custom css props', () => {
		renderFloatingButton({
			bg: 'lightblue',
			borderColor: 'purple',
			borderRadius: '100px',
			color: 'lightgray',
			height: '200px',
			padding: '50px',
			type: 'submit',
			width: '100px'
		});

		expect(screen.getByTestId(floatingButtonTestId)).toHaveAttribute('type', 'submit');
		expect(screen.getByTestId(floatingButtonTestId)).toHaveStyle(`
      background-color: lightblue;
      border-color: purple;
      border-radius: 100px;
      color: lightgray;
      height: 200px;
      padding: 50px;
      width: 100px;
    `);
	});

	it('should render loader if loading', () => {
		renderFloatingButton({ isLoading: true });

		const button = screen.getByTestId(floatingButtonTestId);
		expect(button.querySelector('span:nth-child(1)')).toBeInTheDocument();
		expect(button.querySelector('span:nth-child(2)')).toBeInTheDocument();
		expect(button.querySelector('span:nth-child(3)')).toBeInTheDocument();
	});

	it('should render as disabled if disabled', () => {
		renderFloatingButton({ isDisabled: true });

		const button = screen.getByTestId(floatingButtonTestId);
		expect(button).toHaveAttribute('disabled');
		expect(button).toHaveStyle('cursor: not-allowed;');
	});

	it('should call onClick handler', () => {
		renderFloatingButton();

		const button = screen.getByTestId(floatingButtonTestId);
		userEvent.click(button);

		expect(mockOnClick).toHaveBeenCalled();
	});

	it('should not call onClick handler if disabled', () => {
		renderFloatingButton({ isDisabled: true });

		const button = screen.getByTestId(floatingButtonTestId);
		userEvent.click(button);

		expect(mockOnClick).not.toHaveBeenCalled();
	});

	it('should not call onClick handler if loading', () => {
		renderFloatingButton({ isLoading: true });

		const button = screen.getByTestId(floatingButtonTestId);
		userEvent.click(button);

		expect(mockOnClick).not.toHaveBeenCalled();
	});
});
