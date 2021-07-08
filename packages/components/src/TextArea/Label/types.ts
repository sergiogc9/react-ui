import { InputLabelProps } from 'components/private/components/Input/Label';

import { TextAreaProps } from '../types';

export type TextAreaLabelProps = InputLabelProps &
	Pick<TextAreaProps, 'isError' | 'isSuccess' | 'isDisabled' | 'labelPosition' | 'placeholder' | 'value'>;
