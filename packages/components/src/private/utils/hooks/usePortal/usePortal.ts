import React from 'react';

const usePortal = (id: string) => {
	const wrapperRef = React.useRef(document.createElement('div'));

	React.useEffect(() => {
		const parentElem = document.querySelector(`#${id}`) || document.body;
		const wrapper = wrapperRef.current;
		parentElem.appendChild(wrapper);
		return () => {
			wrapper.remove();
		};
	}, [id]);

	return wrapperRef;
};

export default usePortal;
