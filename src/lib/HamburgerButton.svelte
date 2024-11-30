<script lang="ts">
	import HamburgerIcon from './icons/HamburgerIcon.svelte';
	import { mobileMenuVisible } from './stores';

	const handleClick = () => {
		mobileMenuVisible.set(true);
	};
</script>

<button on:click={handleClick}><HamburgerIcon /></button>

<style>
	button {
		border: none;
		background: none;
		color: white;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}

	:global(button > svg) {
		height: 32px;
		width: 32px;
	}
</style>
