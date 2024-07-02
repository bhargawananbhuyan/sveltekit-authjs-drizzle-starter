<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<div>
	<pre class="text-sm">{JSON.stringify(data.user, null, 2)}</pre>
</div>
