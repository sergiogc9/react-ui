import { Avatar } from './types';
import iconTheme from '../Icon/theme';

const avatarTheme: Avatar = {
	radii: {
		rounded: '8px'
	},
	fontSizes: {
		s: 0,
		m: 2,
		l: 7
	},
	iconSizes: {
		s: iconTheme.sizes.m,
		m: iconTheme.sizes.l,
		l: iconTheme.sizes.xl
	},
	sizes: {
		s: 32,
		m: 48,
		l: 80
	}
};

export default avatarTheme;
