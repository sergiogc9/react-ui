import styled from 'styled-components';
import css from '@styled-system/css';

import Content from 'components/Content';

const StyledTableCellText: React.FC = styled(Content)`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;

	${props => css({ color: props.color ?? props.theme.components.table.colors.content.text })}
`;

StyledTableCellText.defaultProps = {
	aspectSize: 's',
	maxWidth: '100%',
	overflow: 'hidden',
	wordBreak: 'break-word'
};

export default StyledTableCellText;
