import styled from 'styled-components';

import Text from 'components/Text';

import aspectSize from './variants/aspectSize';
import { ChipOverlayTextProps } from './types';

const StyledChipOverlayText = styled(Text)<ChipOverlayTextProps>`
	max-width: 100%;
	max-height: 100%;
	${aspectSize}
`;

StyledChipOverlayText.defaultProps = {
	fontSize: 0
};

export default StyledChipOverlayText;
