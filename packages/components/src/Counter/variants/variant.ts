import { readableColor } from 'polished';
import { StyledProps } from 'styled-components';
import { variant } from 'styled-system';
import { getColorFromTheme } from '@sergiogc9/react-ui-theme';

import { CounterProps } from '../types';

export default (props: StyledProps<CounterProps>) => {
	const getBackgroundColor = (): string => {
		if (props.bg) return getColorFromTheme(props.theme, props.bg.trim());
		return '';
	};

	const getAutomaticColor = (): string => {
		const backgroundColor = getBackgroundColor();
		let automaticColor = '';
		try {
			automaticColor = readableColor(backgroundColor, '#000', '#fff');
		} catch {
			automaticColor = '#000';
		}
		return automaticColor;
	};

	const generateCSS = (variantProp: CounterProps['variant']) => {
		const automaticColor = getAutomaticColor();
		let finalColor = props.theme.components.counter.colors[variantProp!].color;
		if (automaticColor && props.bg) finalColor = automaticColor;

		let finalBackground = props.theme.components.counter.colors[variantProp!].bg;
		if (typeof props.bg === 'string') finalBackground = props.bg;

		return {
			bg: finalBackground,
			color: props.color ?? finalColor
		};
	};

	return variant({
		prop: 'variant',
		variants: {
			blue: generateCSS('blue'),
			green: generateCSS('green'),
			grey: generateCSS('grey'),
			red: generateCSS('red'),
			yellow: generateCSS('yellow')
		}
	});
};
