<script lang="ts">
	import {
		LucideUserPlus, 
		LucideBookMarked 
	} from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import { coreRulesData, type CoreRule } from '$lib/components/data/coreRulesData'; 
</script>

<section
	class="bg-tertiary-400 dark:bg-tertiary-400 flex min-h-screen w-full flex-col items-center pb-16 pt-0 md:pb-24" 
	in:fade={{ duration: 300 }}
>
	<!-- Full-width Background Container for Title -->
	<div class="relative mb-12 w-full shadow-xl md:mb-20 h-[600px] md:h-[700px]">
		<!-- Background Image -->
		<div class="absolute inset-0 z-0 h-[600px] md:h-[700px]"> 
			<img
				src="https://i.pinimg.com/1200x/58/13/58/581358c6e746b093dfd8415f6958f9de.jpg"
				alt="Ancient gears and mechanisms"
				class="h-full w-full object-cover"
			/>
		</div>
		<!-- Dimming Overlay -->
		<div class="absolute inset-0 z-10 h-[600px] md:h-[700px] bg-neutral-900/60 dark:bg-neutral-900/70"></div>

		<!-- Centered Content Container for Title -->
		<div class="relative z-20 mt-24 mx-auto flex h-[400px] md:h-[450px] max-w-4xl flex-col items-center justify-center px-4 text-center">
			<div> 
				<h1 class="h1 text-primary-50 mb-6">The Engine of Illuvia</h1>
				<p class="text-xl text-primary-100 dark:text-primary-200 md:text-2xl">
					Illuvia is powered by Savage Worlds, a game system designed for thrilling adventures and
					dynamic storytelling. Here's a look at the core mechanics that make your tales in the
					Clockwork Age come alive:
					<strong class="text-primary-400 dark:text-primary-300">Fast, Furious, Fun!</strong>
				</p>
			</div>
		</div>
	</div>

	<!-- Rules Grid -->
	<div class="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
		{#each coreRulesData as rule (rule.id)}
			<div
				class="card group bg-surface-100/10 border border-secondary-600 flex flex-col rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
			>
				<div class="mb-4 flex items-center gap-4">
					<svelte:component
						this={rule.icon}
						class="h-10 w-10 flex-shrink-0 {rule.iconColor ||
							'text-secondary-500 dark:text-secondary-600'}"
						strokeWidth={1.5}
					/>
					<h3 class="h3 text-secondary-700 dark:text-secondary-600 flex-grow">{rule.title}</h3>
				</div>

				{#each rule.description as paragraph}
					<p class="text-black text-token mb-3 text-xl leading-relaxed">{@html paragraph}</p>
				{/each}

				{#if rule.keyPoints && rule.keyPoints.length > 0}
					<ul class="text-black text-xl text-token mb-4 ml-5 list-disc space-y-2">
						{#each rule.keyPoints as point}
							<li>{@html point}</li>
						{/each}
					</ul>
				{/if}

				<div
					class="mt-auto rounded-md border-l-4 border-secondary-500 dark:border-secondary-600 bg-surface-200-700-token p-4"
				>
					{#if rule.whyItMattersIcon}
						<div class="mb-2 flex items-center gap-2">
							<svelte:component
								this={rule.whyItMattersIcon}
								class="h-6 w-6 text-secondary-600 dark:text-secondary-600"
							/>
							<h4 class="h5 text-secondary-700 dark:text-secondary-600 font-semibold">
								Why it Matters:
							</h4>
						</div>
						<p class="text-token text-lg text-black italic">{@html rule.whyItMatters}</p>
					{:else}
						<h4 class="h5 text-secondary-700 dark:text-secondary-600 mb-1 font-semibold">
							Why it Matters:
						</h4>
						<p class="text-lg text-black dark:text-black italic">{@html rule.whyItMatters}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<!-- Concluding CTA Section -->
	<div class="mt-16 w-full max-w-3xl text-center md:mt-24">
		<h2 class="h2 text-secondary-500 dark:text-secondary-600 mb-8">Ready to Dive Deeper?</h2>
		<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
			<a
				href="/characters"
				class="btn variant-filled-primary bg-secondary-700 text-white rounded-xl flex items-center justify-center gap-2 text-lg"
			>
				<LucideUserPlus size={24} />
				Character Creation
			</a>
			<a
				href="/rules/combat"
				class="btn variant-filled-secondary flex bg-secondary-700 text-white rounded-xl items-center justify-center gap-2 text-lg"
			>
				<LucideBookMarked size={24} />
				Combat Rules
			</a>
		</div>
	</div>
</section>

<style lang="postcss">
	/* Page-specific adjustments can go here */
	.text-token li::marker {
		@apply text-surface-500 dark:text-surface-400; /* Style list bullets if needed */
	}
</style>