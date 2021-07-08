import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import ButtonIcon from 'components/Button/Icon';
import { ButtonIconProps } from './types';

const buttonIconTestId = 'buttonIcon';

const renderButton = (props?: Partial<ButtonIconProps>) =>
  render(
    withTheme(
      <ButtonIcon
        data-testid={buttonIconTestId}
        icon="users"
        styling="filled"
        {...props}
      />
    )
  );

describe('Button component', () => {
  afterEach(cleanup);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render render correct size', () => {
    renderButton();
    const buttonIcon = screen.getByTestId(buttonIconTestId);
    expect(buttonIcon).toHaveStyle(`height: 24px;`);
  });

  it('should render render correct custom size', () => {
    renderButton({ size: '300px' });
    const buttonIcon = screen.getByTestId(buttonIconTestId);
    expect(buttonIcon).toHaveStyle(`height: 300px;`);
  });
});
