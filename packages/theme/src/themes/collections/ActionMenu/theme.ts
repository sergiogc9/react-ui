import { ActionMenu } from './types';

const actionMenuTheme: ActionMenu = {
	colors: {
		danger: {
			default: {
				background: '',
				color: ''
			},
			hover: {
				background: '',
				color: ''
			}
		},
		default: {
			default: {
				background: '',
				color: ''
			},
			hover: {
				background: '',
				color: ''
			}
		},
		modes: {
			light: {
				danger: {
					default: {
						background: '',
						color: 'red.500'
					},
					hover: {
						background: 'red.500',
						color: 'neutral.0'
					}
				},
				default: {
					default: {
						background: '',
						color: 'neutral.600'
					},
					hover: {
						background: 'neutral.50',
						color: ''
					}
				}
			},
			dark: {
				danger: {
					default: {
						background: '',
						color: 'red.500'
					},
					hover: {
						background: 'red.500',
						color: 'neutral.0'
					}
				},
				default: {
					default: {
						background: '',
						color: 'neutral.200'
					},
					hover: {
						background: 'neutral.700',
						color: ''
					}
				}
			}
		}
	}
};

export default actionMenuTheme;
