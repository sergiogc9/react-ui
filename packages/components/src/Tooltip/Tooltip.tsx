import React from 'react';

import Popover from 'components/Popover/Popover';
import { TooltipProps } from './types';

const Tooltip: React.FC<TooltipProps> = Popover;

export default React.memo(Tooltip);
