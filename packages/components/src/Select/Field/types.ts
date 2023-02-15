import { SelectProps } from 'components/Select/types';
import { TextFieldProps } from 'components/TextField';
import { SelectContextData } from '../Context';

export interface SelectFieldProps extends Omit<TextFieldProps, 'type'> {}
export interface StyledSelectFieldProps
	extends SelectFieldProps,
		Pick<SelectProps, 'isAutocomplete'>,
		Pick<SelectContextData, 'selectedOptions'> {}
