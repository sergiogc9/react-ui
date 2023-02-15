import { Theme } from '@sergiogc9/react-ui-theme';

export type ResponsiveBreakPoints = Array<keyof Theme['breakpoints']> | 'mobile' | 'tablet' | 'desktop';

export interface ResponsiveProps
	extends React.PropsWithChildren<{
		readonly visibility: ResponsiveBreakPoints;
	}> {}
