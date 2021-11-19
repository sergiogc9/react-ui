import styled from 'styled-components';

import Content from 'components/Content';

import { ChipLabelProps } from './types';
import aspectSize from './variants/aspectSize';

const StyledContent: React.FC<ChipLabelProps> = styled(Content)<ChipLabelProps>`
	${aspectSize}

	text-overflow:ellipsis
`;

StyledContent.defaultProps = {
	aspectSize: 's',
	fontSize: 0,
	fontWeight: 'semibold',
	as: 'span',
	minWidth: '0',
	whiteSpace: 'nowrap',
	overflow: 'hidden'
};

export default StyledContent;
