import {Unreachable_Error} from '@ryanatkn/belt/error.js';

export type Fuz_Project_Name =
	| 'fuz'
	| 'fuz_template'
	| 'fuz_blog'
	| 'fuz_gitops'
	| 'fuz_code'
	| 'fuz_mastodon';

/**
 * Returns the color for one of the Fuz projects.
 */
export const to_fuz_project_color = (name: Fuz_Project_Name): string => {
	switch (name) {
		case 'fuz':
			return '#6a3e1b';
		case 'fuz_template':
			return '#f75e22';
		case 'fuz_blog':
			return '#d22d2d';
		case 'fuz_gitops':
			return '#397fc6';
		case 'fuz_code':
			return '#e03e81';
		case 'fuz_mastodon':
			return '#6a40bf';
		default:
			throw new Unreachable_Error(name);
	}
};

/**
 * Returns the alt text for one of the Fuz projects.
 */
export const to_fuz_project_color_name = (name: Fuz_Project_Name): string => {
	switch (name) {
		case 'fuz':
			return 'blue';
		case 'fuz_template':
			return 'orange';
		case 'fuz_blog':
			return 'red';
		case 'fuz_gitops':
			return 'blue';
		case 'fuz_code':
			return 'pink';
		case 'fuz_mastodon':
			return 'purple';
		default:
			throw new Unreachable_Error(name);
	}
};
