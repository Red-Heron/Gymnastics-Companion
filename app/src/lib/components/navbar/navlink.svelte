<script lang="ts">
	// Import additional components
	import Icon from '@iconify/svelte';

	export let href = 'Home';
	export let icon: string | undefined = undefined;
</script>

<a {href} class="nav-link">
	{#if icon}<span class="icon"> <Icon {icon} /></span>{/if}
	<span><slot /></span>
</a>

<style>
	.nav-link {
		position: relative;
		/* Layout */
		display: flex;
		align-items: center;
		gap: 0.5rem;
		/* Font */
		text-decoration: none;
		color: inherit;
		font-weight: 600;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		height: 2px;
		width: 0%;
		background-color: red;
		transition: 0.3s;
	}

	.nav-link:hover::after {
		left: 0;
		width: 100%;
	}
</style>
