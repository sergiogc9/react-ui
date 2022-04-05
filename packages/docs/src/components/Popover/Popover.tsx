import React from 'react';
import { Flex, Popover } from '@sergiogc9/react-ui';

export const PopoverWithoutProvider = (args: any) => {
	const ref = React.useRef(null);

	return (
		<Flex>
			<Flex
				ref={ref}
				alignItems="center"
				bg="primary.500"
				color="neutral.0"
				justifyContent="center"
				width="100px"
				height="50px"
			>
				Hover me
			</Flex>
			<Popover.Content reference={ref} {...args}>
				I am not using the provider!
			</Popover.Content>
		</Flex>
	);
};
