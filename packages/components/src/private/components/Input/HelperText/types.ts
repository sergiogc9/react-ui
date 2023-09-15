import { InputProps } from '../types';
import { ExtendedTextComponent, ExtendedTextProps } from 'components/types';

type Props = InputProps;

type InputHelperTextProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T, ['aspectSize']>;

type InputHelperTextComponent = ExtendedTextComponent<Props, ['aspectSize']>;

export { InputHelperTextComponent, InputHelperTextProps };
