import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

import { RecursivePartial } from 'theme/global.types';

import { Chip, ChipColors } from './types';

const lightColors: ChipColors = {
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
	transparent: {
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
};

const darkColors: ChipColors = merge<ChipColors, RecursivePartial<ChipColors>>(cloneDeep(lightColors), {
	blue: {
		color: 'blue.100',
		borderColor: {
			default: 'blue.700',
			hover: 'blue.600',
			overlay: 'blue.200'
		},
		background: {
			default: 'blue.700',
			hover: 'blue.600',
			overlay: 'blue.200'
		},
		actionableBg: {
			default: 'transparent',
			hover: 'blue.400'
		}
	},
	green: {
		color: 'green.100',
		borderColor: {
			default: 'green.800',
			hover: 'green.700',
			overlay: 'green.300'
		},
		background: {
			default: 'green.800',
			hover: 'green.700',
			overlay: 'green.400'
		},
		actionableBg: {
			default: 'transparent',
			hover: 'green.500'
		}
	},
	grey: {
		color: 'neutral.800',
		borderColor: {
			default: 'neutral.300',
			hover: 'neutral.200',
			overlay: 'neutral.800'
		},
		background: {
			default: 'neutral.300',
			hover: 'neutral.200',
			overlay: 'neutral.800'
		},
		actionableBg: {
			default: 'transparent',
			hover: 'neutral.200'
		}
	},
	red: {
		color: 'red.100',
		borderColor: {
			default: 'red.800',
			hover: 'red.700',
			overlay: 'red.400'
		},
		background: {
			default: 'red.800',
			hover: 'red.700',
			overlay: 'red.400'
		},
		actionableBg: {
			default: 'transparent',
			hover: 'red.500'
		}
	},
	transparent: {
		color: 'neutral.100',
		borderColor: {
			default: 'neutral.300',
			hover: 'neutral.300',
			overlay: 'neutral.200'
		},
		background: {
			default: 'common.background',
			hover: 'neutral.700',
			overlay: 'neutral.200'
		},
		actionableBg: {
			default: 'transparent',
			hover: 'neutral.600'
		}
	},
	yellow: {
		color: 'yellow.100',
		borderColor: {
			default: 'yellow.600',
			hover: 'yellow.500',
			overlay: 'yellow.200'
		},
		background: {
			default: 'yellow.600',
			hover: 'yellow.500',
			overlay: 'yellow.200'
		},
		actionableBg: {
			default: 'transparent',
			hover: 'yellow.400'
		}
	}
});

const chipTheme: Chip = {
	colors: {
		...lightColors,
		modes: {
			light: lightColors,
			dark: darkColors
		}
	},
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
	}
};

export default chipTheme;
