import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import SwitchBox from './SwitchBox';
import SwitchBoxChip from './Chip';
import SwitchBoxContent from './Content';
import SwitchBoxIcon from './Icon';
import { SwitchBoxProps } from './types';

export type { SwitchBoxProps };
export default createNameSpacedComponent(SwitchBox, {
	Chip: SwitchBoxChip,
	Content: SwitchBoxContent,
	Icon: SwitchBoxIcon
});
