import React from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from 'styled-components';
import { usePageBlur, usePortal } from '@sergiogc9/react-hooks';

import { StyledAnimatedDarkOverlay, StyledAnimatedLightOverlay } from './styled';
import { OverlayProps } from './types';

const Overlay: React.FC<OverlayProps> = ({ blur, isVisible = false, ...rest }) => {
	const targetRef = usePortal('overlays');
	usePageBlur(isVisible ? blur : undefined);

	const { mode } = useTheme();

	const StyledOverlay = React.useMemo(
		() => (mode === 'light' ? StyledAnimatedLightOverlay : StyledAnimatedDarkOverlay),
		[mode]
	);

	return ReactDOM.createPortal(<StyledOverlay duration="0.3s" isVisible={isVisible} {...rest} />, targetRef.current);
};

export default React.memo(Overlay);
