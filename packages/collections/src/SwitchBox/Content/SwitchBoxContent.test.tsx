import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import SwitchBoxContent from './index';
import { SwitchBoxContentProps } from './types';

const switchBoxContentTestId = 'switchBoxContent';
const switchBoxContentText = 'Awesome switchBox!';

const renderSwitchBoxContent = (
	props: Partial<SwitchBoxContentProps> = {},
	children: React.ReactNode = switchBoxContentText
) => {
	return render(
		withTheme(
			<SwitchBoxContent data-testid={switchBoxContentTestId} {...props}>
				{children}
			</SwitchBoxContent>
		)
	);
};

describe('SwitchBoxContent component', () => {
	afterEach(cleanup);

	it('should render SwitchBoxContent with custom children', () => {
		const divText = 'AwesomeSwitchBox';
		renderSwitchBoxContent({}, <div>{divText}</div>);

		const switchBox = screen.getByTestId(switchBoxContentTestId);

		expect(screen.getByText(divText)).toBeInTheDocument();
		expect(switchBox.querySelector('span')).not.toBeInTheDocument();
	});
});
