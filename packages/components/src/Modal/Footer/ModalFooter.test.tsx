import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import ModalFooter from 'components/Modal/Footer';
import { ModalFooterProps } from './types';

const modalFooterTestId = 'ModalFooter';
const text = 'Awesome Footer content';

const renderModalFooter = (props?: Partial<ModalFooterProps>) =>
	render(
		withTheme(
			<ModalFooter data-testid={modalFooterTestId} {...props}>
				{props?.children || text}
			</ModalFooter>
		)
	);

describe('ModalFooter component', () => {
	afterEach(cleanup);

	it('should render Footer content', () => {
		renderModalFooter();
		expect(screen.queryByText(text)).toBeInTheDocument();
	});

	it('should have correct order', () => {
		renderModalFooter();
		expect(screen.getByTestId(modalFooterTestId)).toHaveStyle('order: 2;');
	});
});
