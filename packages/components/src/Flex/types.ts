import React from 'react';

import Box, { BoxProps } from 'components/Box';

type FlexProps<T extends React.ElementType = 'div'> = BoxProps<T>;

type FlexComponent = typeof Box;

export { FlexComponent, FlexProps };
