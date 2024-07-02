import { db } from '$database/client'
import { users } from '$database/schema/users'
import { SvelteKitAuth } from '@auth/sveltekit'
import Github from '@auth/sveltekit/providers/github'
import { eq } from 'drizzle-orm'

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [Github],
	pages: {
		signIn: '/login',
		signOut: '/logout',
		error: '/login/error'
	},
	callbacks: {
		signIn: async ({ account, profile }) => {
			// here we can restrict user sign in for particular specifications
			switch (true) {
				case account?.provider === 'github':
					// check if the user exists
					const user = await db.query.users.findFirst({
						where: eq(users.email, profile?.email!)
					})
					if (!user)
						// if not create a user
						await db.insert(users).values({
							name: profile?.name!,
							email: profile?.email!,
							avatarUrl: profile?.avatar_url! as string
						})
			}

			return true
		}
	}
})
