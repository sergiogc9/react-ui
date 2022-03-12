import React from 'react';
import { DefaultTheme } from 'styled-components';

export type ReactUIProviderProps = {
	readonly children: React.ReactNode;
	readonly theme: DefaultTheme;
};
