import React from 'react';
import { fireEvent, cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Avatar from 'components/Avatar';
import { AvatarProps } from './types';

const avatarTestId = 'Avatar';
const avatarTestChildren = 'Sergio Gómez';
const avatarTestChildrenOneInitial = 'Sergio';

const renderAvatar = (props?: Partial<AvatarProps>) =>
	render(withTheme(<Avatar data-testid={avatarTestId} {...props} />));

describe('Avatar component', () => {
	afterEach(cleanup);
	it('should render an avatar with external photo', () => {
		renderAvatar({ src: 'correct-url' });

		const avatar = screen.getByTestId(avatarTestId);
		fireEvent.load(avatar.querySelector(`img`)!);

		expect(avatar.querySelector(`img`)).toBeInTheDocument();
	});

	it('should render avatar with two initials', () => {
		renderAvatar({ children: avatarTestChildren });

		expect(screen.getByText('SG')).toBeInTheDocument();
	});

	it('should render avatar with one initial', () => {
		renderAvatar({ children: avatarTestChildrenOneInitial });

		expect(screen.getByText('S')).toBeInTheDocument();
	});

	it('should render avatar with svg icon', () => {
		renderAvatar();

		const avatar = screen.getByTestId(avatarTestId);

		expect(avatar.querySelector(`svg`)).toBeInTheDocument();
	});

	it('should render business avatar with svg icon', () => {
		renderAvatar({ iconType: 'business' });

		const avatar = screen.getByTestId(avatarTestId);

		expect(avatar.querySelector(`svg`)).toBeInTheDocument();
	});

	it('should show the initials if the url image fails to load', () => {
		renderAvatar({ src: 'wrong-url', children: avatarTestChildren });

		const avatar = screen.getByTestId(avatarTestId);
		fireEvent.error(avatar.querySelector(`img`)!);

		expect(screen.getByText('SG')).toBeInTheDocument();
	});

	it('should show the icon if the url image fails to load', () => {
		renderAvatar({ src: 'wrong-url' });

		const avatar = screen.getByTestId(avatarTestId);
		fireEvent.error(avatar.querySelector(`img`)!);

		expect(avatar.querySelector('svg')).toBeInTheDocument();
	});

	it('should render an avatar with correct size', () => {
		renderAvatar({ aspectSize: 's' });

		const avatar = screen.getByTestId(avatarTestId);

		expect(avatar).toHaveStyle(`width: ${theme.components.avatar.sizes.s}px`);
	});

	it('should render an avatar with variant', () => {
		renderAvatar({ variant: 'rounded' });

		const avatar = screen.getByTestId(avatarTestId);

		expect(avatar).toHaveStyle(`border-radius: ${theme.components.avatar.radii.rounded}`);
	});

	it('should render a not string children', () => {
		renderAvatar({ children: <div>NOT STRING</div> });

		expect(screen.getByText('NOT STRING')).toBeInTheDocument();
	});

	it('should render skeleton if fetching url', () => {
		renderAvatar({ isFetchingSource: true });

		expect(screen.getByTestId('skeleton')).toBeInTheDocument();
	});
});
