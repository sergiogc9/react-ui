import React, { useState } from 'react';
import Icon from 'components/Icon';

import InputCheckLabel from './Label';
import StyledInputCheck, { StyledInputCheckWrapper } from './styled';
import { InputCheckProps } from './types';

const InputCheck: React.FC<InputCheckProps> = ({
	aspectSize = 'm',
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
	);
};

export default React.memo(InputCheck);
