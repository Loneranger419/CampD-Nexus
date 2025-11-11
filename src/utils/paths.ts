export const withBase = (path: string) => {
	if (!path) return import.meta.env.BASE_URL;

	// Leave absolute URLs and mailto links untouched.
	if (/^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(path) || path.startsWith('mailto:')) {
		return path;
	}

	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
};


