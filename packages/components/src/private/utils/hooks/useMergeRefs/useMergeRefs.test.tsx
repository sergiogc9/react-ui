import React from 'react';
import { render, screen } from '@testing-library/react';

import useMergeRefs from '.';

const inputTestId = 'input';
const innerButtonTestId = 'inner-button';
const outerButtonTestId = 'outer-button';

const MyComponent = React.forwardRef<HTMLInputElement, any>((props, ref) => {
	const innerRef = React.useRef<HTMLInputElement>(null);
	const mergeRefs = useMergeRefs(ref, innerRef);

	return (
		<>
			<button
				type="button"
				data-testid={innerButtonTestId}
				onClick={() => {
					innerRef.current?.focus();
				}}
			>
				focus the input
			</button>
			<input ref={mergeRefs} data-testid={inputTestId} />
		</>
	);
});

describe('Testing the useCombinedRef hook', () => {
	it('should button focus the input without external reference', () => {
		render(<MyComponent />);
		const { getByTestId } = screen;
		const buttonComponent = getByTestId(innerButtonTestId);

		buttonComponent.click();

		expect(getByTestId(inputTestId)).toHaveFocus();
	});

	it('should focus the input with an external reference', () => {
		const MyOuterComponent = () => {
			const outerInputRef = React.useRef<HTMLInputElement>(null);
			return (
				<>
					<button type="button" data-testid={outerButtonTestId} onClick={() => outerInputRef.current?.focus()}>
						outer button
					</button>
					<MyComponent ref={outerInputRef} />
				</>
			);
		};

		render(<MyOuterComponent />);
		const { getByTestId } = screen;
		const buttonComponent = getByTestId(outerButtonTestId);

		buttonComponent.click();

		expect(getByTestId(inputTestId)).toHaveFocus();
	});
});
