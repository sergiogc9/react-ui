import styled from 'styled-components';

import Box from 'components/Box';

import variant from './variants/variant';
import aspectSize from './variants/aspectSize';
import { ActionWrapperProps } from './types';

const ActionWrapper: React.FC<ActionWrapperProps> = styled(Box)<ActionWrapperProps>`
	${variant}
	${aspectSize}
`;

ActionWrapper.defaultProps = {
	alignItems: 'center',
	borderWidth: 0,
	cursor: 'pointer',
	justifyContent: 'center',
	position: 'relative',
	transition: 'background-color 0.15s ease-in'
};

export default ActionWrapper;
