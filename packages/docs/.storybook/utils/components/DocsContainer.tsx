import React, { PropsWithChildren } from 'react';
import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

export const DocsContainer = (props: PropsWithChildren<DocsContainerProps>) => {
	const dark = useDarkMode();
	return (
		<BaseContainer context={props.context} theme={dark ? themes.dark : themes.light}>
			{props.children}
		</BaseContainer>
	);
};
