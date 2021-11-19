import { Chip } from './types';

const chipTheme: Chip = {
	sizes: {
		chip: {
			s: {
				height: '24px',
				borderRadius: '24px',
				px: 1
			},
			m: {
				height: '32px',
				borderRadius: '32px',
				px: 2
			}
		},
		iconWrapper: {
			s: {
				height: '18px',
				width: '18px',
				borderRadius: '18px'
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
			color: 'blue.900',
			borderColor: {
				default: 'blue.100',
				hover: 'blue.50',
				overlay: 'blue.900'
			},
			background: {
				default: 'blue.100',
				hover: 'blue.50',
				overlay: 'blue.900'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'blue.50'
			}
		},
		green: {
			color: 'green.900',
			borderColor: {
				default: 'green.100',
				hover: 'green.50',
				overlay: 'green.900'
			},
			background: {
				default: 'green.100',
				hover: 'green.50',
				overlay: 'green.900'
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
				hover: 'neutral.100',
				overlay: 'neutral.800'
			},
			background: {
				default: 'neutral.50',
				hover: 'neutral.100',
				overlay: 'neutral.800'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'neutral.0'
			}
		},
		red: {
			color: 'red.900',
			borderColor: {
				default: 'red.100',
				hover: 'red.50',
				overlay: 'red.900'
			},
			background: {
				default: 'red.100',
				hover: 'red.50',
				overlay: 'red.900'
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
				hover: 'neutral.300',
				overlay: 'neutral.800'
			},
			background: {
				default: 'neutral.0',
				hover: 'neutral.50',
				overlay: 'neutral.800'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'neutral.50'
			}
		},
		yellow: {
			color: 'yellow.900',
			borderColor: {
				default: 'yellow.100',
				hover: 'yellow.50',
				overlay: 'yellow.900'
			},
			background: {
				default: 'yellow.100',
				hover: 'yellow.50',
				overlay: 'yellow.900'
			},
			actionableBg: {
				default: 'transparent',
				hover: 'yellow.50'
			}
		}
	}
};

export default chipTheme;
