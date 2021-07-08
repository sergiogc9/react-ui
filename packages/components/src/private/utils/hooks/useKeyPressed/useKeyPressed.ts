import React from 'react';

const useKeyPressed = (key: string, callback: () => void) => {
	React.useEffect(() => {
		const onKeyPressed: React.EventHandler<any> = event => {
			if (key === event.key) callback();
		};

		window.addEventListener('keydown', onKeyPressed);
		return () => {
			window.removeEventListener('keydown', onKeyPressed);
		};
	}, [callback, key]);
};

export default useKeyPressed;
