import React from 'react';

import StyledLink from './styled';
import { LinkComponent } from './types';

const Link: LinkComponent = ({ as = 'a', children, behavior = 'default', ...props }) => {
	return (
		<StyledLink as={as as any} behavior={behavior} {...props}>
			{children}
		</StyledLink>
	);
};

export default Link;
