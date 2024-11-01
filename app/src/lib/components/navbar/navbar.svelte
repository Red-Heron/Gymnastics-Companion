<script lang="ts">
	// Import additional components
	import Navlink from './navlink.svelte';

	// Navbar elements
	type navElement = {
		name: string;
		href: string;
		icon?: string;
	};
	const navElements: navElement[] = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Elements',
			href: '/elements'
		},
		{
			name: 'About',
			href: '/about'
		}
	];
</script>

<div>
	<nav>
		{#each navElements as navElement}
			<Navlink href={navElement.href} icon={navElement.icon}>{navElement.name}</Navlink>
		{/each}
	</nav>
</div>

<style>
	nav {
		font-size: 1.5rem;
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 1em;
		padding: 1rem;
	}
</style>
