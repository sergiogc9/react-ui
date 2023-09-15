import { ComposedTextProps } from 'components/private/utils/composers';
import { InputProps } from '../types';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = InputProps & ComposedTextProps;

type InputLabelProps<T extends React.ElementType = 'label'> = ExtendedFlexProps<Props, T>;

type InputLabelComponent = ExtendedFlexComponent<Props>;

export { InputLabelComponent, InputLabelProps };
