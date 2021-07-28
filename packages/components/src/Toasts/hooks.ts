import React from 'react';

import ToastsContext from './Context';

const useToasts = () => {
	const { onAddToast, onCloseToast } = React.useContext(ToastsContext);

	const addToast = React.useCallback(onAddToast, [onAddToast]);
	const closeToast = React.useCallback(onCloseToast, [onCloseToast]);

	return { addToast, closeToast };
};

export { useToasts };
