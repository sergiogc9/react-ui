import styled from 'styled-components';

import Content from 'components/Content';

const StyledTableCellText: React.FC = styled(Content)`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`;

StyledTableCellText.defaultProps = {
	aspectSize: 's',
	color: 'neutral.900',
	maxWidth: '100%',
	overflow: 'hidden',
	wordBreak: 'break-word'
};

export default StyledTableCellText;
