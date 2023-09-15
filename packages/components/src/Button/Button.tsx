import React from 'react';

import Ripple from 'components/Ripple';
import Spinner from 'components/Spinner';
import ButtonText from 'components/Button/Text';
import { ButtonContext, ButtonContextData } from './Context';
import StyledButton from './styled';
import { ButtonComponent, ButtonProps } from './types';

const Button: ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			aspectSize = 'm',
			children,
			isDisabled = false,
			isLoading = false,
			onClick,
			type = 'button',
			variant = 'default',
			...props
		},
		ref
	) => {
		const onBtnClicked = React.useCallback<NonNullable<ButtonProps['onClick']>>(
			ev => {
				if (!isLoading && onClick) onClick(ev);
			},
			[isLoading, onClick]
		);

		const hasIcon = React.useMemo<'left' | 'right' | false>(() => {
			const childrenNames = React.Children.toArray(children).map(child => {
				return (child as any).type?.displayName;
			});
			let textFound = false;
			let iconLocation: 'left' | 'right' | false = false;
			childrenNames.forEach(name => {
				if (name === 'ButtonText') textFound = true;
				if (name === 'ButtonIcon') {
					if (textFound) iconLocation = 'right';
					else iconLocation = 'left';
				}
			});
			return iconLocation;
		}, [children]);

		const content = React.useMemo(() => {
			if (isLoading)
				return (
					<Spinner>
						{[1, 2, 3].map(index => (
							<Spinner.Pulse key={index} index={index} mx="2.5px" size="8px" />
						))}
					</Spinner>
				);

			return (
				<>
					{typeof children === 'string' ? <ButtonText>{children}</ButtonText> : children}
					{!isDisabled && !isLoading && variant !== 'link' && <Ripple duration={1000} />}
				</>
			);
		}, [children, isDisabled, isLoading, variant]);

		const buttonContextData = React.useMemo<ButtonContextData>(
			() => ({
				aspectSize,
				isDisabled,
				variant
			}),
			[aspectSize, isDisabled, variant]
		);

		return (
			<ButtonContext.Provider value={buttonContextData}>
				<StyledButton
					as="button"
					ref={ref}
					{...props}
					aspectSize={aspectSize}
					disabled={isDisabled}
					hasIcon={hasIcon}
					isDisabled={isDisabled}
					isLoading={isLoading}
					onClick={onBtnClicked}
					type={type}
					variant={variant}
				>
					{content}
				</StyledButton>
			</ButtonContext.Provider>
		);
	}
) as ButtonComponent;

export default React.memo(Button) as ButtonComponent;
