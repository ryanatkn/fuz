import type {Task} from '@ryanatkn/gro';

export const task: Task = {
	summary: 'generate all fixture expected.json files (mdz + tsdoc)',
	run: async ({invoke_task, log}) => {
		log.info('updating mdz fixtures...');
		await invoke_task('src/test/fixtures/mdz/update');

		log.info('updating tsdoc fixtures...');
		await invoke_task('src/test/fixtures/tsdoc/update');

		log.info('all fixtures updated!');
	},
};
