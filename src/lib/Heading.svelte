<script lang="ts">
	type Level = 1 | 2 | 3 | 4 | 5;

	export let level: Level = 1;
	export let centered: boolean = false;
	export let gradient: boolean = true;
</script>

{#if level === 1}
	<h1 class:centered class:gradient><slot /></h1>
{:else if level === 2}
	<h2 class:centered class:gradient><slot /></h2>
{:else if level === 3}
	<h3 class:centered class:gradient><slot /></h3>
{:else if level === 4}
	<h4 class:centered class:gradient><slot /></h4>
{:else if level === 5}
	<h5 class:centered class:gradient><slot /></h5>
{/if}

<style>
	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	h4 {
		font-size: 1.25rem;
	}

	h5 {
		font-size: 1.15rem;
	}

	.centered {
		text-align: center;
	}

	.gradient {
		background: var(--wtcf-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
