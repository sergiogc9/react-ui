import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Flex } from '@sergiogc9/react-ui';

const AlertDecorator: DecoratorFn = story => {
	return <Flex width={500}>{story()}</Flex>;
};

export default AlertDecorator;
