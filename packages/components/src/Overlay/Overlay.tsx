import React from 'react';
import ReactDOM from 'react-dom';

import usePortal from 'components/private/utils/hooks/usePortal';
import usePageBlur from 'components/private/utils/hooks/usePageBlur';
import StyledOverlay from './styled';
import { OverlayProps } from './types';

const Overlay: React.FC<OverlayProps> = ({ blur, isVisible = false, ...rest }) => {
	const targetRef = usePortal('overlays');
	usePageBlur(isVisible ? blur : undefined);

	return ReactDOM.createPortal(<StyledOverlay duration="0.3s" isVisible={isVisible} {...rest} />, targetRef.current);
};

export default React.memo(Overlay);
