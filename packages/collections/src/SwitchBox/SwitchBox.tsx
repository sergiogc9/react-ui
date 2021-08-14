import React from 'react';
import { Switch } from '@sergiogc9/react-ui';

import StyledSwitchBoxWrapper from './styled';
import { SwitchBoxProps } from './types';

const SwitchBox: React.FC<SwitchBoxProps> = ({
	aspectSize,
	children,
	isChecked,
	isDefaultChecked,
	isDisabled,
	onChange,
	...rest
}) => {
	return (
		<StyledSwitchBoxWrapper {...rest}>
			{children}
			<Switch
				aspectSize={aspectSize}
				data-testid="switchBox-switch"
				isChecked={isChecked}
				isDefaultChecked={isDefaultChecked}
				isDisabled={isDisabled}
				marginLeft="auto"
				onChange={onChange}
			/>
		</StyledSwitchBoxWrapper>
	);
};

export default React.memo(SwitchBox);
