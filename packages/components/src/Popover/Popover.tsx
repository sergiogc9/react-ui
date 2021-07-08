import React from 'react';

import PopoverContext from 'components/Popover/Context';
import { PopoverContextData } from 'components/Popover/Context/types';
import { PopoverProps } from './types';

const PopoverGroup: React.FC<PopoverProps> = ({ children }) => {
	const popoverRef = React.useRef() as React.MutableRefObject<HTMLElement>;

	const contextData: PopoverContextData = { popoverRef };

	return <PopoverContext.Provider value={contextData}>{children}</PopoverContext.Provider>;
};

export default React.memo(PopoverGroup);
