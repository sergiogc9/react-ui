import { StyledInputProps } from 'components/private/components/Input';

import { TextFieldBaseProps } from '../types';

export interface TextFieldInputProps extends StyledInputProps, Pick<TextFieldBaseProps, 'label' | 'labelPosition'> {
	readonly isInputFocused: boolean;
}
