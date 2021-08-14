import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { withTheme } from 'collections/private/utils/tests';

import SwitchBoxChip from './SwitchBoxChip';
import { SwitchBoxChipProps } from './types';

const switchBoxChipTestId = 'switchBoxChip';

const renderSwitchBoxChip = (props: Partial<SwitchBoxChipProps> = {}) => {
	return render(withTheme(<SwitchBoxChip data-testid={switchBoxChipTestId} {...props} />));
};

describe('SwitchBoxChip component', () => {
	afterEach(cleanup);

	it('should render render correct color', () => {
		renderSwitchBoxChip();

		const switchBoxChip = screen.getByTestId(switchBoxChipTestId);

		expect(switchBoxChip).toHaveStyle(`
      display: inline-flex;
      `);
	});
});
