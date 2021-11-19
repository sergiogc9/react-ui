import React, { useState, useEffect } from 'react';

import { InputCounterProps } from './types';
import { StyledInputCounter } from './styled';

const InputCounter: React.FC<InputCounterProps> = ({ isDisabled = false, maxLength, valueContent = '' }) => {
	const [currentColor, setCurrentColor] = useState('neutral.700');

	useEffect(() => {
		const percent = (valueContent.length / maxLength) * 100;
		if (percent === 100) {
			setCurrentColor('red.500');
		} else if (percent >= 90) {
			setCurrentColor('yellow.700');
		} else {
			setCurrentColor('neutral.500');
		}
	}, [valueContent, maxLength]);

	return (
		<StyledInputCounter color={currentColor} data-testid="input-counter" isDisabled={isDisabled} maxLength={maxLength}>
			{`${valueContent.length}/${maxLength}`}
		</StyledInputCounter>
	);
};

export default React.memo(InputCounter);
