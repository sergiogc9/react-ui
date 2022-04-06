import React from 'react';

import Text from 'components/Text';

import FloatingButtonContext from '../Context';
import { FloatingButtonTextProps } from './types';

const FloatingButtonText: React.FC<FloatingButtonTextProps> = props => {
	const { aspectSize } = React.useContext(FloatingButtonContext);

	return <Text fontWeight="inherit" {...props} aspectSize={aspectSize === 's' ? 's' : 'm'} />;
};

const MemoFloatingButtonText = React.memo(FloatingButtonText);
MemoFloatingButtonText.displayName = 'FloatingButtonText';

export default MemoFloatingButtonText;
