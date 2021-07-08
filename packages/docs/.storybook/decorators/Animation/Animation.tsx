import React from 'react';
import { DecoratorFn } from '@storybook/react';

import { Box, Button } from '@sergiogc9/react-ui';

const AnimationDecorator: DecoratorFn = (story, context) => {
  const [isEnabled, setIsEnabled] = React.useState(true);

  context.args.isEnabled = isEnabled;

  const onRestartAnimation = () => {
    setIsEnabled(false);
    setTimeout(() => setIsEnabled(true), 50);
  };

  return (
    <Box alignItems="center" justifyContent="space-between" minWidth="500px">
      {story(context)}
      <Button aspectSize="s" onClick={onRestartAnimation}>
        Restart animation
      </Button>
    </Box>
  );
};

export default AnimationDecorator;
