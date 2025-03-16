<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/atoms/Header.svelte';
	import Footer from '$lib/components/atoms/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col">
	<Header />

	<main class="w-full flex-grow">
		{@render children()}
	</main>

	<Footer />
</div>
