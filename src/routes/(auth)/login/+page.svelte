<script>
	import { SignIn } from '@auth/sveltekit/components'
</script>

<div>
	<SignIn provider="github" signInPage="login">
		<span slot="submitButton">Login using GitHub</span>
	</SignIn>
</div>
