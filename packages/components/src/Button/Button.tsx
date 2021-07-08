import React from 'react';

import Ripple from 'components/Ripple';
import Spinner from 'components/Spinner';
import ButtonText from 'components/Button/Text';
import StyledButton from './styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
					{typeof children === 'string' ? (
						<ButtonText aspectSize={aspectSize} isDisabled={isDisabled} variant={variant}>
							{children}
						</ButtonText>
					) : (
						children
					)}
					{!isDisabled && !isLoading && variant !== 'link' && <Ripple duration={1000} />}
				</>
			);
		}, [aspectSize, children, isDisabled, isLoading, variant]);

		return (
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
		);
	}
);

export default React.memo(Button);
