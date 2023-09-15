import styled from 'styled-components';

import Flex from 'components/Flex';

import { SelectProps } from './types';

const StyledSelect = styled(Flex)<SelectProps>`
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
