import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';

import ModalClose from '.';
import { ModalCloseProps } from './types';

const modalCloseTestId = 'ModalClose';

const renderModalClose = (props?: Partial<ModalCloseProps>) =>
	render(withTheme(<ModalClose data-testid={modalCloseTestId} {...props} />));

describe('ModalClose component', () => {
	afterEach(cleanup);

	it('should render close absolute positioned', () => {
		renderModalClose();

		expect(screen.getByTestId(modalCloseTestId)).toHaveStyle(`
      position: absolute;
    `);
	});
});
