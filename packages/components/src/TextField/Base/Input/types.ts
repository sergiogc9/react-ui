import { StyledInputProps } from 'components/private/components/Input';

import { TextFieldBaseProps } from '../types';

export type TextFieldInputProps = StyledInputProps & Pick<TextFieldBaseProps, 'label' | 'labelPosition'>;
