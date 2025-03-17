<script lang="ts">
	import { LucideAnchor } from '@lucide/svelte';
	import { nations } from '$lib/components/data/Nations';

	// Take only the first 6 nations for this section
	const rulesCards = nations.slice(0, 6);
</script>

<section class="bg-tertiary-400 flex min-h-screen w-full flex-col items-center p-8 md:p-16">
	<!-- First Row: Title and Description -->
	<div class="mb-16 max-w-2xl text-center">
		<h3 class="text-secondary-600 mb-4">ADVANCED RULES</h3>
		<p class="text-4xl text-black">
			Combining gameplay mechanics and storytelling to craft a more coherent world.
		</p>
	</div>

	<!-- Second Row: Bento Grid Layout -->
	<div class="mb-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
		<!-- Left Column - Two rectangular cards in two columns -->
		<div class="grid grid-cols-2 gap-6">
			{#each rulesCards.slice(0, 2) as card (card.nation)}
				<div
					class="bg-primary-900 flex h-184 flex-col justify-end rounded-md p-4 transition-all duration-300 hover:justify-start"
				>
					<h5 class="mb-2 text-white">{card.nation}</h5>
					<p
						class="text-2xl text-white opacity-0 transition-opacity duration-300 hover:opacity-100"
					>
						{card.shortDesc}
					</p>
				</div>
			{/each}
		</div>

		<!-- Right Column - Four smaller cards in 2x2 grid -->
		<div class="grid grid-cols-2 gap-6">
			{#each rulesCards.slice(2, 6) as card (card.nation)}
				<div
					class="bg-primary-700 flex h-88 flex-col justify-end p-4 transition-all duration-300 hover:justify-start"
				>
					<h5 class="mb-1 text-white">{card.nation}</h5>
					<p
						class="text-2xl text-white/80 opacity-0 transition-opacity duration-300 hover:opacity-100"
					>
						{card.shortDesc}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- Third Row: CTA Button -->
	<div>
		<button class="flex items-center gap-2">
			Dive Deeper
			<LucideAnchor size={20} />
		</button>
	</div>
</section>
