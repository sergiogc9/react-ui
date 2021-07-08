import styled from 'styled-components';

import composers from 'components/private/utils/composers';
import Box from 'components/Box';
import { GridRowProps } from './types';

const GridRow: React.FC<GridRowProps> = styled(Box)`
	${composers.grid}
`;

GridRow.defaultProps = {
	gridColumn: '1 / -1',
	gridRow: 'span 1'
};

export { GridRow };
