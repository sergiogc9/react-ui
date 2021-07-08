import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import useUpdateEffect from '.';

describe('useUpdateEffect hook', () => {
	const getComponent = () => {
		const Component = () => {
			const [number, setNumber] = React.useState(0);
			const [toggle, setToggle] = React.useState(false);
			useUpdateEffect(() => {
				setNumber(n => n + 1);
			}, [toggle]);

			return (
				<>
					<div>{`Number: ${number}`}</div>
					<button onClick={() => setToggle(b => !b)} type="button">
						Sum
					</button>
				</>
			);
		};
		return render(<Component />);
	};

	it('should not sum at mount', () => {
		const { getByText } = getComponent();
		expect(getByText('Number: 0')).toBeInTheDocument();
	});

	it('should sum when dependency changes', () => {
		const { getByText } = getComponent();
		fireEvent.click(getByText('Sum'));
		expect(getByText('Number: 1')).toBeInTheDocument();
		fireEvent.click(getByText('Sum'));
		expect(getByText('Number: 2')).toBeInTheDocument();
	});
});
