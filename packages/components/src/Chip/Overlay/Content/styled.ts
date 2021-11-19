import styled from 'styled-components';

import Content from 'components/Content';

import aspectSize from './variants/aspectSize';
import { ChipOverlayContentProps } from './types';

const StyledChipOverlayContent: React.FC<ChipOverlayContentProps> = styled(Content)`
	max-width: 100%;
	max-height: 100%;
	${aspectSize}
`;

StyledChipOverlayContent.defaultProps = {
	fontSize: 0
};

export default StyledChipOverlayContent;
