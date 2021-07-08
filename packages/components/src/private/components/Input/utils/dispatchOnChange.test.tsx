import { render, screen } from '@testing-library/react';
import React, { useRef, useState } from 'react';
import dispatchOnChange from './dispatchOnChange';

const newValue = 'Hello Change event';

const DummyComponent = ({ onChange }: { onChange: React.ChangeEventHandler<HTMLInputElement> | undefined }) => {
	const inputRef = useRef(null);
	const [value, setValue] = useState('');
	return (
		<>
			<input ref={inputRef} onChange={onChange} data-testid="input" value={value} />
			<button
				onClick={() => {
					setValue(newValue);
					dispatchOnChange(inputRef, newValue);
				}}
				data-testid="button"
				type="button"
			>
				invoke input onchange and change the value
			</button>
		</>
	);
};
describe('Testing dispatchOnChange function', () => {
	const eventChangeValueSpy = jest.fn();
	const onChangeSpy = jest.fn(event => eventChangeValueSpy({ value: event.target.value, type: event.type }));

	it('should invoke the onChange and update the input value', () => {
		render(<DummyComponent onChange={onChangeSpy} />);

		const { getByTestId } = screen;
		const button = getByTestId('button');
		const input = getByTestId('input');

		expect(input).toHaveValue('');

		button.click();

		expect(onChangeSpy).toHaveBeenCalledTimes(1);
		expect(eventChangeValueSpy).toHaveBeenCalledWith({
			value: newValue,
			type: 'change'
		});
		expect(input).toHaveValue(newValue);
	});
});
