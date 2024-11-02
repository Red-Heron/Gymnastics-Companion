<script lang="ts">
	// components
	import * as Card from '$lib/components/ui/card';
	import Contributor from './components/contributor.svelte';

	// contributors
	import { contributors } from './contributors';
</script>

<h1>This is Us</h1>
<div class="cardWrapper">
	{#each contributors as contributor}
		<Contributor {contributor} />
	{/each}
</div>

<style>
</style>
