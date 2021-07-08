import React from 'react';

/**
 * This custom hook can be used to merge multiple refs. For example, for merging a received forwarded ref with a private inner ref used in the same DOM element.
 * @param refs The array of references to be merged
 * @returns A ref callback function to be passed to ref prop in final DOM or React element
 */
const useMergeRefs = <T>(
	...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | React.RefObject<T>>
): React.RefCallback<T> => {
	const mergeFn = React.useCallback(value => {
		refs.forEach(ref => {
			const reference = ref;
			if (typeof reference === 'function') {
				reference(value);
			} else if (reference != null) {
				(reference as React.MutableRefObject<T | null>).current = value;
			}
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return mergeFn;
};

export default useMergeRefs;
