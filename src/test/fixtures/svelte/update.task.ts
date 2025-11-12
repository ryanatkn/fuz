import type {Task} from '@ryanatkn/gro';
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import ts from 'typescript';
import {svelte2tsx} from 'svelte2tsx';

import {svelte_analyze_component} from '$lib/svelte_helpers.js';
import {ts_create_program} from '$lib/ts_helpers.js';
import {fixture_name_to_component_name} from './svelte_test_helpers.js';

export const task: Task = {
	summary: 'generate expected.json files for svelte fixtures',
	run: async ({log}) => {
		const fixtures_dir = join(import.meta.dirname);
		const fixture_names = (await readdir(fixtures_dir, {withFileTypes: true}))
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name)
			.sort();

		log.info(`found ${fixture_names.length} fixtures`);

		// Create a TypeScript program to get a type checker
		const program = ts_create_program(log);
		if (!program) {
			throw new Error('Failed to create TypeScript program - cannot generate svelte fixtures');
		}
		const checker = program.getTypeChecker();

		let generated_count = 0;
		let skipped_count = 0;

		await Promise.all(
			fixture_names.map(async (name) => {
				const fixture_dir = join(fixtures_dir, name);
				const input_path = join(fixture_dir, 'input.svelte');
				const expected_path = join(fixture_dir, 'expected.json');

				// Read input Svelte file
				const svelte_source = await readFile(input_path, 'utf-8');

				// Check if component uses TypeScript
				const is_ts_file = svelte_source.includes('lang="ts"');

				// Transform Svelte to TS
				const ts_result = svelte2tsx(svelte_source, {
					filename: input_path,
					isTsFile: is_ts_file,
					emitOnTemplateError: true,
				});

				// Create a temporary source file from the original Svelte content for JSDoc extraction
				const temp_source = ts.createSourceFile(
					input_path,
					svelte_source,
					ts.ScriptTarget.Latest,
					true,
				);

				// Extract component name from fixture name
				const component_name = fixture_name_to_component_name(name);

				// Analyze the component
				const result = svelte_analyze_component(
					ts_result.code,
					temp_source,
					checker,
					component_name,
				);

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
