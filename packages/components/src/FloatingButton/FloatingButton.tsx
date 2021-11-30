import React from 'react';

import Ripple from 'components/Ripple';
import Spinner from 'components/Spinner';

import FloatingButtonContext from './Context';
import FloatingButtonText from './Text';
import StyledButton from './styled';
import { FloatingButtonProps } from './types';
import { FloatingButtonContextData } from './Context/types';

const SPINNER_SIZES: Record<NonNullable<FloatingButtonProps['aspectSize']>, { mx: string; size: string }> = {
	s: { mx: '1px', size: '4px' },
	m: { mx: '1.5px', size: '6px' },
	l: { mx: '2px', size: '6px' }
};

const FloatingButton: React.FC<FloatingButtonProps> = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
	({ aspectSize = 'm', children, isDisabled = false, isLoading = false, onClick, type = 'button', ...props }, ref) => {
		const onBtnClicked = React.useCallback<NonNullable<FloatingButtonProps['onClick']>>(
			ev => {
				if (!isLoading && onClick) onClick(ev);
			},
			[isLoading, onClick]
		);

		const hasText = React.useMemo<boolean>(() => {
			const isSomeChildText = React.Children.toArray(children).some(child => {
				return typeof child === 'string' || (child as any).type?.displayName === 'FloatingButtonText';
			});
			return isSomeChildText;
		}, [children]);

		const content = React.useMemo(() => {
			if (isLoading)
				return (
					<Spinner>
						{[1, 2, 3].map(index => (
							<Spinner.Pulse
								key={index}
								index={index}
								mx={SPINNER_SIZES[aspectSize].mx}
								size={SPINNER_SIZES[aspectSize].size}
							/>
						))}
					</Spinner>
				);
			return (
				<>
					{typeof children === 'string' ? <FloatingButtonText>{children}</FloatingButtonText> : children}
					{!isDisabled && !isLoading && <Ripple duration={1000} />}
				</>
			);
		}, [aspectSize, children, isDisabled, isLoading]);

		const contextData = React.useMemo<FloatingButtonContextData>(
			() => ({
				aspectSize,
				isDisabled
			}),
			[aspectSize, isDisabled]
		);

		return (
			<FloatingButtonContext.Provider value={contextData}>
				<StyledButton
					as="button"
					ref={ref}
					{...props}
					aspectSize={aspectSize}
					disabled={isDisabled}
					hasText={hasText}
					isDisabled={isDisabled}
					isLoading={isLoading}
					onClick={onBtnClicked}
					type={type}
				>
					{content}
				</StyledButton>
			</FloatingButtonContext.Provider>
		);
	}
);

export default React.memo(FloatingButton);
