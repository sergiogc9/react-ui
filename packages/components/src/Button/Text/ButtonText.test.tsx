import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import Button, { ButtonProps } from 'components/Button';
import ButtonText from 'components/Button/Text';
import { ButtonTextProps } from './types';

const buttonTextTestId = 'buttonText';

const renderButton = (props?: Partial<ButtonTextProps>, buttonProps?: Partial<ButtonProps>) =>
	render(
		withTheme(
			<Button {...buttonProps}>
				<ButtonText data-testid={buttonTextTestId} {...props} />
			</Button>
		)
	);

describe('Button component', () => {
	afterEach(cleanup);

	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('should render render correct size', () => {
		renderButton({}, { aspectSize: 'l' });
		const buttonText = screen.getByTestId(buttonTextTestId);
		expect(buttonText).toHaveStyle(`font-size: ${theme.fontSizes[theme.components.button.fontSizes.l as number]}px`);
	});
});
