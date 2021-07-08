import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'components/private/utils/tests';
import ModalContent from 'components/Modal/Content';
import { ModalContentProps } from './types';

const modalContentTestId = 'ModalContent';
const text = 'Awesome Content content';

const renderModalContent = (props?: Partial<ModalContentProps>) =>
	render(
		withTheme(
			<ModalContent data-testid={modalContentTestId} {...props}>
				{props?.children || text}
			</ModalContent>
		)
	);

describe('ModalContent component', () => {
	afterEach(cleanup);

	it('should render Content content', () => {
		renderModalContent();
		expect(screen.queryByText(text)).toBeInTheDocument();
	});

	it('should have correct order', () => {
		renderModalContent();
		expect(screen.getByTestId(modalContentTestId)).toHaveStyle('order: 1;');
	});
});
