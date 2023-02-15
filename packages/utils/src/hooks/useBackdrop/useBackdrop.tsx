import React from 'react';
import ReactDOM from 'react-dom';
import { keyframes } from 'styled-components';

import { Animation, BaseAnimationProps } from '@sergiogc9/react-ui';

/**
 * This custom hook to render a semi-transparent backdrop over an element.
 * @param isEnabled Boolean wether the backdrop is visible or not.
 * @param props Any props to customize the backdrop.
 * @returns The animated backdrop content.
 */
const useBackdrop = (
	isEnabled: boolean,
	props: Partial<BaseAnimationProps> = {},
	wrapperRef?: React.RefObject<HTMLElement>
) => {
	const backdropAnimation = React.useMemo(
		() => keyframes`
			from {
				opacity: 0;
			}

			to {
				opacity: ${props.opacity ?? 0.6}
			}
		`,
		[props.opacity]
	);

	const content = (
		<Animation.BaseAnimation
			animation={backdropAnimation}
			bg="neutral.0"
			data-testid="useBackdropWrapper"
			duration="0.25s"
			height="100%"
			isVisible={isEnabled}
			position="absolute"
			width="100%"
			{...props}
		/>
	);

	if (wrapperRef?.current) return ReactDOM.createPortal(content, wrapperRef.current!);

	return content;
};

export default useBackdrop;
