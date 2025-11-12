import type {Task} from '@ryanatkn/gro';
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import ts from 'typescript';

import {
	type Ts_Fixture_Category,
	create_test_program,
	extract_identifier_from_source,
} from './ts_test_helpers.js';

export const task: Task = {
	summary: 'generate expected.json files for ts fixtures',
	run: async ({log}) => {
		const fixtures_dir = join(import.meta.dirname);
		const categories = await readdir(fixtures_dir, {withFileTypes: true});
		const category_names = categories
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name as Ts_Fixture_Category)
			.sort();

		log.info(`found ${category_names.length} categories`);

		let generated_count = 0;
		let skipped_count = 0;

		for (const category of category_names) {
			const category_dir = join(fixtures_dir, category);
			const fixture_dirs = await readdir(category_dir, {withFileTypes: true});
			const fixture_names = fixture_dirs
				.filter((dirent) => dirent.isDirectory())
				.map((dirent) => dirent.name)
				.sort();

			log.info(`processing ${fixture_names.length} fixtures in category "${category}"`);

			await Promise.all(
				fixture_names.map(async (name) => {
					const fixture_dir = join(category_dir, name);
					const input_path = join(fixture_dir, 'input.ts');
					const expected_path = join(fixture_dir, 'expected.json');

					// Read input TypeScript file
					const input = await readFile(input_path, 'utf-8');

					// Create a source file
					const source_file = ts.createSourceFile(
						input_path,
						input,
						ts.ScriptTarget.Latest,
						true,
						ts.ScriptKind.TS,
					);

					// Create a program with this source file for type checking
					const {checker} = create_test_program(source_file, input_path);

					// Extract the identifier from the source file
					const result = extract_identifier_from_source(source_file, checker, category);

					// Serialize to JSON
					const output = JSON.stringify(result, null, '\t') + '\n';

					// Check if content has changed before writing
					let existing: string | null = null;
					try {
						existing = await readFile(expected_path, 'utf-8');
					} catch {
						// File doesn't exist yet, proceed with write
					}

					if (existing === output) {
						skipped_count++;
						log.info(`skipped ${category}/${name}/expected.json`);
					} else {
						generated_count++;
						await writeFile(expected_path, output);
						log.info(`generated ${category}/${name}/expected.json`);
					}
				}),
			);
		}

		log.info(`done! generated: ${generated_count}, skipped: ${skipped_count}`);
	},
};
