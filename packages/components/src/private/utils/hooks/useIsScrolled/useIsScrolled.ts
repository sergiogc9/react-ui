import React from 'react';

import { ScrollData } from './types';

const getElementScrollData = (element: HTMLElement): ScrollData => {
	const hasScroll = element.scrollHeight - element.clientHeight > 0;
	const px = element.scrollTop;
	const percentage = hasScroll ? (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100 : 0;

	return { hasScroll, percentage, px };
};

/**
 * A hook that returns some data about the scroll status of the element passed
 * @param ref The object to be scrolled
 */
const useIsScrolled = (ref: React.RefObject<HTMLElement>) => {
	const [scrollPosition, setScrollPosition] = React.useState<ScrollData>(
		ref.current
			? getElementScrollData(ref.current)
			: {
					hasScroll: false,
					percentage: 0,
					px: 0
			  }
	);

	React.useEffect(() => {
		const element = ref.current;
		const handleScroll = () => {
			if (element) {
				setScrollPosition(getElementScrollData(element));
			}
		};

		if (element) {
			setScrollPosition(getElementScrollData(element));
			element.addEventListener('scroll', handleScroll, {
				capture: false,
				passive: true
			});
		}
		return () => {
			if (element) {
				element.removeEventListener('scroll', handleScroll);
			}
		};
	}, [ref]);

	const observer = React.useMemo(
		() =>
			new (window as any).ResizeObserver(() => {
				if (ref.current) setScrollPosition(getElementScrollData(ref.current));
			}),
		[ref]
	);

	React.useLayoutEffect(() => {
		const element = ref.current;

		if (element) {
			observer.observe(ref.current);
		}

		return () => {
			if (element) observer.disconnect();
		};
	}, [observer, ref]);

	return scrollPosition;
};

export default useIsScrolled;
