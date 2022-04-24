import React from 'react';

import AlertContext, { AlertContextData } from './Context';
import StyledAlert from './styled';
import { AlertProps } from './types';

const Alert: React.FC<AlertProps> = React.forwardRef(
	({ aspectSize = 'm', children, status = 'info', ...rest }, ref) => {
		const contextData = React.useMemo<AlertContextData>(() => ({ aspectSize, status }), [aspectSize, status]);

		return (
			<AlertContext.Provider value={contextData}>
				<StyledAlert aspectSize={aspectSize} data-testid="alert" ref={ref} status={status} {...rest}>
					{children}
				</StyledAlert>
			</AlertContext.Provider>
		);
	}
);

export default React.memo(Alert);
