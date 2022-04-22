import { StyledProps } from 'styled-components';
import css from '@styled-system/css';

import { GenerateVariantCSSFunction } from './types';

const createVariant =
	<Props, VariantProp extends keyof Props>(
		prop: VariantProp,
		generateCSS: GenerateVariantCSSFunction<Props, VariantProp>
	) =>
	(props: StyledProps<Props>) => {
		return css(generateCSS(props, props[prop]));
	};

export { createVariant };
