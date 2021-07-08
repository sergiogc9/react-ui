import React from 'react';
import styled from 'styled-components';
import composers from 'components/private/utils/composers';

import Box from 'components/Box';
import { InputBoxProps } from './types';

const InputBox: React.FC<InputBoxProps> = styled(Box)<InputBoxProps>`
	${composers.text}
`;

InputBox.defaultProps = {
	as: 'input'
};

export default InputBox;
