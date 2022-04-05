import React from 'react';

import Flex, { FlexProps } from 'components/Flex';

const Badge: React.FC<FlexProps> = props => {
	return <Flex {...props} />;
};

export default React.memo(Badge);
