import { handle as authJsHandle } from '$auth'
import { redirect, type Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

export const authGuardHandle: Handle = async ({ event, resolve }) => {
	const session = await event.locals.auth()
	const { pathname, search, searchParams } = event.url

	switch (true) {
		// go to login page if the user routes to a protected route
		case !session?.user && new RegExp('^/profile').test(pathname):
			throw redirect(301, `/login?redirectTo=${pathname + search}&error=Unauthorized`)

		// if the user is logged in, redirect him to the `redirectTo` path or home
		case session?.user && new RegExp('^/login').test(pathname):
			const redirectTo = searchParams.get('redirectTo')
			if (redirectTo) throw redirect(301, `/${redirectTo.slice(1)}`)
			throw redirect(301, '/')
	}

	return resolve(event)
}

export const handle: Handle = sequence(authJsHandle, authGuardHandle)
