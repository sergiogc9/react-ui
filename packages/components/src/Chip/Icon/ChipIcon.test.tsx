import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';

import Chip from '..';

const mockOnClick = jest.fn();

const leftIconTestId = 'chip-icon--left';
const rightIconTestId = 'chip-icon--right';
const customFillIconTestId = 'chip-icon--custom';

const renderChip = () =>
	render(
		withTheme(
			<Chip href="https://fake.com" variant="blue" aspectSize="s">
				<Chip.Icon data-testid={leftIconTestId} icon="star" styling="filled" />
				<Chip.Icon data-testid={customFillIconTestId} fill="neutral.0" icon="star" styling="filled" />
				<Chip.Icon data-testid={rightIconTestId} icon="star" onClick={() => mockOnClick()} styling="filled" />
			</Chip>
		)
	);

describe('Chip Icon component', () => {
	afterEach(cleanup);
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render the icons correctly', () => {
		renderChip();

		expect(screen.getByTestId(leftIconTestId)).toBeInTheDocument();
		expect(screen.getByTestId(leftIconTestId)).toHaveStyle(`fill: ${theme.colors.blue['900']}`);

		expect(screen.getByTestId(rightIconTestId)).toBeInTheDocument();
		expect(screen.getByTestId(rightIconTestId)).toHaveStyle(`fill: ${theme.colors.blue['900']}`);

		expect(screen.getByTestId(customFillIconTestId)).toBeInTheDocument();
		expect(screen.getByTestId(customFillIconTestId)).toHaveStyle(`fill: ${theme.colors.neutral['0']}`);

		expect(screen.getByTestId(customFillIconTestId)).toBeInTheDocument();
		expect(screen.getByTestId(customFillIconTestId)).toHaveStyle(`fill: ${theme.colors.neutral['0']}`);
	});

	it('should call the handler if an onClick is present on the icon component', () => {
		renderChip();

		fireEvent.click(screen.getByTestId(rightIconTestId));

		expect(mockOnClick).toHaveBeenCalled();
	});
});
