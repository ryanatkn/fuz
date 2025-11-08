import type {Task} from '@ryanatkn/gro';
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';

import {mdz_parse} from '$lib/mdz.js';

export const task: Task = {
	summary: 'generate expected.json files for mdz fixtures',
	run: async ({log}) => {
		const fixtures_dir = join(import.meta.dirname);
		const fixture_names = (await readdir(fixtures_dir, {withFileTypes: true}))
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name)
			.sort();

		log.info(`found ${fixture_names.length} fixtures`);

		let generated_count = 0;
		let skipped_count = 0;

		await Promise.all(
			fixture_names.map(async (name) => {
				const fixture_dir = join(fixtures_dir, name);
				const input_path = join(fixture_dir, 'input.mdz');
				const expected_path = join(fixture_dir, 'expected.json');

				const input = await readFile(input_path, 'utf-8');
				const result = mdz_parse(input);
				const output = JSON.stringify(result, null, '\t') + '\n';

				// check if content has changed before writing
				let existing: string | null = null;
				try {
					existing = await readFile(expected_path, 'utf-8');
				} catch {
					// file doesn't exist yet, proceed with write
				}

				if (existing === output) {
					skipped_count++;
					log.info(`skipped ${name}/expected.json`);
				} else {
					generated_count++;
					await writeFile(expected_path, output);
					log.info(`generated ${name}/expected.json`);
				}
			}),
		);

		log.info(`done! generated: ${generated_count}, skipped: ${skipped_count}`);
	},
};
