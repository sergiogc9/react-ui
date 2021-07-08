import React from 'react';
import { render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Chip from '.';
import { ChipGroupProps } from './types';

const chipGroupTestId = 'chip__group';
const chipLabelText = 'This is a label';
const cjLink = 'https://gironafc.cat';
const leftIconTestId = 'chip__group-icon--left';
const rightIconTestId = 'chip__group-icon--right';

const renderChipGroup = (props: ChipGroupProps) =>
	render(
		withTheme(
			<Chip
				aspectSize={props.aspectSize}
				bg={props.bg}
				data-testid={chipGroupTestId}
				href={props.href}
				variant={props.variant}
			>
				<Chip.Icon data-testid={leftIconTestId} icon="star" location="left" styling="filled" />
				<Chip.Label>{chipLabelText}</Chip.Label>
				<Chip.Icon data-testid={rightIconTestId} icon="star" location="right" styling="filled" />
			</Chip>
		)
	);

describe('Chip Icon component', () => {
	it('should render the group correctly with blue variant', () => {
		renderChipGroup({
			variant: 'blue',
			aspectSize: 's'
		});

		expect(screen.getByTestId(chipGroupTestId)).toHaveStyle(
			`height: 24px; border: 1px solid; border-color: ${theme.colors.primary['100']};`
		);

		expect(screen.getByTestId(leftIconTestId)).toHaveStyle(`fill: ${theme.colors.primary['800']}`);

		expect(screen.getByTestId(rightIconTestId)).toHaveStyle(`fill: ${theme.colors.primary['800']}`);
	});

	it('should render the group correctly with white variant', () => {
		renderChipGroup({
			variant: 'white',
			aspectSize: 'm'
		});

		expect(screen.getByTestId(chipGroupTestId)).toHaveStyle(
			`height: 32px; border: 1px solid; border-color: ${theme.colors.neutral['300']};`
		);

		expect(screen.getByTestId(leftIconTestId)).toHaveStyle(`fill: ${theme.colors.neutral['800']}`);

		expect(screen.getByTestId(rightIconTestId)).toHaveStyle(`fill: ${theme.colors.neutral['800']}`);
	});
	it('should render a custom bg if prop bg is added to ChipGroup', () => {
		renderChipGroup({
			variant: 'white',
			aspectSize: 'm',
			bg: theme.colors.neutral['200']
		});

		expect(screen.getByTestId(chipGroupTestId)).toHaveStyle(`background-color: ${theme.colors.neutral['200']}`);
	});

	it('is a link when it has href on it', () => {
		renderChipGroup({
			variant: 'white',
			aspectSize: 'm',
			href: cjLink
		});

		expect(screen.getByTestId(chipGroupTestId)).toHaveAttribute('href', cjLink);
	});
});
