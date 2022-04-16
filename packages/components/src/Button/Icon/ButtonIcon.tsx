import React from 'react';

import { useButtonContext } from '../Context';
import { ButtonIconProps } from './types';
import { StyledButtonIcon } from './styled';

const ButtonIcon: React.FC<ButtonIconProps> = props => {
	const { aspectSize } = useButtonContext();

	return <StyledButtonIcon {...props} aspectSize={aspectSize} />;
};

const MemoButtonIcon = React.memo(ButtonIcon);
MemoButtonIcon.displayName = 'ButtonIcon';

export default MemoButtonIcon;
