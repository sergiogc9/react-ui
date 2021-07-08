import styled from 'styled-components';
import Box from 'components/Box';

import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { StyledSelectOptionProps } from './types';

export const StyledSelectOption: React.FC<StyledSelectOptionProps> = styled(Box)<StyledSelectOptionProps>`
	${aspectSize}
	${variant}
`;

StyledSelectOption.defaultProps = {
	alignItems: 'center',
	as: 'li',
	cursor: 'pointer',
	paddingX: 3,
	flexShrink: 0,
	outline: 'none'
};
