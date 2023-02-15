import { FlexProps } from 'components/Flex';
import { TextFieldBaseProps } from '../types';

export interface RemoveButtonProps
	extends Omit<FlexProps, 'onClick'>,
		Pick<TextFieldBaseProps, 'isDisabled' | 'value'> {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
