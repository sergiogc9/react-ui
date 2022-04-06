import { TextProps } from 'components/Text';
import { ChipProps } from 'components/Chip';

type Props = {
	readonly aspectSize: ChipProps['aspectSize'];
};

export type ChipOverlayTextProps = TextProps & Props;
