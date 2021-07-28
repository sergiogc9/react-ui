import React from 'react';

import AlertContext, { AlertContextData } from './Context';
import StyledAlert from './styled';
import { AlertProps } from './types';

const Alert: React.FC<AlertProps> = React.forwardRef(({ children, status = 'info', ...rest }, ref) => {
	const contextData = React.useMemo<AlertContextData>(
		() => ({
			status
		}),
		[status]
	);

	return (
		<AlertContext.Provider value={contextData}>
			<StyledAlert data-testid="alert" ref={ref} status={status} {...rest}>
				{children}
			</StyledAlert>
		</AlertContext.Provider>
	);
});

export default React.memo(Alert);
