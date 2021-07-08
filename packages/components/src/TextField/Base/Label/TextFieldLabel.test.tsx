import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import theme from '@sergiogc9/react-ui-theme';

import { withTheme } from 'components/private/utils/tests';
import TextFieldLabel from '.';
import { TextFieldLabelProps } from './types';

const textFieldLabelTestId = 'TextFieldLabel';
const text = 'Awesome Label';

const renderTextFieldLabel = (props?: Partial<TextFieldLabelProps>) =>
	render(
		withTheme(
			<TextFieldLabel aspectSize="m" data-testid={textFieldLabelTestId} labelPosition="inside" value="" {...props}>
				{text}
			</TextFieldLabel>
		)
	);

describe('TextFieldLabel component', () => {
	afterEach(cleanup);

	it('should render text', () => {
		renderTextFieldLabel();
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	it('should render styles without label or placeholder', () => {
		renderTextFieldLabel();

		expect(screen.getByTestId(textFieldLabelTestId)).toHaveStyle(`
      font-size: ${theme.fontSizes[2]}px;
    `);
	});

	it('should render styles with inside label and placeholder', () => {
		renderTextFieldLabel({ placeholder: 'Enter text' });

		expect(screen.getByTestId(textFieldLabelTestId)).toHaveStyle(`
      font-size: ${theme.fontSizes[0]}px;
      transform: translateY(-10px);
    `);
	});

	it('should render styles with outside label', () => {
		renderTextFieldLabel({ labelPosition: 'outside', value: 'Text!' });

		expect(screen.getByTestId(textFieldLabelTestId)).toHaveStyle(`
      font-size: ${theme.fontSizes[0]}px;
      padding-left: 0px;
      pointer-events: inherit;
      transform: translate(-16px,calc(-50% - 10px));
    `);
	});

	it('should render styles with outside label and leftContent', () => {
		renderTextFieldLabel({
			labelPosition: 'outside',
			leftContent: <div />,
			value: 'Text!'
		});

		expect(screen.getByTestId(textFieldLabelTestId)).toHaveStyle(`
      font-size: ${theme.fontSizes[0]}px;
      padding-left: 0px;
      pointer-events: inherit;
      transform: translate(-48px,calc(-50% - 10px));
    `);
	});

	it('should not print error color if no value nor placeholder is provided', () => {
		renderTextFieldLabel({ isError: true });

		expect(screen.getByTestId(textFieldLabelTestId)).toHaveStyle(`
      color: ${theme.colors.neutral['600']};
    `);
	});

	it('should print error color if placeholder is provided', () => {
		renderTextFieldLabel({ isError: true, placeholder: 'some placeholder' });

		expect(screen.getByTestId(textFieldLabelTestId)).toHaveStyle(`
      color: ${theme.colors.red['500']};
    `);
	});

	it('should print error color if value is provided', () => {
		renderTextFieldLabel({ isError: true, value: 'some placeholder' });

		expect(screen.getByTestId(textFieldLabelTestId)).toHaveStyle(`
      color: ${theme.colors.red['500']};
    `);
	});
});
