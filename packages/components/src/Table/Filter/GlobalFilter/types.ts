import { FlexProps } from 'components/Flex';
import { TextFieldProps } from 'components/TextField';

interface Props {
	textFieldProps?: Omit<TextFieldProps, 'onChange' | 'value'>;
}

export type TableGlobalFilterProps<T extends React.ElementType = 'div'> = FlexProps<T> & Props;
