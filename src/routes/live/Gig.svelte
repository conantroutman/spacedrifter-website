<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Heading from '$lib/Heading.svelte';
	import type { Gig } from './data';

	export let gig: Gig;

	function getDate(date: Date) {
		const options: Intl.DateTimeFormatOptions = {
			day: '2-digit',
			month: 'short'
		};

		return date.toLocaleDateString(undefined, options);
	}

	function getYear(date: Date) {
		const options: Intl.DateTimeFormatOptions = {
			year: 'numeric'
		};

		return date.toLocaleDateString(undefined, options);
	}

	const currentDate = new Date();
</script>

<li>
	<div class="container">
		<div class="date">
			<span>{getDate(gig.date)}</span>
			<span>{getYear(gig.date)}</span>
		</div>
		<div class="body">
			<div class="details">
				<Heading level={4}>{gig.name}</Heading>
				<div class="location">
					{#if gig.venue}
						{gig.venue},
					{/if}
					{gig.location}
				</div>
			</div>
		</div>
		{#if gig.link && gig.date >= currentDate}
			<div class="button-container">
				<Button href={gig.link.href} fullWidth>
					{#if gig.link.type === 'info'}
						Info
					{:else if gig.link.type === 'tickets'}
						Tickets
					{/if}
				</Button>
			</div>
		{/if}
	</div>
</li>

<style>
	li {
		container-name: container;
		container-type: inline-size;
		border-bottom: rgba(255, 255, 255, 0.5) 1px solid;
	}

	.container {
		display: grid;
		grid-template-columns: 240px 1fr 200px;
		gap: var(--spacing-lg);
		border-bottom: 1px solid black;
		padding: var(--spacing-md) 0;
	}

	.date {
		font-size: 1.25rem;
		font-family: 'Righteous', sans-serif;
	}

	.date > span:first-of-type {
		font-size: 1.2em;
		font-weight: 600;
		margin-right: 0.25rem;
	}

	.date > span:last-of-type {
		font-family: 'SUSE', sans-serif;
	}

	.body {
		display: flex;
		flex-direction: row;
	}

	.details {
		display: flex;
		flex-direction: column;
	}

	.button-container {
		margin-left: auto;
		width: 100%;
	}

	.location {
		margin-top: 0.25rem;
	}

	@container container (width < 600px) {
		.container {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
