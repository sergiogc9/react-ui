import React, { ReactNode } from 'react';
import theme from '@sergiogc9/react-ui-theme';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';
import { BadgeStatusProps } from './Status/types';
import Badge from './index';

const avatarTestId = 'avatarTestId';
const badgeTestId = 'badgeTestId';
const counterTestId = 'counterTestId';
const statusTestId = 'statusTestId';

const AvatarBadge: React.FC<BadgeStatusProps> = ({ variant, location }: BadgeStatusProps) => (
	<>
		<Avatar data-testid={avatarTestId} aspectSize="s">
			John Doe
		</Avatar>
		<Badge.Status data-testid={statusTestId} variant={variant} location={location} />
	</>
);

const CounterBadge: React.FC<BadgeStatusProps> = ({ variant, location }: BadgeStatusProps) => (
	<>
		<Icon icon="mail" styling="outlined" />
		<Badge.Counter data-testid={counterTestId} variant={variant} location={location} numberOfItems={100} />
	</>
);

const renderCounter = (props: { children: ReactNode }) =>
	render(withTheme(<Badge data-testid={badgeTestId}>{props.children}</Badge>));

describe('Badge component', () => {
	afterEach(cleanup);

	it('should render the Badge component with Avatar and status', () => {
		renderCounter({
			children: <AvatarBadge variant="green" location="top-left" />
		});
		const avatar = screen.getByTestId(avatarTestId);
		const badge = screen.getByTestId(badgeTestId);
		const status = screen.getByTestId(avatarTestId);
		expect(avatar).toBeInTheDocument();
		expect(badge).toBeInTheDocument();
		expect(status).toBeInTheDocument();
	});

	it.each<[string]>([['Counter'], ['Status']])(
		'should render the Badge %s component with position top-left and variant red',
		kind => {
			const isCounter = kind === 'Counter';
			renderCounter({
				children: isCounter ? (
					<CounterBadge variant="red" location="top-left" />
				) : (
					<AvatarBadge variant="red" location="top-left" />
				)
			});
			const status = screen.getByTestId(isCounter ? counterTestId : statusTestId);
			expect(status).toHaveStyle(`top: 0; left: 0; background-color: ${theme.colors.red['500']};`);
		}
	);

	it.each<[string]>([['Counter'], ['Status']])(
		'should render the Badge %s component with position top-right and variant blue',
		kind => {
			const isCounter = kind === 'Counter';
			renderCounter({
				children: isCounter ? (
					<CounterBadge variant="blue" location="top-right" />
				) : (
					<AvatarBadge variant="blue" location="top-right" />
				)
			});
			const status = screen.getByTestId(isCounter ? counterTestId : statusTestId);
			expect(status).toHaveStyle(`top: 0; right: 0; background-color: ${theme.colors.blue['500']};`);
		}
	);

	it.each<[string]>([['Counter'], ['Status']])(
		'should render the %s Status component with position bottom-right and variant yellow',
		kind => {
			const isCounter = kind === 'Counter';
			renderCounter({
				children: isCounter ? (
					<CounterBadge variant="yellow" location="bottom-right" />
				) : (
					<AvatarBadge variant="yellow" location="bottom-right" />
				)
			});
			const status = screen.getByTestId(isCounter ? counterTestId : statusTestId);

			expect(status).toHaveStyle(`bottom: 0; right: 0; background-color: ${theme.colors.yellow['500']};`);
		}
	);

	it.each<[string]>([['Counter'], ['Status']])(
		'should render the %s Status component with position bottom-left and variant green',
		kind => {
			const isCounter = kind === 'Counter';
			renderCounter({
				children: isCounter ? (
					<CounterBadge variant="green" location="bottom-left" />
				) : (
					<AvatarBadge variant="green" location="bottom-left" />
				)
			});
			const status = screen.getByTestId(isCounter ? counterTestId : statusTestId);

			expect(status).toHaveStyle(`bottom: 0; left: 0; background-color: ${theme.colors.green['500']};`);
		}
	);
});
