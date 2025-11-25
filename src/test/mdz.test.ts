import {test, assert, describe, beforeAll} from 'vitest';

import {mdz_parse} from '$lib/mdz.js';
import {
	load_fixtures,
	validate_positions,
	type MdzFixture,
} from './fixtures/mdz/mdz_test_helpers.js';

let fixtures: Array<MdzFixture> = [];

beforeAll(async () => {
	fixtures = await load_fixtures();
});

describe('mdz parser', () => {
	test('all fixtures parse correctly', () => {
		for (const fixture of fixtures) {
			const result = mdz_parse(fixture.input);
			assert.deepEqual(result, fixture.expected, `Fixture "${fixture.name}" failed`);
		}
	});

	test('all fixtures have valid positions', () => {
		for (const fixture of fixtures) {
			const result = mdz_parse(fixture.input);
			validate_positions(result);
		}
	});
});
