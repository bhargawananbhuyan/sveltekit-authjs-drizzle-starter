import getUser from '$lib/utils/getUser'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth()

	let user
	if (session) user = await getUser(session)

	return { session, user }
}
