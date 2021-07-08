import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Chip from '..';

const mockOnClick = jest.fn();

const leftIconTestId = 'chip__group-icon--left';
const rightIconTestId = 'chip__group-icon--right';

const renderChipGroup = () =>
	render(
		withTheme(
			<Chip href="https://gironafc.cat" variant="blue" aspectSize="s">
				<Chip.Icon data-testid={leftIconTestId} icon="star" location="left" styling="filled" />
				<Chip.Icon
					data-testid={rightIconTestId}
					icon="star"
					location="right"
					onClick={() => mockOnClick()}
					styling="filled"
				/>
			</Chip>
		)
	);

describe('Chip Icon component', () => {
	afterEach(cleanup);
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render the icons correctly', () => {
		renderChipGroup();
		expect(screen.getByTestId(leftIconTestId)).toBeInTheDocument();
		expect(screen.getByTestId(leftIconTestId)).toHaveStyle(`fill: ${theme.colors.primary['800']}`);
		expect(screen.getByTestId(rightIconTestId)).toBeInTheDocument();
		expect(screen.getByTestId(rightIconTestId)).toHaveStyle(`fill: ${theme.colors.primary['800']}`);
	});

	it('should call the handler if an onClick is present on the icon component', () => {
		renderChipGroup();
		fireEvent.click(screen.getByTestId(rightIconTestId));
		expect(mockOnClick).toHaveBeenCalled();
	});
});
