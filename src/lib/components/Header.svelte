<script lang="ts">
	import { page } from '$app/stores'
	import { SignOut } from '@auth/sveltekit/components'

	const getHrefClass = (route: string) =>
		$page.url.pathname === route ? 'underline' : 'text-gray-400'

	export let user
</script>

<header>
	<nav class="flex gap-x-2">
		<a href="/" class={getHrefClass('/')}>Home</a>
		{#if user}
			<a href="/profile" class={getHrefClass('/profile')}>Profile</a>
			<SignOut signOutPage="logout" className="inline">
				<span slot="submitButton">Logout</span>
			</SignOut>
		{:else}
			<a href="/login" class={getHrefClass('/login')}>Login</a>
		{/if}
	</nav>
</header>
