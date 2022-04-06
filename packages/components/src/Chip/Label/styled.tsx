import styled from 'styled-components';

import Text from 'components/Text';

import { ChipLabelProps } from './types';
import aspectSize from './variants/aspectSize';

const StyledChipLabelText: React.FC<ChipLabelProps> = styled(Text)<ChipLabelProps>`
	${aspectSize}

	text-overflow:ellipsis
`;

StyledChipLabelText.defaultProps = {
	aspectSize: 's',
	fontSize: 0,
	fontWeight: 'semibold',
	as: 'span',
	minWidth: '0',
	whiteSpace: 'nowrap',
	overflow: 'hidden'
};

export default StyledChipLabelText;
