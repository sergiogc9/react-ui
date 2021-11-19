import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';

import Chip from '.';
import { ChipProps } from './types';

const chipTestId = 'chip';
const chipLabelText = 'This is a label';
const link = 'https://fake.com';
const leftIconTestId = 'chip-icon--left';
const rightIconTestId = 'chip-icon--right';
const chipOverlayTestId = 'chip-overlay';

const mockOnIconClick = jest.fn();

const renderChip = (props: ChipProps, isIconClickable?: boolean) =>
	render(
		withTheme(
			<Chip data-testid={chipTestId} {...props}>
				<Chip.Icon data-testid={leftIconTestId} icon="star" styling="filled" />
				<Chip.Label>{chipLabelText}</Chip.Label>
				<Chip.Icon
					data-testid={rightIconTestId}
					icon="star"
					onClick={isIconClickable ? mockOnIconClick : undefined}
					styling="filled"
				/>
			</Chip>
		)
	);

describe('Chip Icon component', () => {
	it('should render the chip correctly with blue variant', () => {
		renderChip({
			variant: 'blue',
			aspectSize: 's'
		});

		expect(screen.getByTestId(chipTestId)).toHaveStyle(
			`height: 24px; box-shadow: 0 0 0 1px ${theme.colors.blue['100']} inset;`
		);

		expect(screen.getByTestId(leftIconTestId)).toHaveStyle(`fill: ${theme.colors.blue['900']}`);

		expect(screen.getByTestId(rightIconTestId)).toHaveStyle(`fill: ${theme.colors.blue['900']}`);
	});

	it('should render the chip correctly with white variant', () => {
		renderChip({
			variant: 'white',
			aspectSize: 'm'
		});

		expect(screen.getByTestId(chipTestId)).toHaveStyle(
			`height: 32px; box-shadow: 0 0 0 1px ${theme.colors.neutral['300']} inset;`
		);

		expect(screen.getByTestId(leftIconTestId)).toHaveStyle(`fill: ${theme.colors.neutral['800']}`);

		expect(screen.getByTestId(rightIconTestId)).toHaveStyle(`fill: ${theme.colors.neutral['800']}`);
	});

	it('should render a custom bg if prop bg is added to Chip', () => {
		renderChip({
			variant: 'white',
			aspectSize: 'm',
			bg: theme.colors.neutral['200']
		});

		expect(screen.getByTestId(chipTestId)).toHaveStyle(`background-color: ${theme.colors.neutral['200']}`);
	});

	it('is a link when it has href on it', () => {
		renderChip({
			variant: 'white',
			aspectSize: 'm',
			href: link
		});

		expect(screen.getByTestId(chipTestId)).toHaveAttribute('href', link);
	});

	it('should render the chip correctly with a clickable right icon', () => {
		renderChip({}, true);

		userEvent.click(screen.getByTestId(rightIconTestId));

		expect(mockOnIconClick).toHaveBeenCalled();

		const iconContainer = screen.getByTestId(rightIconTestId).parentElement?.parentElement;

		expect(iconContainer).toHaveClass('clickable');
		expect(iconContainer).toHaveStyle(`margin-right:-4px;padding-right:3px`);
	});

	it('should render the chip correctly with a non clickable right icon', () => {
		renderChip({});

		const iconContainer = screen.getByTestId(rightIconTestId).parentElement;

		expect(iconContainer).not.toHaveClass('clickable');
		expect(iconContainer).not.toHaveStyle(`margin-right:-4px;padding-right:3px`);
	});

	it("should render a chip's overlay when its content is not empty", () => {
		renderChip({ overlayContent: 'Edit me' });

		expect(screen.getByTestId(chipOverlayTestId)).toBeInTheDocument();
		expect(screen.getByTestId(chipOverlayTestId).firstChild?.nodeName).toBe('SPAN');
		expect(screen.getByTestId(chipOverlayTestId)).toHaveStyle('transform:translateX(-101%)');
	});

	it("should render a chip's overlay fixed", () => {
		renderChip({ isOverlayAlwaysVisible: true, overlayContent: 'Edit me' });

		expect(screen.getByTestId(chipOverlayTestId)).toBeInTheDocument();
		expect(screen.getByTestId(chipOverlayTestId)).toHaveStyle('transform:translateX(0%)');
	});
});
