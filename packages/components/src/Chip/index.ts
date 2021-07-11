import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Chip from './Chip';
import ChipIcon from './ChipIcon';
import ChipLabel from './ChipLabel';

export { ChipGroupProps as ChipProps } from './types';
export { ChipLabelProps } from './ChipLabel/types';
export { ChipIconProps } from './ChipIcon/types';

export default createNameSpacedComponent(Chip, {
	Icon: ChipIcon,
	Label: ChipLabel
});
