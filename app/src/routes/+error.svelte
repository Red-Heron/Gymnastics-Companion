<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<main>
	<h1 class="text-4xl">{$page.status}</h1>
	<p>{$page.error?.message}</p>
	<Button variant="destructive" href="/">Home</Button>
</main>
