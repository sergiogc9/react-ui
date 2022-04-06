import styled from 'styled-components';

import Text from 'components/Text';

import aspectSize from './variants/aspectSize';
import { ChipOverlayTextProps } from './types';

const StyledChipOverlayText: React.FC<ChipOverlayTextProps> = styled(Text)`
	max-width: 100%;
	max-height: 100%;
	${aspectSize}
`;

StyledChipOverlayText.defaultProps = {
	fontSize: 0
};

export default StyledChipOverlayText;
