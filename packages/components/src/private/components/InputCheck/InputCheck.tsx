import React, { useState } from 'react';

import Box from 'components/Box';
import Flex from 'components/Flex';
import Icon from 'components/Icon';
import Text from 'components/Text';

import InputCheckLabel from './Label';
import StyledInputCheck, { StyledInputCheckWrapper } from './styled';
import { InputCheckProps } from './types';

const InputCheck: React.FC<InputCheckProps> = ({
	aspectSize = 'm',
	description,
	isDefaultSelected,
	isDisabled,
	isSelected,
	label,
	name,
	onChange,
	type = 'checkbox',
	...rest
}) => {
	const [selected, setSelected] = useState(isDefaultSelected || false);

	const inputRef = React.useRef<HTMLInputElement>(null);

	const onInputChanged: InputCheckProps['onChange'] = event => {
		if (isDisabled) return;
		setSelected(event.target.checked);
		if (onChange) onChange(event);
	};

	const onInputLabelClicked = () => {
		inputRef.current!.click();
	};

	const isFinalSelected = isSelected ?? selected;

	return (
		<Box>
			<StyledInputCheckWrapper {...rest} isDisabled={isDisabled}>
				<StyledInputCheck isDisabled={isDisabled} isSelected={isFinalSelected} type={type}>
					<input checked={isFinalSelected} name={name} onChange={onInputChanged} ref={inputRef} type={type} />
					{type === 'checkbox' && isFinalSelected && (
						<Icon aspectSize="s" fill="neutral.0" icon="check" styling="outlined" zIndex={1} />
					)}
				</StyledInputCheck>
				{label && (
					<InputCheckLabel aspectSize={aspectSize} isDisabled={isDisabled} onClick={onInputLabelClicked} type={type}>
						{label}
					</InputCheckLabel>
				)}
			</StyledInputCheckWrapper>
			{description && (
				<Flex paddingRight={2} paddingLeft="44px" width="100%">
					<Text aspectSize="xs" color="neutral.500">
						{description}
					</Text>
				</Flex>
			)}
		</Box>
	);
};

export default React.memo(InputCheck);
