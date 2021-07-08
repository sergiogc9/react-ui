import { TextFieldBaseProps } from '../Base';

export type TextFieldNumberProps = TextFieldBaseProps &
	Pick<NonNullable<TextFieldBaseProps['inputProps']>, 'min' | 'max'>;
