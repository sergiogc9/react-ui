import styled, { css } from 'styled-components';

import Flex from 'components/Flex';
import { RemoveButtonProps } from './types';

const StyledRemoveButtonWrapper = styled(Flex)<RemoveButtonProps>`
	${props =>
		!props.value &&
		css`
			opacity: 0 !important;
			pointer-events: none;

			& button {
				cursor: inherit;
			}
		`}

	${props =>
		props.isDisabled &&
		css`
			display: none !important;
		`}
`;

StyledRemoveButtonWrapper.defaultProps = {
	alignItems: 'center',
	boxSizing: 'content-box',
	height: '100%',
	ml: 'auto',
	opacity: 0,
	transition: 'opacity ease-in 0.2s',
	zIndex: 1
};

export default StyledRemoveButtonWrapper;
