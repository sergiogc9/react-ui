import styled from 'styled-components';

import { shouldStyledComponentForwardProp } from 'components/private/utils/components';
import composers from 'components/private/utils/composers';
import { BoxProps } from './types';

const Box: React.FC<BoxProps> = styled.div.withConfig<BoxProps>({
  shouldForwardProp: shouldStyledComponentForwardProp
})`
  ${composers.box}
`;

Box.defaultProps = {
  display: 'flex',
  position: 'relative',
  fontFamily: 'main'
};

export default Box;
