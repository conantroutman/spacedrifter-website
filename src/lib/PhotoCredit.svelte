<script lang="ts">
	export let credit: string | undefined = undefined;
</script>

<div class="wrapper">
	<slot />
	{#if credit}
		<div class="credit">Photo: {credit}</div>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
	}

	.credit {
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.65);
		color: #fff;
		padding: 0.25rem;
		z-index: 10;
	}
</style>
