import styled from 'styled-components';

import Content from 'components/Content';
import { ChipLabelProps } from './types';
import aspectSize from './variants/aspectSize';

const StyledContent: React.FC<ChipLabelProps> = styled(Content)<ChipLabelProps>`
  ${aspectSize}
`;

StyledContent.defaultProps = {
  aspectSize: 's',
  fontWeight: 'semibold',
  as: 'span'
};

export default StyledContent;
