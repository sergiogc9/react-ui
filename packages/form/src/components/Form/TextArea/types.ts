import { TextAreaProps } from '@sergiogc9/react-ui';

export type FormTextAreaProps = Omit<TextAreaProps, 'defaultValue' | 'name' | 'onBlur' | 'onChange' | 'value'> &
	Required<Pick<TextAreaProps, 'name'>>;
