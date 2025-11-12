/**
 * A variable with a complex type.
 */
export const config: {
	timeout: number;
	retries: number;
	endpoints: Array<string>;
} = {
	timeout: 5000,
	retries: 3,
	endpoints: ['https://api.example.com'],
};
