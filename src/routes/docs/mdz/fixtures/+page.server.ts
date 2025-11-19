import {load_fixtures, type Mdz_Fixture} from '../../../../test/fixtures/mdz/mdz_test_helpers.js';

export const load = async (): Promise<{fixtures: Array<Mdz_Fixture>}> => {
	const fixtures = await load_fixtures();
	return {fixtures};
};
