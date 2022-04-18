import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { FloatingButtonIcon, FloatingButtonIconFontAwesome } from './FloatingButtonIcon';

export { FloatingButtonIconProps, FloatingButtonIconFontAwesomeProps } from './types';
export default createNameSpacedComponent(FloatingButtonIcon, {
	FontAwesome: FloatingButtonIconFontAwesome
});
