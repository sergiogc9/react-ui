import { FlexProps } from 'components/Flex';
import { TextFieldBaseProps } from '../types';

export type RemoveButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<FlexProps, 'onClick'> &
	Pick<TextFieldBaseProps, 'isDisabled' | 'value'>;
