<script lang="ts">
	export let data: string[];
</script>

<div class="container">
	<div>Track List:</div>

	<ol>
		{#each data as track, index}
			<li>{track}</li>
		{/each}
	</ol>
</div>

<style>
	.container {
		padding: 2rem;
	}

	ol {
		padding-left: 0;
	}
</style>
