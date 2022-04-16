import React from 'react';

import { useButtonContext } from '../Context';
import { ButtonIconFontAwesomeProps } from './types';
import { StyledButtonIconFontAwesome } from './styled';

const ButtonIconFontAwesome: React.FC<ButtonIconFontAwesomeProps> = props => {
	const { aspectSize } = useButtonContext();

	return <StyledButtonIconFontAwesome {...props} aspectSize={aspectSize} />;
};

const MemoButtonIconFontAwesome = React.memo(ButtonIconFontAwesome);
MemoButtonIconFontAwesome.displayName = 'ButtonIconFontAwesome';

export default MemoButtonIconFontAwesome;
