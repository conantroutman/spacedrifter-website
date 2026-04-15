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
		margin-top: 1rem;
	}

	ol {
		margin: 0;
		padding-left: 0;
		list-style-position: inside;
	}
</style>
