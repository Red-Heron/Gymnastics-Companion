<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	// components
	import Icon from '@iconify/svelte';

	// types
	import { Contributor, type SocialLink } from '../contributors';

	let className: string | undefined = undefined;
	export { className as class };
	export let contributor: Contributor;
	const links: SocialLink[] = contributor.links || [];
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={cn('bg-card text-card-foreground card border shadow', className)}
	{...$$restProps}
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
>
	<div class="flex flex-col">
		<p>{contributor.name}</p>
		<p class="text-muted-foreground text-sm">{contributor.role}</p>
	</div>
	<div class="image">
		<img src={contributor.imageUrl} alt="" />
	</div>
	<div class="flex items-center">
		{#each links as link}
			{#if link.icon}
				<a class="linkIcon" target="_blank" href={link.url}><Icon icon={link.icon} /></a>
			{:else if link.text}
				<a target="_blank" href={link.url}>{link.text}</a>
			{/if}
		{/each}
	</div>
	{#if contributor.description}
		<p>{contributor.description}</p>
	{/if}
</div>

<style>
	.card {
		position: relative;
		padding: 1.5em;
		max-width: 360px;
		border-radius: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.image {
		/* Sizing */
		width: 100%;
		aspect-ratio: 5/4;
		/* Layout */
		border-radius: 2rem;
		overflow: hidden;
	}

	.image img {
		/* Sizing */
		width: 100%;
		height: 100%;
		/* Layout */
		object-fit: cover;
	}

	.linkIcon {
		font-size: 2em;
		transition: color 0.2s ease-in-out;
	}

	.linkIcon:hover {
		color: color-mix(in srgb, currentColor, transparent 30%);
	}
</style>
