import styled from 'styled-components';

import composers from 'components/private/utils/composers';
import Box from 'components/Flex';
import { GridRowComponent } from './types';

const GridRow: GridRowComponent = styled(Box)`
	${composers.grid}
`;

GridRow.defaultProps = {
	gridColumn: '1 / -1',
	gridRow: 'span 1'
};

export { GridRow };
