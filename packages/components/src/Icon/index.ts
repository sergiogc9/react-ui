import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { IconProps } from './types';
import Icon from './Icon';

import IconFontAwesome from './FontAwesome';
import { IconFontAwesomeProps } from './FontAwesome/types';

const NamespacedIcon = createNameSpacedComponent(Icon, {
	FontAwesome: IconFontAwesome
});

NamespacedIcon.displayName = 'Icon';
IconFontAwesome.displayName = 'Icon.FontAwesome';

export type { IconProps, IconFontAwesomeProps };
export default NamespacedIcon;
