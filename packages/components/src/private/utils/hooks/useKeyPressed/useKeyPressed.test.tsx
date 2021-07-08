import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import useKeyPressed from 'components/private/utils/hooks/useKeyPressed';

type TestProps = { onKeyPressed: () => void };
const TestComponent = ({ onKeyPressed }: TestProps) => {
	useKeyPressed('Escape', onKeyPressed);

	return <div />;
};

const mockOnKeyPressed = jest.fn();
const renderTestComponent = (props: Partial<TestProps> = {}) =>
	render(<TestComponent onKeyPressed={mockOnKeyPressed} {...props} />);

describe('useKeyPressed test', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should not call handler if not specified key pressed', () => {
		renderTestComponent();
		fireEvent.keyDown(document, { key: 'F3' });
		expect(mockOnKeyPressed).toHaveBeenCalledTimes(0);
	});

	it('should call handler if specified key is pressed', () => {
		renderTestComponent();
		fireEvent.keyDown(document, { key: 'Escape' });
		expect(mockOnKeyPressed).toHaveBeenCalledTimes(1);
	});
});
