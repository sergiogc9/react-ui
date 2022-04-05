import React from 'react';

import { Flex, Icon } from '@sergiogc9/react-ui';
import { IconContainer, IconName } from 'storybook/decorators/Icon';
import icons from 'components/Icon/icons';
import { Icon as IconType, IconStyling } from 'components/Icon/types';

const renderIcon = (icon: IconType, styling: IconStyling) => {
	if (!icons[styling][icon]) return null;
	return (
		<IconContainer key={icon}>
			<Icon styling={styling} icon={icon} fill="primary.500" />
			<IconName>{icon}</IconName>
		</IconContainer>
	);
};

const outlinedIconsStory = () => (
	<Flex flexWrap="wrap">{Object.keys(icons.outlined).map((icon: any) => renderIcon(icon, 'outlined'))}</Flex>
);

const filledIconsStory = () => (
	<Flex flexWrap="wrap">{Object.keys(icons.filled).map((icon: any) => renderIcon(icon, 'filled'))}</Flex>
);

export { filledIconsStory, outlinedIconsStory };
