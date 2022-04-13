import React from 'react';

import { useButtonContext } from '../Context';
import { ButtonTextProps } from './types';
import StyledButtonText from './styled';

const ButtonText: React.FC<ButtonTextProps> = props => {
	const { aspectSize, isDisabled, variant } = useButtonContext();

	return <StyledButtonText {...props} aspectSize={aspectSize} isDisabled={isDisabled} variant={variant} />;
};

const MemoButtonText = React.memo(ButtonText);
MemoButtonText.displayName = 'ButtonText';

export default MemoButtonText;
