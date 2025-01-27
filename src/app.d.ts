// See https://kit.svelte.dev/docs/types#app

import type { Session } from '@auth/sveltekit'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: Session | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
