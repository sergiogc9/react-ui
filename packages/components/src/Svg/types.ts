import { ReactNode } from 'react';
import { ComposedSvgProps, ComposedColorProps } from 'components/private/utils/composers/types';

type Props = {
	/**
	 * The SVG content
	 */
	readonly children?: ReactNode;
	/**
	 * A string with classes to use in the Svg component.
	 */
	readonly className?: string;
	/**
	 * A reference which be linked to the DOM svg element.
	 */
	readonly ref?: React.ForwardedRef<SVGSVGElement>;
	/**
	 * A svg component
	 */
	readonly src?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	/**
	 * A svg component imported using SVGR as below:
	 * import { ReactComponent as Logo } from './logo.svg';
	 */
	readonly title?: string;
	/**
	 * A custom viewbox used in the SVG component.
	 */
	readonly viewBox?: string;
};

export type SvgPathProps = ComposedSvgProps;

export type SvgProps = Props & ComposedSvgProps & ComposedColorProps;
