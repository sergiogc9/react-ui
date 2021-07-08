import React from 'react';

import ModalClose from '../Close';
import StyledModalHeader from './styled';
import { ModalHeaderProps } from './types';

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, ...rest }) => {
  return (
    <StyledModalHeader {...rest}>
      {children}
      <ModalClose />
    </StyledModalHeader>
  );
};

export default React.memo(ModalHeader);
