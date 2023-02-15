/* eslint-disable radix */
import React from 'react';
import { DefaultTheme, useTheme } from 'styled-components';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

// eslint-disable-next-line @typescript-eslint/ban-types
const __listeners: Function[] = [];

const onDebouncedScreenResize = debounce(() => {
	__listeners.forEach(fn => fn());
}, 100);

export type Breakpoint = Exclude<Extract<keyof DefaultTheme['breakpoints'], string>, keyof Array<any>>;

const getScreenSize = (screenWidth: number, theme: DefaultTheme): Breakpoint => {
	if (screenWidth < parseInt(theme.breakpoints.sm!, 10)) return 'xs';
	if (screenWidth < parseInt(theme.breakpoints.md!, 10)) return 'sm';
	if (screenWidth < parseInt(theme.breakpoints.lg!, 10)) return 'md';
	if (screenWidth < parseInt(theme.breakpoints.xl!, 10)) return 'lg';
	return 'xl';
};

const useScreenSize = () => {
	const theme = useTheme();

	const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);

	const onSizeUpdated = React.useCallback(() => setScreenWidth(window.innerWidth), []);

	React.useEffect(() => {
		if (isEmpty(__listeners)) {
			window.addEventListener('resize', onDebouncedScreenResize, false);
		}
		__listeners.push(onSizeUpdated);

		return () => {
			__listeners.splice(__listeners.indexOf(onSizeUpdated), 1);
			if (isEmpty(__listeners)) {
				window.removeEventListener('resize', onDebouncedScreenResize, false);
			}
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const size = React.useMemo<Breakpoint>(() => getScreenSize(screenWidth, theme), [screenWidth, theme]);
	const isMobile = React.useMemo(() => ['xs', 'sm'].includes(size), [size]);
	const isTablet = React.useMemo(() => ['md'].includes(size), [size]);
	const isDesktop = React.useMemo(() => ['lg', 'xl'].includes(size), [size]);

	return { isMobile, isTablet, isDesktop, screenWidth, size };
};

export default useScreenSize;
