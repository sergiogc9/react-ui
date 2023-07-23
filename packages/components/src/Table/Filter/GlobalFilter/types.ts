import { FlexProps } from 'components/Flex';
import { TextFieldProps } from 'components/TextField';

interface Props {
	textFieldProps: Omit<TextFieldProps, 'onChange' | 'value'>;
}

export interface TableGlobalFilterProps extends FlexProps<React.HTMLAttributes<HTMLDivElement>, undefined>, Props {}
