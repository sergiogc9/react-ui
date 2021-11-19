import { InputLabelProps } from 'components/private/components/Input/Label';

import { TextFieldBaseProps } from '../types';

type Props = {
	readonly isInputFocused: boolean;
};

export type TextFieldLabelProps = Props &
	InputLabelProps &
	Pick<
		TextFieldBaseProps,
		'isError' | 'isSuccess' | 'isDisabled' | 'labelPosition' | 'leftContent' | 'placeholder' | 'value'
	>;
