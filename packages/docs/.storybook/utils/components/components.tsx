import React from 'react';
import merge from 'lodash/merge';
import {
	ArgTypes as SBArgTypes,
	Canvas as SBCanvas,
	Controls as SBControls,
	Meta as SBMeta,
	Story as SBStory
} from '@storybook/addon-docs';
import { getExcludedProps } from 'storybook/parameters';
import theme, { ReactUIProvider } from '@sergiogc9/react-ui-theme';
import { Alert, AlertProps, Box } from '@sergiogc9/react-ui';

export const Canvas = SBCanvas;
export const Controls = SBControls;
export const Meta = SBMeta;
export const Story = SBStory;

type ArgTypesProps = React.ComponentProps<typeof SBArgTypes>;

export const ArgTypes: React.FC<ArgTypesProps> = props => {
	const { include = [], exclude = [], ...rest } = props;

	const excludedProps = getExcludedProps(include as string[], exclude as string[]);

	return <SBArgTypes {...rest} exclude={excludedProps} />;
};

type StorybookAlertProps = Pick<AlertProps, 'aspectSize' | 'status'> & { text: string };

export const StorybookAlert = ({ aspectSize = 's', status = 'info', text }: StorybookAlertProps) => {
	return (
		<ReactUIProvider theme={theme}>
			<Box py={1}>
				<Alert aspectSize={aspectSize} status={status} width="fit-content">
					<Alert.Icon />
					<Alert.Text>{text}</Alert.Text>
				</Alert>
			</Box>
		</ReactUIProvider>
	);
};
