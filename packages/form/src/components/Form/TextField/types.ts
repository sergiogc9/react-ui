import { TextFieldProps } from '@sergiogc9/react-ui';

export type FormTextFieldProps = TextFieldProps & Required<Pick<TextFieldProps, 'name'>>;
