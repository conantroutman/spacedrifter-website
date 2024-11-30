<script lang="ts">
	import SocialMedia from './SocialMedia.svelte';
</script>

<footer>
	<SocialMedia />
	<div class="shameless-self-promotion">Website created by John Söderberg</div>
</footer>

<style>
	:root {
		--fade-height: 100px;
	}

	footer {
		/* position: fixed; */
		/* z-index: 10; */
		/* bottom: 0; */
		/* left: 0; */
		/* right: 0; */
		padding: 1rem;
		background-color: inherit;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer::before {
		content: '';
		position: absolute;
		width: 100%;
		height: var(--fade-height);
		background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
		left: 0;
		right: 0;
		top: -100px;
	}

	.shameless-self-promotion {
		margin: auto;
		font-size: 0.85rem;
		margin-top: 1rem;
	}
</style>
