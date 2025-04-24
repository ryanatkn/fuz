// TODO BLOCK move this where? customize with a filter/mapping callback?

/**
 * Generates a strict Content Security Policy with default-src 'none'
 *
 * Takes a pre-formatted string of trusted sources, which could include
 * domains, nonces, hashes, or any valid CSP source specification.
 *
 * @param trusted - Pre-formatted string of trusted sources
 * @returns A strict CSP string with each directive on a new line
 */
export const generate_strict_csp = (trusted: string): string => {
	// Build CSP with categories of directives
	const cspParts = [
		// Core defaults
		`default-src 'none'`, // Block everything by default
		`base-uri 'self'`, // Prevent base tag hijacking

		// Script controls
		`script-src 'self'`, // Main script directive
		`script-src-elem 'self'`, // Script elements (standalone scripts)
		`script-src-attr 'none'`, // Block scripts in HTML attributes

		// Content and resources
		`style-src 'self' 'unsafe-inline'`, // CSS styles (including inline)
		`img-src 'self' ${trusted} data:`, // Images (including data: URIs)
		`font-src 'self'`, // Fonts
		`media-src 'self' ${trusted}`, // Audio/video
		`manifest-src 'self'`, // Web app manifests

		// Network and embedding
		`connect-src 'self' ${trusted}`, // XHR, fetch, WebSockets
		`frame-src 'self'`, // Frames/iframes
		`frame-ancestors 'none'`, // Prevent clickjacking
		`form-action 'self'`, // Form submission targets
		`worker-src 'self'`, // Web workers

		// Extra security controls
		`object-src 'none'`, // Block plugins (Flash, Java, etc.)
		`upgrade-insecure-requests`, // Upgrade HTTP to HTTPS
		`report-uri /csp-violation-report`, // Report violations (optional)
	];

	return cspParts.join(';\n');
};
