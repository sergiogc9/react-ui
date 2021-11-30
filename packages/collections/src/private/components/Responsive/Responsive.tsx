import React from 'react';

import useScreenSize from 'collections/private/utils/hooks/useScreenSize';

import { ResponsiveProps } from './types';

const Responsive: React.FC<ResponsiveProps> = props => {
	const { children, visibility } = props;

	const { isDesktop, isMobile, isTablet, size } = useScreenSize();

	if (
		visibility.includes(size) ||
		(visibility === 'mobile' && isMobile) ||
		(visibility === 'tablet' && isTablet) ||
		(visibility === 'desktop' && isDesktop)
	)
		return <>{children}</>;

	return null;
};

export default React.memo(Responsive);
