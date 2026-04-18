<script lang="ts">
	export let data;
	import Photo from '$lib/assets/links-photo.webp?enhanced';
	import Icon from '$lib/icons/Icon.svelte';

	const borderImage = `/border-image-v2.svg`;

	const title = 'Spacedrifter | Links';
	const description = 'Spacedrifter links';
	const canonical = 'https://links.spacedrifter.band';
</script>

<head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta name="robots" content="noindex, nofollow" />

	<!-- OpenGraph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
</head>

<main>
	<h1 class="visuallyhidden">Spacedrifter Links</h1>
	<div class="border" style:--border-image={`url("${borderImage}")`}>
		<div class="container">
			<div class="image-container">
				<enhanced:img class="image" src={Photo} alt="Stylized photo of Spacedrifter" />
			</div>
			<ul class="links">
				{#each data.links as link}
					<li class="isolate">
						<a href={link.url} class="link" class:link--icon={!!link.icon} target="_blank">
							{#if link.icon}
								<div class="icon"><Icon type={link.icon} /></div>
							{/if}
							<span>{link.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<footer>
			<a class="footer-link" href="https://spacedrifter.band" target="_blank">Visit website</a>
		</footer>
	</div>
</main>

<style>
	:root {
		--primary-color: #698f3f;
		--secondary-color: #fbfaf8;
		--button-height: 4rem;
		--border-radius: calc(var(--button-height) / 2);
	}

	main {
		padding: var(--spacing-sm);
		padding-bottom: 0;
		background-color: rgb(0, 0, 0);
	}

	.border {
		--spacing-top: var(--spacing-md);

		max-width: 580px;
		min-height: calc(100vh - var(--spacing-top));
		margin: auto;
		margin-top: var(--spacing-top);
		display: flex;
		flex-direction: column;
		position: relative;

		padding: 140px 35px 0 35px;

		border-image-source: var(--border-image);
		border-image-repeat: stretch;
		border-image-slice: 140 35 25 35;
		border-image-width: 140px 35px 0px 35px;
	}

	.container {
		padding: var(--spacing-sm);
		height: 100%;
		flex: 1;
	}

	.links {
		list-style: none;
		padding-left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.links li {
		width: 100%;
		position: relative;
	}

	.link {
		min-height: var(--button-height);
		width: 100%;

		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-sm) var(--spacing-md);

		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 12px;
		font-family: 'Righteous', sans-serif;
		letter-spacing: 0.25rem;
		line-height: 1.2;
		text-wrap: balance;

		border-radius: var(--border-radius);
		outline: 3px solid var(--secondary-color);
		background-color: var(--primary-color);
		color: white;
	}

	.link--icon {
		padding-left: var(--button-height);
		padding-right: var(--button-height);
	}

	.link:hover {
		background-color: var(--secondary-color);
		color: black;
	}

	.icon {
		--icon-size: calc(var(--button-height) / 2);

		position: absolute;
		left: calc(calc(var(--button-height) - var(--icon-size)) / 2);
		top: calc(calc(var(--button-height) - var(--icon-size)) / 2);
		aspect-ratio: 1 / 1;
		height: var(--icon-size);
	}

	.image-container {
		width: 100%;
		aspect-ratio: 3 / 2;
		border-radius: var(--border-radius);
		outline: 3px solid var(--secondary-color);
		margin-bottom: 2rem;
		overflow: hidden;
		position: relative;
		background-image: url('/stripes.svg');
		background-repeat: repeat;
		background-size: 20%;
	}

	.image-container::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: var(--primary-color);
		mix-blend-mode: multiply;
	}

	.image {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	footer {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: var(--spacing-sm);
		font-size: 12px;
	}

	.footer-link {
		text-decoration: none;
	}

	.footer-link:hover {
		text-decoration: underline;
	}

	.isolate {
		isolation: isolate;
	}

	@media (max-width: 375px) {
		:root {
			--button-height: 2.5rem;
		}

		.border {
			padding: 90px 16px 0 16px;
		}
	}
</style>
