<script lang="ts">
	import Button from './Button.svelte';
	import BandcampIcon from './icons/BandcampIcon.svelte';

	export let href: string;
	export let fullWidth: boolean = false;
</script>

<Button {href} target="_blank" {fullWidth} color="#1da0c3"
	><span>Bandcamp <BandcampIcon /></span></Button
>

<style>
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	:global(span svg) {
		height: 1.5rem;
	}
</style>
