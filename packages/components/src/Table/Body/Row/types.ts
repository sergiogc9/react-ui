import { CssFunctionReturnType } from '@styled-system/css';
import { FlattenSimpleInterpolation } from 'styled-components';

import { FlexProps } from 'components/Flex';

import { TableContentProps } from '../../Content';

export interface TableBodyRowProps extends FlexProps<'div'>, Pick<TableContentProps, 'showAllBorders'> {
	css?: CssFunctionReturnType | FlattenSimpleInterpolation;
}
