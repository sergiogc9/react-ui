import React from 'react';
import { CellProps } from 'react-table';

import { FlexProps } from 'components/Flex';
import { TextProps } from 'components/Text';

type Props = React.PropsWithChildren<FlexProps> | TextProps;

export type TableCellDefaultProps = CellProps<any> & Props;
