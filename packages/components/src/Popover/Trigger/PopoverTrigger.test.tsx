import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import PopoverContext from '../Context';
import { PopoverContextData } from '../Context/types';
import Popover from '..';
import { PopoverTriggerProps } from './types';

const popoverTriggerTestId = 'PopoverTrigger';
const text = 'Awesome trigger';

const ref =
  React.createRef<HTMLDivElement>() as React.MutableRefObject<HTMLElement>;
const defaultContextData: PopoverContextData = {
  popoverRef: ref
};

const renderPopoverTrigger = (
  props: Partial<PopoverTriggerProps> = {},
  contextData: Partial<PopoverContextData> = {}
) =>
  render(
    withTheme(
      <PopoverContext.Provider
        value={{ ...defaultContextData, ...contextData }}
      >
        <Popover.Trigger data-testid={popoverTriggerTestId} {...props}>
          {text}
        </Popover.Trigger>
      </PopoverContext.Provider>
    )
  );

describe('PopoverTrigger component', () => {
  afterEach(cleanup);

  it('should render content', () => {
    renderPopoverTrigger();
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('should pass ref correctly', () => {
    renderPopoverTrigger();
    expect(ref.current!.innerHTML).toEqual(text);
  });
});
