/* eslint-disable radix */
import React from 'react';
import { useTheme } from 'styled-components';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import { Theme } from '@sergiogc9/react-ui-theme';

// eslint-disable-next-line @typescript-eslint/ban-types
const __listeners: Function[] = [];

const onDebouncedScreenResize = debounce(() => {
	__listeners.forEach(fn => fn());
}, 100);

export type Breakpoint = Exclude<Extract<keyof Theme['breakpoints'], string>, keyof Array<any>>;

const getScreenSize = (theme: Theme): Breakpoint => {
	const screenWidth = window.innerWidth;
	if (screenWidth < parseInt(theme.breakpoints.sm!)) return 'xs';
	if (screenWidth < parseInt(theme.breakpoints.md!)) return 'sm';
	if (screenWidth < parseInt(theme.breakpoints.lg!)) return 'md';
	if (screenWidth < parseInt(theme.breakpoints.xl!)) return 'lg';
	return 'xl';
};

const useScreenSize = () => {
	const theme = useTheme();

	const [size, setSize] = React.useState<Breakpoint>(getScreenSize(theme));

	const onSizeUpdated = React.useCallback(() => setSize(getScreenSize(theme)), [theme]);

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

	const isMobile = React.useMemo(() => ['xs', 'sm'].includes(size), [size]);
	const isTablet = React.useMemo(() => ['md'].includes(size), [size]);
	const isDesktop = React.useMemo(() => ['lg', 'xl'].includes(size), [size]);

	return { isMobile, isTablet, isDesktop, size };
};

export default useScreenSize;
