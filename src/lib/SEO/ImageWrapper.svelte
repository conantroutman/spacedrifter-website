<div class="wrapper">
	<slot />
</div>

<style>
	:global(.wrapper img) {
		object-fit: contain;
		width: fit-content;
		height: fit-content;
	}
</style>
