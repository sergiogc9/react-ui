import React from 'react';

const useUpdateEffect = (effect: React.EffectCallback, deps: React.DependencyList) => {
	const isMounted = React.useRef(false);

	// eslint-disable-next-line consistent-return
	React.useEffect(() => {
		if (isMounted.current) return effect();
		isMounted.current = true;
	}, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useUpdateEffect;
