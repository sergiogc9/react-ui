import React from 'react';

import Ripple from 'components/Ripple';
import StyledIconButton from './styled';
import { IconButtonComponent, IconButtonProps } from './types';

const IconButton: IconButtonComponent = React.forwardRef(
	({ aspectSize = 'm', children, isDisabled = false, onClick, type = 'button', ...props }, ref) => {
		const onBtnClicked = React.useCallback<NonNullable<IconButtonProps['onClick']>>(
			ev => {
				if (onClick) onClick(ev);
			},
			[onClick]
		);

		return (
			<StyledIconButton
				{...props}
				as="button"
				aspectSize={aspectSize}
				disabled={isDisabled}
				isDisabled={isDisabled}
				onClick={onBtnClicked}
				ref={ref as any}
				type={type}
			>
				{children}
				{!isDisabled && <Ripple duration={1000} />}
			</StyledIconButton>
		);
	}
);

export default IconButton;
