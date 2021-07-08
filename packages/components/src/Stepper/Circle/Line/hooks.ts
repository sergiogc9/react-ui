import React from 'react';

import { StyledStepperCircleLineProps } from './types';

const useGetLineLength = (variant: StyledStepperCircleLineProps['variant']) => {
  const ref = React.useRef<HTMLElement>();

  const [length, setLength] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    const stepDiv: HTMLElement | null = ref.current!.closest('.stepper-step');
    const circleDiv: HTMLElement | null =
      ref.current!.closest('.stepper-circle');

    if (stepDiv && circleDiv) {
      const nextStepDiv: HTMLElement | null =
        stepDiv.nextElementSibling as HTMLElement | null;
      const nextCircleDiv: HTMLElement | null =
        nextStepDiv!.querySelector('.stepper-circle');

      if (nextStepDiv && nextCircleDiv) {
        let newLength = 0;
        switch (variant) {
          case 'vertical':
            newLength =
              stepDiv.offsetHeight / 2 -
              circleDiv.offsetHeight / 2 +
              (nextStepDiv.offsetHeight / 2 - nextCircleDiv.offsetHeight / 2) +
              parseFloat(window.getComputedStyle(nextStepDiv).marginTop);
            break;
          case 'compacted':
          case 'horizontal':
            newLength =
              stepDiv.offsetWidth / 2 -
              circleDiv.offsetWidth / 2 +
              (nextStepDiv.offsetWidth / 2 - nextCircleDiv.offsetWidth / 2);
            break;
          case 'compacted-no-line':
          default:
            break;
        }
        setLength(newLength);
      }
    }
  });

  return { length, ref };
};

export default useGetLineLength;
