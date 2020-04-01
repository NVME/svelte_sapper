<script context="module">
	export async function preload(page, session) {	
		
		const  user  = session.user;
		if (!user) {
			return this.redirect(302, 'login');
		}
		return { user };
	}
</script>

<script>
 export let user
</script>
<svelte:head>
	<title>Survey Now </title>
</svelte:head>
<div>
    ! Welcome {user}
</div>


