import styled from 'styled-components';
import { Flex } from '@sergiogc9/react-ui';

import { DropdownMenuFooterProps } from './types';

const DropdownMenuFooter = styled(Flex)<DropdownMenuFooterProps>``;

DropdownMenuFooter.defaultProps = {
	marginTop: 'auto',
	padding: 3
};

export default DropdownMenuFooter;
