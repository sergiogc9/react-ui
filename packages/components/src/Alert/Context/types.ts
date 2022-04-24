import { AlertProps } from '../types';

export type AlertContextData = {
	readonly aspectSize: NonNullable<AlertProps['aspectSize']>;
	readonly status: NonNullable<AlertProps['status']>;
};
