import { Theme } from '@sergiogc9/react-ui-theme';

export type ResponsiveBreakPoints = Array<keyof Theme['breakpoints']> | 'mobile' | 'tablet' | 'desktop';

export type ResponsiveProps = React.PropsWithChildren<{
	readonly visibility: ResponsiveBreakPoints;
}>;
