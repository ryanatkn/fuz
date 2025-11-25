// TODO move to module context?

export type AlertStatus = 'inform' | 'help' | 'error';

export interface AlertStatusOptions {
	color: string;
	icon: string | null;
}

export const alert_status_options: Record<AlertStatus, AlertStatusOptions> = {
	inform: {color: 'var(--text_color_3)', icon: '✻'},
	help: {color: 'var(--color_b_5)', icon: '➺'},
	error: {color: 'var(--color_c_5)', icon: '!?'},
};
