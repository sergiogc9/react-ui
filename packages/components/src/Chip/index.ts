import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import Chip from './Chip';
import ChipIcon from './Icon';
import ChipLabel from './Label';

export { ChipProps } from './types';
export { ChipLabelProps } from './Label/types';
export { ChipIconProps } from './Icon/types';

export default createNameSpacedComponent(Chip, {
	Icon: ChipIcon,
	Label: ChipLabel
});
