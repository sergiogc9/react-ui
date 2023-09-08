import React from 'react';
import { Decorator } from '@storybook/react';

import { Flex } from '@sergiogc9/react-ui';

const AlertDecorator: Decorator = story => {
	return <Flex width={500}>{story()}</Flex>;
};

export default AlertDecorator;
