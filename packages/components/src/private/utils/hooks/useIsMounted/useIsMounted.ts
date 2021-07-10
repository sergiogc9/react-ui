import React from 'react';

const useMountedState = (): (() => boolean) => {
	const mountedRef = React.useRef<boolean>(false);
	const get = React.useCallback(() => mountedRef.current, []);

	React.useEffect(() => {
		mountedRef.current = true;

		return () => {
			mountedRef.current = false;
		};
	}, []);

	return get;
};

export default useMountedState;
