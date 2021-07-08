import React from 'react';

const blurValues: number[] = [];

const usePageBlur = (blurPx?: number) => {
	React.useEffect(() => {
		if (blurPx) {
			const rootElement = document.getElementById('root') || document.body;
			rootElement.style.filter = `blur(${blurPx}px)`;
			blurValues.push(blurPx);
			return () => {
				blurValues.pop();
				if (blurValues.length) rootElement.style.filter = `blur(${blurValues[blurValues.length - 1]}px)`;
				else rootElement.style.filter = '';
			};
		}
		return undefined;
	}, [blurPx]);
};

export default usePageBlur;
