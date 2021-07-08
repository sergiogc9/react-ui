import React from 'react';
import { DecoratorFn } from '@storybook/react';

const StepperDecorator: DecoratorFn = (story, context) => {
  const [current, setCurrent] = React.useState(2);
  let { current: isSumming } = React.useRef(true);

  context.args.current = current;

  React.useEffect(() => {
    setInterval(
      () =>
        setCurrent((current) => {
          if (isSumming) {
            if (current === 3) {
              isSumming = false;
              return current - 1;
            }
            return current + 1;
          } else {
            if (current === 1) {
              isSumming = true;
              return current + 1;
            }
            return current - 1;
          }
        }),
      2500
    );
  }, []);

  return story(context);
};

export default StepperDecorator;
