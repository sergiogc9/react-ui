import { TextFieldBaseProps } from './Base';
import { TextFieldDateProps } from './Date';
import { TextFieldNumberProps } from './Number';

interface DateProps extends Omit<TextFieldDateProps, 'type'> {
	type: 'date';
}

interface NumberProps extends Omit<TextFieldNumberProps, 'type'> {
	type: 'number';
}

interface BaseProps extends Omit<TextFieldDateProps, 'type'> {
	type?: Exclude<TextFieldBaseProps['type'], 'date' | 'number'>;
}

export type TextFieldProps = BaseProps | DateProps | NumberProps;
