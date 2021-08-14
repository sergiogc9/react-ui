import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'collections/private/utils/tests';

import SwitchBoxIcon from './SwitchBoxIcon';
import { SwitchBoxIconProps } from './types';

const switchBoxIconTestId = 'switchBoxIcon';

const renderSwitchBoxIcon = (props: Partial<SwitchBoxIconProps> = {}) => {
	return render(
		withTheme(<SwitchBoxIcon data-testid={switchBoxIconTestId} icon="users" styling="filled" {...props} />)
	);
};

describe('SwitchBoxIcon component', () => {
	afterEach(cleanup);

	it('should render render correct color', () => {
		renderSwitchBoxIcon();

		const switchBoxIcon = screen.getByTestId(switchBoxIconTestId);

		expect(switchBoxIcon).toHaveStyle(`
      fill: ${theme.colors.neutral['500']};
      `);
	});
});
