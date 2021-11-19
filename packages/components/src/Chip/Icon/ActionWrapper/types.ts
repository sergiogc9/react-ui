import { BoxProps } from 'components/Box';
import { ChipProps } from 'components/Chip/types';

type Props = {
	readonly aspectSize: ChipProps['aspectSize'];
	readonly variant?: ChipProps['variant'];
};

export type ActionWrapperProps = Props & BoxProps<React.ButtonHTMLAttributes<HTMLButtonElement>>;
