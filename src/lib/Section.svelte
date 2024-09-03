<script lang="ts">
	export let backgroundImg: string | undefined = undefined;
</script>

<section>
	<slot />
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		padding: 4rem 0;
		background-color: #5f5f5f;
	}

	.background-image {
	}
</style>
