import React from 'react';
import { DocsContainer as BaseContainer, DocsContainerProps } from '@storybook/addon-docs';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

const FinalBaseContainer = (props: DocsContainerProps & { children: React.ReactNode }) => {
	return <BaseContainer {...props} />;
};

export const DocsContainer = ({ children, context }: DocsContainerProps & { children: React.ReactNode }) => {
	const dark = useDarkMode();

	return (
		<FinalBaseContainer
			context={{
				...context,
				storyById: id => {
					const storyContext = context.storyById(id);
					return {
						...storyContext,
						parameters: {
							...storyContext?.parameters,
							docs: {
								...storyContext?.parameters?.docs,
								theme: dark ? themes.dark : themes.light
							}
						}
					};
				}
			}}
		>
			{children}
		</FinalBaseContainer>
	);
};
