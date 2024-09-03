<script lang="ts">
	import type { Gig } from './data';

	export let gig: Gig;

	function formatDate(date: Date) {
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		};

		return date.toLocaleDateString(undefined, options);
	}
</script>

<li>
	<div class="gig">
		<div class="">
			{formatDate(gig.date)}
		</div>
		<div class="gig-details">
			<h3 class="gig-name">
				{gig.name}
			</h3>
			<div>
				{#if gig.venue}
					{gig.venue},
				{/if}
				{gig.location}
			</div>
		</div>
	</div>
</li>

<style>
	li {
		container-name: container;
		container-type: inline-size;
	}

	.gig {
		display: grid;
		grid-template-columns: 120px 1fr;
		gap: 2rem;
		font-family: 'Righteous', sans-serif;
	}

	.gig-details {
		display: flex;
		flex-direction: column;
	}

	.gig-name {
		font-weight: 600;
	}

	@container container (width < 600px) {
		.gig {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
