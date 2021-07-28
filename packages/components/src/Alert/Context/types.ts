import { AlertProps } from '../types';

export type AlertContextData = {
	readonly status: NonNullable<AlertProps['status']>;
};
