import { redirect } from '@sveltejs/kit';
import { APP_REDIRECTS } from '../redirects';

export const prerender = true;

export async function load({ url }) {
	const pathname = url.pathname;

	if (pathname in APP_REDIRECTS) {
		return redirect(301, (APP_REDIRECTS as any)[pathname]);
	}
}
