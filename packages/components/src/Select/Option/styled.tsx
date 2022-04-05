import styled from 'styled-components';
import Flex from 'components/Flex';

import aspectSize from './variants/aspectSize';
import variant from './variants/variant';
import { StyledSelectOptionProps } from './types';

export const StyledSelectOption: React.FC<StyledSelectOptionProps> = styled(Flex)<StyledSelectOptionProps>`
	${aspectSize}
	${variant}
`;

StyledSelectOption.defaultProps = {
	alignItems: 'center',
	as: 'li',
	cursor: 'pointer',
	flexShrink: 0,
	outline: 'none',
	paddingX: 3,
	paddingY: 1
};
