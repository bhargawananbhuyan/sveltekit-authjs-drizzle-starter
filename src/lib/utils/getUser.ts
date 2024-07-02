import { db } from '$database/client'
import { users } from '$database/schema/users'
import type { Session } from '@auth/sveltekit'
import { eq } from 'drizzle-orm'

export default async function getUser(session: Session) {
	return await db.query.users.findFirst({
		where: eq(users.email, session?.user?.email!)
	})
}
