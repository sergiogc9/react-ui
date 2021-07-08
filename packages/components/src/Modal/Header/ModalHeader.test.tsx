import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import ModalHeader from 'components/Modal/Header';
import { ModalHeaderProps } from './types';

const modalHeaderTestId = 'ModalHeader';
const text = 'Awesome header content';

const renderModalHeader = (props?: Partial<ModalHeaderProps>) =>
  render(
    withTheme(
      <ModalHeader data-testid={modalHeaderTestId} {...props}>
        {props?.children || text}
      </ModalHeader>
    )
  );

describe('ModalHeader component', () => {
  afterEach(cleanup);

  it('should render header content', () => {
    renderModalHeader();
    expect(screen.queryByText(text)).toBeInTheDocument();
  });

  it('should have correct order', () => {
    renderModalHeader();
    expect(screen.getByTestId(modalHeaderTestId)).toHaveStyle('order: 0;');
  });
});
