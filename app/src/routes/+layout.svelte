<script lang="ts">
	import '../app.css';
	let { children } = $props();

	// Dark Mode
	import { ModeWatcher } from 'mode-watcher';

	// Basic Layout
	import Navbar from '$lib/components/navbar/navbar.svelte';
</script>

<ModeWatcher />
<Navbar />
{@render children()}
