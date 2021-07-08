import { TextFieldBaseProps } from './Base';
import { TextFieldDateProps } from './Date';
import { TextFieldNumberProps } from './Number';

type DateProps = {
	type: 'date';
} & Omit<TextFieldDateProps, 'type'>;

type NumberProps = {
	type: 'number';
} & Omit<TextFieldNumberProps, 'type'>;

type BaseProps = {
	type?: Exclude<TextFieldBaseProps['type'], 'date' | 'number'>;
} & Omit<TextFieldBaseProps, 'type'>;

export type TextFieldProps = BaseProps | DateProps | NumberProps;
