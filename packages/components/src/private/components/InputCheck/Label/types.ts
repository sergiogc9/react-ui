import { InputCheckProps } from '../types';
import { ExtendedTextComponent, ExtendedTextProps } from 'components/types';

type Props = Pick<InputCheckProps, 'aspectSize' | 'isDisabled' | 'type'>;

type InputCheckLabelProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T, ['aspectSize']>;

type InputCheckLabelComponent = ExtendedTextComponent<Props, ['aspectSize']>;

type StyledInputCheckLabelProps = ExtendedTextProps<Pick<InputCheckProps, 'isDisabled' | 'type'>, 'span'>;

export { InputCheckLabelComponent, InputCheckLabelProps, StyledInputCheckLabelProps };
