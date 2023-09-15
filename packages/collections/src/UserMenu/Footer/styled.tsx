import styled from 'styled-components';
import { Flex } from '@sergiogc9/react-ui';

import { UserMenuFooterProps } from './types';

const StyledUserMenuFooter = styled(Flex)<UserMenuFooterProps>``;

StyledUserMenuFooter.defaultProps = {
	marginTop: 'auto'
};

export default StyledUserMenuFooter;
