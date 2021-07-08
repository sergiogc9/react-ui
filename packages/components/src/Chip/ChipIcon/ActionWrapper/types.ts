import { BoxProps } from 'components/Box';
import { ChipGroupProps } from 'components/Chip/types';

type Props = {
  readonly location?: 'left' | 'right';
  readonly aspectSize: ChipGroupProps['aspectSize'];
  readonly variant?: ChipGroupProps['variant'];
};

export type ActionWrapperProps = Props &
  BoxProps<React.ButtonHTMLAttributes<HTMLButtonElement>>;
