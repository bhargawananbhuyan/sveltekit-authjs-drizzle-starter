<script lang="ts">
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import '../app.css'
	import type { LayoutServerData } from './$types'

	export let data: LayoutServerData
</script>

<div class="min-h-screen flex flex-col p-4">
	<Header user={data?.session?.user} />
	<main class="flex-grow my-2">
		<slot />
	</main>
	<Footer />
</div>
