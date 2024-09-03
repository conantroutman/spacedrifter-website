<script>
	import Button from './Button.svelte';
</script>

<div class="query">
	<div class="container">
		<div class="cover">
			<img src="https://f4.bcbits.com/img/a0275814556_16.jpg" alt="When the Colors Fade" />
		</div>
		<div class="cta">
			<h2>Debut LP "When the Colors Fade" Out Now!</h2>
			<div class="buttons">
				<Button fullWidth href="https://spacedrifterband.bandcamp.com/album/when-the-colors-fade"
					>Buy Vinyl</Button
				>
				<Button fullWidth href="https://spacedrifterband.bandcamp.com/album/when-the-colors-fade"
					>Buy Digital</Button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.query {
		container: wtcf-container / inline-size;
	}

	.container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		box-sizing: border-box;
		gap: 2rem;
	}

	@container wtcf-container (width < 600px) {
		.container {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		h2 {
			text-align: center;
		}
	}

	.cta {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	.cover {
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
	}
</style>
