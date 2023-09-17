import { createNameSpacedComponent } from '@sergiogc9/react-utils';

import { ChipIcon, ChipIconFontAwesome } from './ChipIcon';

export type { ChipIconProps, ChipIconFontAwesomeProps } from './types';
export default createNameSpacedComponent(ChipIcon, {
	FontAwesome: ChipIconFontAwesome
});
