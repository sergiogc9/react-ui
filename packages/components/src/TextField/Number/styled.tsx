import styled from 'styled-components';

import TextFieldBase, { TextFieldBaseProps } from '../Base';

const StyledTextFieldNumber: React.FC<TextFieldBaseProps> = styled(
  TextFieldBase
)<TextFieldBaseProps>`
  & input {
    -moz-appearance: textfield;
  }

  & ::-webkit-inner-spin-button,
  & ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default StyledTextFieldNumber;
