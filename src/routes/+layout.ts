export const prerender = true;
// TODO BLOCK This appears to cause a bug in Vite with Prism via @ryanatkn/fuz_code
// that requires deleting the Vite cache directory
// (deleting `node_modules/.vite` is the only solution I can find,
// restarting the dev server and hard reloading the browser doesn't work ),
// though I don't see an open issue, only the closed one
// if for some reason this isn't deleted, be sure to add a `noscript` tag
export const ssr = false;
