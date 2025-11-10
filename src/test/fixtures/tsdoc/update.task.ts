import type {Task} from '@ryanatkn/gro';
import {readdir, readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import ts from 'typescript';

import {tsdoc_parse} from '$lib/tsdoc_helpers.js';

export const task: Task = {
	summary: 'generate expected.json files for tsdoc fixtures',
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
				const input_path = join(fixture_dir, 'input.ts');
				const expected_path = join(fixture_dir, 'expected.json');

				// Read input TypeScript file
				const input = await readFile(input_path, 'utf-8');

				// Create a source file from the input
				const source_file = ts.createSourceFile(
					input_path,
					input,
					ts.ScriptTarget.Latest,
					true,
					ts.ScriptKind.TS,
				);

				// Find the exported function/declaration
				let result = null;
				for (const statement of source_file.statements) {
					// Check for exported declarations
					if (ts.isExportAssignment(statement)) {
						result = tsdoc_parse(statement.expression, source_file);
						break;
					} else if (
						ts.isFunctionDeclaration(statement) ||
						ts.isVariableStatement(statement) ||
						ts.isTypeAliasDeclaration(statement) ||
						ts.isInterfaceDeclaration(statement) ||
						ts.isClassDeclaration(statement)
					) {
						// Check if exported
						const modifiers = ts.getModifiers(statement);
						const is_exported = modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword);

						if (is_exported) {
							result = tsdoc_parse(statement, source_file);
							break;
						}
					}
				}

				// Serialize with custom replacer to handle Maps
				// If result is undefined, use null for valid JSON
				const output =
					JSON.stringify(
						result === undefined ? null : result,
						(key, value) => {
							// Convert Map to object for JSON serialization
							if (value instanceof Map) {
								return Object.fromEntries(value);
							}
							return value;
						},
						'\t',
					) + '\n';

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
