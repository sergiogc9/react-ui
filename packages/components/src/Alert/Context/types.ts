import { AlertProps } from '../types';

export interface AlertContextData {
	readonly aspectSize: NonNullable<AlertProps['aspectSize']>;
	readonly status: NonNullable<AlertProps['status']>;
}
