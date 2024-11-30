<script lang="ts">
	import MediaQuery from 'svelte-media-queries';
	import { links } from '$lib/data/navigation';
	import { mobileMenuVisible } from './stores';
	import { fade, fly } from 'svelte/transition';
	import SocialMedia from './SocialMedia.svelte';
	import { page } from '$app/stores';
	import CloseIcon from './icons/CloseIcon.svelte';

	let matches: boolean;
	$: isMobile = !!matches;
	$: path = $page.url.pathname;

	const handleClickClose = () => {
		mobileMenuVisible.set(false);
	};

	const handleClickMenuItem = () => {
		mobileMenuVisible.set(false);
	};
</script>

<MediaQuery query="(max-width: 640px)" bind:matches />

{#if isMobile && $mobileMenuVisible}
	<div class="outer-container" transition:fade={{ duration: 200 }}>
		<div class="container">
			<button class="close-btn" on:click={handleClickClose}><CloseIcon /></button>
			<nav>
				<ul>
					{#each links as link}
						<li transition:fly={{ y: 100 }} class="link-item">
							<a
								href={link.href}
								target={link.isExternal ? '_blank' : '_self'}
								on:click={handleClickMenuItem}
								class:active={link.hasSubpages ? path.includes(link.href) : path === link.href}
								>{link.label}
								{#if link.isExternal}
									>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<SocialMedia large />
		</div>
	</div>
{/if}

<style>
	.outer-container {
		position: fixed;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 10;
		padding: 1rem;
	}

	.container {
		position: relative;
		height: 100dvh;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.close-btn {
		position: absolute;
		top: 0;
		right: 0;
		color: white;
		background: none;
		border: none;
		padding: 0;
	}

	ul {
		list-style: none;
		padding-left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	a {
		text-align: center;
		font-size: 2rem;
		text-decoration: none;
		font-weight: 800;
		text-transform: uppercase;
	}

	a.active {
		background: var(--wtcf-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		position: relative;
	}

	a.active::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -2px;
		height: 2px;
		background: var(--wtcf-gradient);
	}

	.link-item {
		padding: 0.5rem 1rem;
	}
</style>
