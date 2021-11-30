import React from 'react';

import Icon from 'components/Icon';

import FloatingButtonContext from '../Context';
import { FloatingButtonIconProps } from './types';

const FloatingButtonIcon: React.FC<FloatingButtonIconProps> = props => {
	const { aspectSize } = React.useContext(FloatingButtonContext);

	return <Icon fill="currentColor" {...props} aspectSize={aspectSize} />;
};

export default FloatingButtonIcon;
