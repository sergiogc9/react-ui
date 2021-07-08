import React from 'react';

import Box, { BoxProps } from 'components/Box';

const Badge: React.FC<BoxProps> = props => {
	return <Box {...props} />;
};

export default React.memo(Badge);
