import { StyledProps } from 'styled-components';

export type GenerateVariantCSSFunction<Props, VariantProp extends keyof Props> = (
	props: StyledProps<Props>,
	prop: Props[VariantProp]
) => object;
