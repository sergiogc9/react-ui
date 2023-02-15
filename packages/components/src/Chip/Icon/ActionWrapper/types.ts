import { FlexProps } from 'components/Flex';
import { ChipProps } from 'components/Chip/types';

export interface ActionWrapperProps extends FlexProps<React.ButtonHTMLAttributes<HTMLButtonElement>, undefined> {
	readonly aspectSize: ChipProps['aspectSize'];
	readonly variant?: ChipProps['variant'];
}
