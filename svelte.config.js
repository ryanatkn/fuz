import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

// SvelteKit currently can't import local TS directly,
// so it'll be my one project that hardcodes the CSP for now.
//
// import {create_csp_directives} from './dist/csp.js';
// const directives = create_csp_directives({trusted_sources: csp_trusted_sources_of_ryanatkn});
// console.log(`directives`, directives);
// wtf no `as const` equivalent?
/** @type {any[]} */
const csp_trusted_sources_of_ryanatkn = ['*.fuz.dev', '*.ryanatkn.com'];

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	compilerOptions: {runes: true},
	vitePlugin: {inspector: true},
	kit: {
		adapter: adapter(),
		paths: {relative: false}, // use root-absolute paths: https://kit.svelte.dev/docs/configuration#paths
		alias: {$routes: 'src/routes'},
		csp: {
			directives: {
				'default-src': ['none'],
				'base-uri': ['self', ...csp_trusted_sources_of_ryanatkn],
				'script-src': ['self', ...csp_trusted_sources_of_ryanatkn],
				'script-src-elem': ['self', ...csp_trusted_sources_of_ryanatkn],
				'script-src-attr': ['none'],
				'style-src': ['self', 'unsafe-inline', ...csp_trusted_sources_of_ryanatkn],
				'style-src-elem': ['self', 'unsafe-inline', ...csp_trusted_sources_of_ryanatkn],
				'style-src-attr': ['unsafe-inline'],
				'img-src': ['self', 'data:', ...csp_trusted_sources_of_ryanatkn],
				'font-src': ['self', ...csp_trusted_sources_of_ryanatkn],
				'media-src': ['self', ...csp_trusted_sources_of_ryanatkn],
				'manifest-src': ['self', ...csp_trusted_sources_of_ryanatkn],
				'connect-src': ['self', ...csp_trusted_sources_of_ryanatkn],
				'frame-src': ['self', ...csp_trusted_sources_of_ryanatkn],
				'frame-ancestors': ['self', ...csp_trusted_sources_of_ryanatkn],
				'form-action': ['self', ...csp_trusted_sources_of_ryanatkn],
				'worker-src': ['self', ...csp_trusted_sources_of_ryanatkn],
				'object-src': ['none'],
				'upgrade-insecure-requests': true,
			},
		},
	},
};
