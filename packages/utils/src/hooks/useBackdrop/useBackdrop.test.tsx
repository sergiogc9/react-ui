import React from 'react';
import { render, screen } from '@testing-library/react';
import { BaseAnimationProps } from '@sergiogc9/react-ui';

import useBackdrop from '.';

const backdropTestId = 'useBackdropElement';

const MyComponent = ({ isEnabled, props }: { isEnabled: boolean; props?: Partial<BaseAnimationProps> }) => {
	return useBackdrop(isEnabled, { 'data-testid': backdropTestId, ...props } as any);
};

describe('useBackdrop hook', () => {
	it('should not render the backdrop', () => {
		render(<MyComponent isEnabled={false} />);

		expect(screen.queryByTestId(backdropTestId)).toBeNull();
	});

	it('should render the backdrop', () => {
		render(<MyComponent isEnabled />);

		expect(screen.queryByTestId(backdropTestId)).toBeInTheDocument();
	});

	it('should use custom backdrop props', () => {
		render(<MyComponent isEnabled props={{ height: 200 }} />);

		expect(screen.queryByTestId(backdropTestId)).toHaveStyle(`
			height: 200px;
		`);
	});
});
