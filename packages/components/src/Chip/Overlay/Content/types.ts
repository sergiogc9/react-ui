import { TextProps } from 'components/Text';
import { ChipProps } from 'components/Chip';

export interface ChipOverlayTextProps extends TextProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	readonly aspectSize: ChipProps['aspectSize'];
}
