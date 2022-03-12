// .storybook/components/DocContainer.tsx
import React from 'react';
import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

export const DocsContainer: React.FC<DocsContainerProps> = ({ children, context }) => {
	const dark = useDarkMode();

	return (
		<BaseContainer
			context={{
				...context,
				parameters: {
					...context.parameters,
					docs: {
						// This is where the magic happens.
						theme: dark ? themes.dark : themes.light
					}
				}
			}}
		>
			{children}
		</BaseContainer>
	);
};
