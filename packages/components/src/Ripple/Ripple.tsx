import React, { useState, useEffect } from 'react';

import StyledRipple, { RippleAnimation } from './styled';
import { RippleProps } from './types';

const useDebouncedRippleCleanUp = (
  count: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useEffect(() => {
    let rippleTimeout: number;
    if (count > 0) {
      rippleTimeout = setTimeout(cleanUpFunction, duration * 4);
    }

    return () => clearTimeout(rippleTimeout);
  }, [count, duration, cleanUpFunction]);
};

const Ripple: React.FC<RippleProps> = ({
  duration = 850,
  color = 'currentColor',
  ...props
}) => {
  const [rippleArray, setRippleArray] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
    }[]
  >([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const onAddRipple = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const box = event.currentTarget.getBoundingClientRect();
      const size = box.width > box.height ? box.width : box.height;
      const x = event.clientX - box.x - size / 2;
      const y = event.clientY - box.y - size / 2;
      const newRipple = {
        id: new Date().getTime(),
        x,
        y,
        size
      };

      setRippleArray([...rippleArray, newRipple]);
    },
    [rippleArray]
  );

  return (
    <StyledRipple
      duration={duration}
      color={color}
      onMouseDown={onAddRipple}
      {...props}
    >
      {rippleArray.length > 0 &&
        rippleArray.map(({ id, ...ripple }) => (
          <RippleAnimation
            key={id}
            color={color}
            duration={duration}
            {...ripple}
          />
        ))}
    </StyledRipple>
  );
};

export default React.memo(Ripple);
