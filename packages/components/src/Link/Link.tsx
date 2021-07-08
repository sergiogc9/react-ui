import React from 'react';

import StyledLink from './styled';
import { LinkProps } from './types';

const Link: React.FC<LinkProps> = ({ as = 'a', children, behavior = 'default', ...props }) => {
	return (
		<StyledLink as={as} behavior={behavior} {...props}>
			{children}
		</StyledLink>
	);
};

export default React.memo(Link);
