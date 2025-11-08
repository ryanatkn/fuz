import type {Task} from '@ryanatkn/gro';
import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

import {mdz_parse} from '$lib/mdz.js';

export const task: Task = {
	summary: 'generate expected.json files for mdz fixtures',
	run: async ({log}) => {
		const fixtures_dir = join(import.meta.dirname);
		const fixture_names = readdirSync(fixtures_dir, {withFileTypes: true})
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name)
			.sort();

		log.info(`found ${fixture_names.length} fixtures`);

		for (const name of fixture_names) {
			const fixture_dir = join(fixtures_dir, name);
			const input_path = join(fixture_dir, 'input.mdz');
			const expected_path = join(fixture_dir, 'expected.json');

			const input = readFileSync(input_path, 'utf-8');
			const result = mdz_parse(input);
			const output = JSON.stringify(result, null, '\t');

			writeFileSync(expected_path, output + '\n');
			log.info(`generated ${name}/expected.json`);
		}

		log.info('done!');
	},
};
