import { FlexProps } from 'components/Flex';
import { ChipProps } from 'components/Chip/types';

type Props = {
	readonly aspectSize: ChipProps['aspectSize'];
	readonly variant?: ChipProps['variant'];
};

export type ActionWrapperProps = Props & FlexProps<React.ButtonHTMLAttributes<HTMLButtonElement>>;
