import React from 'react';
import styled from 'styled-components';
import composers from 'components/private/utils/composers';

import Flex from 'components/Flex';
import { InputBoxProps } from './types';

const InputBox: React.FC<InputBoxProps> = styled(Flex)<InputBoxProps>`
	${composers.text}
`;

InputBox.defaultProps = {
	as: 'input'
};

export default InputBox;
