<script lang="ts">
	export let swirlBackground: boolean = false;
	export let backgroundColor: string = 'inherit';
	export let compact: boolean = false;
</script>

<section
	style:--section-background-color={backgroundColor}
	style:--padding={compact ? '2rem' : '4rem'}
	class:swirl-background={swirlBackground}
>
	<div class="content">
		<slot />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		padding: var(--padding) 0;
		background-color: var(--section-background-color);
		position: relative;
	}

	section.swirl-background::after {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.25;
		background-image: url('$lib/assets/swirls.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: max(100vw, 2000px);
		background-blend-mode: multiply;
	}

	.content {
		position: relative;
		z-index: 2;
	}
</style>
