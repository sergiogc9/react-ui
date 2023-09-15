import styled from 'styled-components';
import css from '@styled-system/css';

import Flex from 'components/Flex';

import { TableHeaderGroupProps } from './types';

const StyledTableHeaderGroup = styled(Flex)<TableHeaderGroupProps>`
	${props =>
		css({
			bg: props.theme.components.table.colors.header.bg,
			borderColor: props.theme.components.table.colors.header.border
		})}
`;

StyledTableHeaderGroup.defaultProps = {
	alignItems: 'stretch',
	borderRadius: 1,
	borderStyle: 'solid',
	borderWidth: '1px',
	minHeight: 48,
	overflow: 'hidden',
	width: '100%'
};

export default StyledTableHeaderGroup;
