import React from 'react';
import { Chip } from '@sergiogc9/react-ui';

import { SwitchBoxChipProps } from './types';

const SwitchBoxChip: React.FC<SwitchBoxChipProps> = props => {
	return <Chip display="inline-flex" {...props} />;
};

export default React.memo(SwitchBoxChip);
