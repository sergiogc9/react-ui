import React from 'react';
import styled from 'styled-components';

import { StyledInput } from 'components/private/components/Input';
import aspectSize from './variants/aspectSize';
import { TextFieldInputProps } from './types';

const TextFieldInput: React.FC<TextFieldInputProps> = styled(StyledInput)<TextFieldInputProps>`
	${aspectSize}
`;

export default React.memo(TextFieldInput);
