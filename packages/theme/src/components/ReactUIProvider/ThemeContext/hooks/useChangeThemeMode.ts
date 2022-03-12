import React from 'react';
import { ThemeColorMode } from 'theme/types';

import ThemeContext from '..';

const useChangeThemeMode = () => {
	const { onChangeMode } = React.useContext(ThemeContext);

	return React.useCallback(
		(mode: ThemeColorMode) => {
			onChangeMode(mode);
		},
		[onChangeMode]
	);
};

export { useChangeThemeMode };
