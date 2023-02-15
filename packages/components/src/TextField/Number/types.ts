import { TextFieldBaseProps } from '../Base';

export interface TextFieldNumberProps
	extends TextFieldBaseProps,
		Pick<NonNullable<TextFieldBaseProps['inputProps']>, 'min' | 'max'> {}
