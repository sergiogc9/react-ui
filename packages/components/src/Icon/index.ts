import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { IconProps } from './types';
import Icon from './Icon';

import IconFontAwesome from './FontAwesome';
import { IconFontAwesomeProps } from './FontAwesome/types';

export { IconProps, IconFontAwesomeProps };
export default createNameSpacedComponent(Icon, {
	FontAwesome: IconFontAwesome
});
