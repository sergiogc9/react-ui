import React from 'react';

import { StyledChip } from './styled';
import { ChipGroupProps } from './types';
import ChipContext from './Context';

const Group: React.FC<ChipGroupProps> = ({
  as,
  aspectSize = 's',
  children,
  href,
  variant = 'white',
  ...props
}) => {
  return (
    <ChipContext.Provider value={{ aspectSize, variant }}>
      <StyledChip
        as={href ? as || 'a' : 'span'}
        aspectSize={aspectSize}
        variant={variant}
        {...(href ? { href } : {})}
        {...props}
      >
        {children}
      </StyledChip>
    </ChipContext.Provider>
  );
};

export default React.memo(Group);
