import { ActionMenu } from './types';

const ActionMenuTheme: ActionMenu = {
	colors: {
		danger: {
			default: {
				background: 'neutral.0',
				color: 'red.500'
			},
			hover: {
				background: 'red.500',
				color: 'neutral.0'
			}
		},
		default: {
			default: {
				background: 'neutral.0',
				color: 'neutral.600'
			},
			hover: {
				background: 'neutral.50',
				color: 'neutral.600'
			}
		}
	}
};

export default ActionMenuTheme;
