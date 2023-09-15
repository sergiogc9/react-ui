import { ExtendedTextComponent, ExtendedTextProps } from 'components/types';

type Props = {
	isDisabled?: boolean;
	maxLength: number;
	valueContent?: string;
};

type InputCounterProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T>;

type InputCounterComponent = ExtendedTextComponent<Props>;

export { InputCounterComponent, InputCounterProps };
