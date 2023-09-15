import styled from 'styled-components';
import composers from 'components/private/utils/composers';

import Flex from 'components/Flex';
import { InputBoxComponent, InputBoxProps } from './types';

const InputBox: InputBoxComponent = styled(Flex)<InputBoxProps>`
	${composers.text}
`;

InputBox.defaultProps = {
	as: 'input'
};

export default InputBox;
