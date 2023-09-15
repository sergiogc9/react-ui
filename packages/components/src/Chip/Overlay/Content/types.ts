import { ChipProps } from 'components/Chip';
import { ExtendedTextComponent, ExtendedTextProps } from 'components/types';

type Props = {
	readonly aspectSize: ChipProps['aspectSize'];
};

type ChipOverlayTextProps<T extends React.ElementType = 'span'> = ExtendedTextProps<Props, T, ['aspectSize']>;

type ChipOverlayTextComponent = ExtendedTextComponent<Props, ['aspectSize']>;

export { ChipOverlayTextComponent, ChipOverlayTextProps };
