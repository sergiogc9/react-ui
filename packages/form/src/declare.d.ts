import 'styled-components';

import { Theme } from '@sergiogc9/react-ui-theme';

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface DefaultTheme extends Theme {}
}
