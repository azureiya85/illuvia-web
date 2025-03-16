<script lang="ts">
	import Counter from '$lib/components/atoms/Counter.svelte';
</script>

<main class="bg-tertiary-900 flex min-h-screen w-full items-center justify-center">
	<div class="flex w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
		<div class="mb-6 flex justify-center gap-6">
			<a href="https://vite.dev" target="_blank" rel="noreferrer">
				<img
					src="/vite.svg"
					class="h-48 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
					alt="Vite Logo"
				/>
			</a>
			<a href="https://svelte.dev" target="_blank" rel="noreferrer">
				<img
					src="/svelte.svg"
					class="h-48 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#ff3e00aa]"
					alt="Svelte Logo"
				/>
			</a>
		</div>

		<h1 class="mb-6 text-4xl font-bold text-white">Vite + Svelte</h1>

		<div class="rounded-lg p-6 backdrop-blur-sm">
			<Counter />
		</div>

		<p class="mt-6 text-lg text-gray-300">
			Check out
			<a
				href="https://github.com/sveltejs/kit#readme"
				target="_blank"
				rel="noreferrer"
				class="text-blue-400 hover:underline">SvelteKit</a
			>, the official Svelte app framework powered by Vite!
		</p>

		<p class="text-primary-500 mt-4">Click on the Vite and Svelte logos to learn more</p>
	</div>
</main>
