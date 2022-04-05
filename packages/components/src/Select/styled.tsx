import React from 'react';
import styled from 'styled-components';

import Flex from 'components/Flex';

import { SelectProps } from './types';

const StyledSelect: React.FC<SelectProps> = styled(Flex)<SelectProps>`
	& {
		[data-tippy-root] {
			width: 100%;
		}
	}
`;

StyledSelect.defaultProps = {
	width: '100%'
};

export default StyledSelect;
