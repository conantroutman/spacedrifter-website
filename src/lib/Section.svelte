<script lang="ts">
	export let swirlBackground: boolean = false;
	export let backgroundColor: string = '#000';
</script>

<section style:--section-background-color={backgroundColor}>
	{#if swirlBackground}
		<div class:swirl-background={swirlBackground} class="background" />
	{/if}
	<div class="content">
		<slot />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		padding: 4rem 0;
		background-color: var(--section-background-color);
		position: relative;
	}

	.background {
		position: absolute;
		inset: 0;
		opacity: 0.5;
	}

	.swirl-background {
		background-image: url('./swirls.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: max(100vw, 2000px);
		background-blend-mode: multiply;
	}
</style>
