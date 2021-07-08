import React from 'react';

import Ripple from 'components/Ripple';
import StyledIconButton from './styled';
import { IconButtonProps } from './types';

const IconButton: React.FC<IconButtonProps> = ({
  aspectSize = 'm',
  children,
  isDisabled = false,
  onClick,
  variant = 'default',
  type = 'button',
  ...props
}) => {
  const onBtnClicked = React.useCallback<
    NonNullable<IconButtonProps['onClick']>
  >(
    (ev) => {
      if (onClick) onClick(ev);
    },
    [onClick]
  );

  return (
    <StyledIconButton
      {...props}
      as="button"
      aspectSize={aspectSize}
      disabled={isDisabled}
      isDisabled={isDisabled}
      onClick={onBtnClicked}
      variant={variant}
      type={type}
    >
      {children}
      {!isDisabled && <Ripple duration={1000} />}
    </StyledIconButton>
  );
};

export default React.memo(IconButton);
