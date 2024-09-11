<script lang="ts">
	import { music } from '$lib/data/music';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	// Bit dodgy but works for now
	$: id = $page.url.pathname
		.split('/')
		.filter((value) => Boolean(value))
		.pop();
</script>

{#if id}
	<nav>
		<a href={`${base}/music`}>Music</a> / {music[id]?.name}
	</nav>
{/if}

<style>
	nav {
		padding: 1rem 0;
	}
</style>
