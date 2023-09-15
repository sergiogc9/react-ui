import { ComposedTextProps } from 'components/private/utils/composers';
import { ExtendedFlexComponent, ExtendedFlexProps } from 'components/types';

type Props = ComposedTextProps;

type InputBoxProps<T extends React.ElementType = 'input'> = ExtendedFlexProps<Props, T>;

type InputBoxComponent = ExtendedFlexComponent<Props>;

export { InputBoxComponent, InputBoxProps };
