import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { withTheme } from 'components/private/utils/tests';
import Popover from 'components/Popover';
import { PopoverProps } from './types';

const popoverTestId = 'Popover';
const contentText = 'Awesome content';
const triggerText = 'Awesome trigger';

const renderPopover = (props?: Partial<PopoverProps>, trigger?: string) =>
  render(
    withTheme(
      <Popover data-testid={popoverTestId} {...props}>
        <Popover.Trigger>{triggerText}</Popover.Trigger>
        <Popover.Content trigger={trigger}>{contentText}</Popover.Content>
      </Popover>
    )
  );

describe('Popover component', () => {
  afterEach(cleanup);

  it('should render trigger element', () => {
    renderPopover();
    expect(screen.getByText(triggerText)).toBeInTheDocument();
  });

  it('should not render content by default', () => {
    renderPopover();
    expect(screen.queryByText(contentText)).toBeNull();
  });

  it('should render content if hovering the trigger', async () => {
    renderPopover();
    const trigger = screen.getByText(triggerText);
    userEvent.hover(trigger);
    await waitFor(() => expect(screen.getByText(contentText)).toBeVisible());
  });

  it('should render content if clicking the trigger', async () => {
    renderPopover({}, 'click');
    const trigger = screen.getByText(triggerText);
    userEvent.click(trigger);
    await waitFor(() => expect(screen.getByText(contentText)).toBeVisible());
  });
});
