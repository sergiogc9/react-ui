import React from 'react';

import Popover from 'components/Popover';
import { TooltipTriggerProps } from './types';

const TooltipTrigger: React.FC<TooltipTriggerProps> = Popover.Trigger;

export default React.memo(TooltipTrigger);
