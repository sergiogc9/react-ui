import { StyledInputProps } from 'components/private/components/Input';

import { TextFieldBaseProps } from '../types';

type Props = {
	readonly isInputFocused: boolean;
};

export type TextFieldInputProps = Props & StyledInputProps & Pick<TextFieldBaseProps, 'label' | 'labelPosition'>;
