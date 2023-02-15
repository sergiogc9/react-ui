import { InputLabelProps } from 'components/private/components/Input/Label';

import { TextFieldBaseProps } from '../types';

export interface TextFieldLabelProps
	extends InputLabelProps,
		Pick<
			TextFieldBaseProps,
			'isError' | 'isSuccess' | 'isDisabled' | 'labelPosition' | 'leftContent' | 'placeholder' | 'value'
		> {
	readonly isInputFocused: boolean;
}
