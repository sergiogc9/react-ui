import React from 'react';

const useClickOutside = (ref: React.RefObject<any>, callback: () => void) => {
	React.useEffect(() => {
		const onDocumentClick: React.EventHandler<any> = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener('mousedown', onDocumentClick);
		document.addEventListener('touchstart', onDocumentClick);
		return () => {
			document.removeEventListener('mousedown', onDocumentClick);
			document.removeEventListener('touchstart', onDocumentClick);
		};
	}, [callback, ref]);
};

export default useClickOutside;
