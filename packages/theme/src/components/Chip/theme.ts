import { Chip } from './types';

const chipTheme: Chip = {
	sizes: {
		chip: {
			s: {
				height: '24px',
				borderRadius: '24px',
				px: 2,
				py: 0,
				fontSize: 0
			},
			m: {
				height: '32px',
				borderRadius: '32px',
				px: 2,
				py: 1,
				fontSize: 0
			}
		},
		iconWrapper: {
			s: {
				height: '16px',
				width: '16px',
				borderRadius: '16px'
			},
			m: {
				height: '24px',
				width: '24px',
				borderRadius: '24px'
			}
		}
	},
	colors: {
		blue: {
			color: 'primary.800',
			borderColor: {
				default: 'primary.100',
				hover: 'primary.50'
			},
			background: {
				default: 'primary.100',
				hover: 'primary.50'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'primary.50'
			}
		},
		green: {
			color: 'green.900',
			borderColor: {
				default: 'green.100',
				hover: 'green.50'
			},
			background: {
				default: 'green.100',
				hover: 'green.50'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'green.50'
			}
		},
		grey: {
			color: 'neutral.800',
			borderColor: {
				default: 'neutral.50',
				hover: 'neutral.100'
			},
			background: {
				default: 'neutral.50',
				hover: 'neutral.100'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'neutral.0'
			}
		},
		red: {
			color: 'red.700',
			borderColor: {
				default: 'red.100',
				hover: 'red.50'
			},
			background: {
				default: 'red.100',
				hover: 'red.50'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'red.50'
			}
		},
		white: {
			color: 'neutral.800',
			borderColor: {
				default: 'neutral.300',
				hover: 'neutral.300'
			},
			background: {
				default: 'neutral.0',
				hover: 'neutral.50'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'neutral.50'
			}
		},
		yellow: {
			color: 'neutral.800',
			borderColor: {
				default: 'yellow.100',
				hover: 'yellow.50'
			},
			background: {
				default: 'yellow.100',
				hover: 'yellow.50'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'yellow.50'
			}
		}
	}
};

export default chipTheme;
