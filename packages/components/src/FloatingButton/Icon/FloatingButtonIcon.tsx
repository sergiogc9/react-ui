import React from 'react';

import Icon from 'components/Icon';

import FloatingButtonContext from '../Context';
import { FloatingButtonIconFontAwesomeProps, FloatingButtonIconProps } from './types';

const FloatingButtonIcon: React.FC<FloatingButtonIconProps> = props => {
	const { aspectSize } = React.useContext(FloatingButtonContext);

	return <Icon fill="currentColor" {...props} aspectSize={aspectSize} />;
};

const FloatingButtonIconFontAwesome: React.FC<FloatingButtonIconFontAwesomeProps> = props => {
	const { aspectSize } = React.useContext(FloatingButtonContext);

	return <Icon.FontAwesome fill="currentColor" {...props} aspectSize={aspectSize} />;
};

const MemoFloatingButtonIcon = React.memo(FloatingButtonIcon);
MemoFloatingButtonIcon.displayName = 'FloatingButtonIcon';

export { MemoFloatingButtonIcon as FloatingButtonIcon, FloatingButtonIconFontAwesome };
