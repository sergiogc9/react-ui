import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Chip from './Chip';
import ChipIcon from './Icon';
import ChipLabel from './Label';

import { ChipProps } from './types';
import { ChipIconProps } from './Icon/types';
import { ChipLabelProps } from './Label/types';

const NamespacedChip = createNameSpacedComponent(Chip, {
	Icon: ChipIcon,
	Label: ChipLabel
});

NamespacedChip.displayName = 'Chip';
ChipIcon.displayName = 'Chip.Icon';
ChipLabel.displayName = 'Chip.Label';

export type { ChipProps, ChipIconProps, ChipLabelProps };
export default NamespacedChip;
