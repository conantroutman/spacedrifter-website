<script lang="ts">
	export let href: string;
	export let fullWidth: boolean = false;
</script>

<a {href} class:full-width={fullWidth} target="_blank"><slot /></a>

<style>
	a {
		font-family: 'Righteous', sans-serif;
		display: block;
		background-color: black;
		color: white;
		padding: 1rem 2rem;
		text-align: center;
		width: fit-content;
		text-decoration: none;
		box-sizing: border-box;
	}

	.full-width {
		width: 100%;
	}
</style>
