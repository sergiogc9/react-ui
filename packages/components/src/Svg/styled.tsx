import { SVGProps } from 'react';
import styled from 'styled-components';

import composers from 'components/private/utils/composers';
import { SvgPathProps, SvgProps } from './types';

const SvgPath = styled.path<SvgPathProps>`
	${composers.box}
`;

SvgPath.defaultProps = {
	color: '#000',
	strokeLinecap: 'round',
	display: 'block'
};

const InnerSvg = styled.svg.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !['height', 'width'].includes(prop) && defaultValidatorFn(prop)
})<SVGProps<SVGElement> & SvgProps>`
	${composers.svg}
	${composers.color}
  stroke-width: ${props => props.strokeWidth || 0};
	box-sizing: content-box;
`;

export { SvgPath };
export default InnerSvg;
