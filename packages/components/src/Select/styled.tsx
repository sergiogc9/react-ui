import React from 'react';
import styled from 'styled-components';

import Box from 'components/Box';

import { SelectProps } from './types';

const StyledSelect: React.FC<SelectProps> = styled(Box)<SelectProps>`
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
