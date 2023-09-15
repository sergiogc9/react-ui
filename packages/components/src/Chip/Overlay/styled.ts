import styled from 'styled-components';

import Flex from 'components/Flex';

import { ChipOverlayProps } from './types';
import aspectSize from './variants/aspectSize';
import variant from './variants/variant';

const StyledChipOverlay = styled(Flex)<ChipOverlayProps>`
	${variant}
	${aspectSize}
`;

StyledChipOverlay.defaultProps = {
	alignItems: 'center',
	aspectSize: 's',
	cursor: 'pointer',
	flexShrink: 0,
	flexWrap: 'nowrap',
	fontWeight: 'semibold',
	justifyContent: 'center',
	left: 0,
	position: 'absolute',
	px: 1,
	textAlign: 'center',
	transition: 'transform 0.3s cubic-bezier(0.000, 0.000, 0.700, 1.500)',
	width: '100%'
};

export default StyledChipOverlay;
