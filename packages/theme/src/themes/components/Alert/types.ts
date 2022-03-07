type AlertStatus = 'error' | 'info' | 'success' | 'warning';

type AlertColors = Record<AlertStatus, Record<'bg' | 'icon' | 'text', string>>;

export interface Alert {
	readonly colors: AlertColors;
}
