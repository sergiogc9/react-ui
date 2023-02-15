import React from 'react';
import { DefaultTheme } from 'styled-components';

export interface ReactUIProviderProps {
	readonly children: React.ReactNode;
	readonly theme: DefaultTheme;
}
