import React from 'react';
import { CellContext } from '@tanstack/react-table';

import { FlexProps } from 'components/Flex';
import { TextProps } from 'components/Text';

type Props = React.PropsWithChildren<FlexProps> | TextProps;

export type TableCellDefaultProps = CellContext<any, any> & Props;
