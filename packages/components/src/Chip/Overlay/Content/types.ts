import { ContentProps } from 'components/Content';
import { ChipProps } from 'components/Chip';

type Props = {
	readonly aspectSize: ChipProps['aspectSize'];
};

export type ChipOverlayContentProps = ContentProps & Props;
