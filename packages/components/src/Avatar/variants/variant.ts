import { variant } from 'styled-system';
import { Theme } from '@sergiogc9/react-ui-theme';

import { AvatarProps } from 'components/Avatar/types';

export default (theme: Theme) => {
	const generateCSS = (variantProp: AvatarProps['variant']) => {
		const radiusHash: Record<NonNullable<AvatarProps['variant']>, string | string[]> = {
			circle: '100%',
			rounded: theme.components.avatar.radii.rounded
		};

		return {
			borderRadius: radiusHash[variantProp!]
		};
	};

	return variant({
		prop: 'variant',
		variants: {
			circle: generateCSS('circle'),
			rounded: generateCSS('rounded')
		}
	});
};
