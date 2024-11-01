<script lang="ts">
	import '../app.css';
	let { children } = $props();

	// Dark Mode
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
{@render children()}
