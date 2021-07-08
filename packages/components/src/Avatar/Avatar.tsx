import React, { useState } from 'react';

import Icon from 'components/Icon';
import StyledAvatar from './styled';
import { AvatarProps } from './types';

const getInitials = (name: string) => {
	const fullName = name.split(' ');
	const nameInitials = fullName[0].charAt(0);
	const surnameInitials = fullName.length > 1 ? fullName[1].charAt(0) : '';
	return nameInitials + surnameInitials;
};

const Avatar: React.FC<AvatarProps> = ({
	aspectSize = 'm',
	children,
	iconType = 'user',
	src,
	variant = 'circle',
	...props
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(false);

	const avatarContent = React.useMemo(() => {
		if (src && !error)
			return (
				<img
					alt={`avatar ${typeof children === 'string' ? children : ''}`}
					onLoad={() => {
						setError(false);
						setIsLoaded(true);
					}}
					onError={() => {
						setError(true);
						setIsLoaded(false);
					}}
					src={src}
					style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
				/>
			);
		if (children) {
			if (typeof children === 'string') return <span>{getInitials(children).toUpperCase()}</span>;

			return children;
		}

		return <Icon styling="outlined" fill="neutral.0" icon={iconType} />;
	}, [src, error, children, isLoaded, iconType]);

	return (
		<StyledAvatar
			aspectSize={aspectSize}
			bg={src && !isLoaded && !error ? 'transparent' : 'neutral.300'}
			iconType={iconType}
			variant={variant}
			{...props}
		>
			{avatarContent}
		</StyledAvatar>
	);
};

export default React.memo(Avatar);
