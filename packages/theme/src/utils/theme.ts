import { DefaultTheme, ThemedStyledProps } from 'styled-components';
import get from 'lodash/get';

import { TokenPath, TokenPathValue } from 'theme/types';

// eslint-disable-next-line @typescript-eslint/ban-types
type StyledComponentProps = ThemedStyledProps<{}, DefaultTheme>;

export function themeGet<P extends TokenPath<DefaultTheme>>(path: P) {
	function getTokenValue(props: StyledComponentProps): TokenPathValue<DefaultTheme, P> {
		return get(props.theme, path) as unknown as TokenPathValue<DefaultTheme, P>;
	}
	return getTokenValue;
}
