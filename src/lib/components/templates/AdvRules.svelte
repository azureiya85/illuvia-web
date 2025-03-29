<script lang="ts">
	import { LucideAnchor } from '@lucide/svelte';
	import { advRules } from '$lib/components/data/AdvRules';

	// Use all advanced rules since there are exactly 6
	const rulesCards = advRules;
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
			{#each rulesCards.slice(0, 2) as rule (rule.id)}
				<div class="group relative h-184 w-full cursor-pointer overflow-hidden rounded-md">
					<!-- Background Image -->
					<img
						src={rule.image}
						alt={rule.title}
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>

					<!-- Background overlay that dims on hover -->
					<div
						class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 transition-all duration-500 group-hover:bg-black/50"
					></div>

					<!-- Title that slides up on hover -->
					<div
						class="absolute bottom-0 w-full transform transition-transform duration-500 group-hover:-translate-y-64"
					>
						<div class="p-6">
							<h5 class="text-2xl font-bold text-white transition-all duration-500">
								{rule.title}
							</h5>
						</div>
					</div>

					<!-- Description that appears from below -->
					<div
						class="absolute bottom-0 w-full translate-y-full transform transition-all duration-500 group-hover:translate-y-0"
					>
						<div class="p-6">
							<p class="text-xl font-medium text-white">
								{rule.shortDesc}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Right Column - Four smaller cards in 2x2 grid -->
		<div class="grid grid-cols-2 gap-6">
			{#each rulesCards.slice(2) as rule (rule.id)}
				<div class="group relative h-88 w-full cursor-pointer overflow-hidden">
					<!-- Background Image -->
					<img
						src={rule.image}
						alt={rule.title}
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>

					<!-- Background overlay that dims on hover -->
					<div
						class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 transition-all duration-500 group-hover:bg-black/50"
					></div>

					<!-- Title that slides up on hover -->
					<div
						class="absolute bottom-0 w-full transform transition-transform duration-500 group-hover:-translate-y-44"
					>
						<div class="p-4">
							<h5 class="text-2xl font-bold text-white transition-all duration-500">
								{rule.title}
							</h5>
						</div>
					</div>

					<!-- Description that appears from below -->
					<div
						class="absolute bottom-0 w-full translate-y-full transform transition-all duration-500 group-hover:translate-y-0"
					>
						<div class="p-4">
							<p class="text-medium text-xl text-white">
								{rule.shortDesc}
							</p>
						</div>
					</div>
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
