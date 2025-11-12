import type {Task} from '@ryanatkn/gro';
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import ts from 'typescript';

import {
	create_test_program,
	extract_identifier_from_source,
	infer_category_from_name,
} from './ts_test_helpers.js';

export const task: Task = {
	summary: 'generate expected.json files for ts fixtures',
	run: async ({log}) => {
		const fixtures_dir = join(import.meta.dirname);
		const entries = await readdir(fixtures_dir, {withFileTypes: true});
		const fixture_names = entries
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name)
			.sort();

		log.info(`found ${fixture_names.length} fixtures`);

		let generated_count = 0;
		let skipped_count = 0;

		await Promise.all(
			fixture_names.map(async (name) => {
				const fixture_dir = join(fixtures_dir, name);
				const input_path = join(fixture_dir, 'input.ts');
				const expected_path = join(fixture_dir, 'expected.json');

				// Infer category from fixture name
				const category = infer_category_from_name(name);

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
