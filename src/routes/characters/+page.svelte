<script lang="ts">
	import {
		LucideUserPlus,
		LucideBookMarked,
        LucideUsers
	} from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import IconifyIcon from '@iconify/svelte'; 
	import { characterCreationSteps, type CreationStep, type StepAction } from '$lib/components/data/characterCreationSteps';
	import { newRacesData, type NewRace, type IconType, type LucideIconConstructor } from '$lib/components/data/NewRaces';
    let openRaceAccordionItems = $state<string[]>([]);

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<section
	class="bg-tertiary-500 dark:bg-tertiary-800 flex min-h-screen w-full flex-col items-center pb-16 pt-0 md:pb-24"
	in:fade={{ duration: 300 }}
>
	<!-- Title Section -->
    <div class="relative mb-12 w-full shadow-xl md:mb-20">
		<div class="absolute inset-0 z-0 h-[350px] md:h-[400px]">
			<img
				src="/images/character-creation-bg.avif"
				alt="Diverse group of adventurers planning"
				class="h-full w-full object-cover object-center"
			/>
		</div>
		<div
			class="absolute inset-0 z-10 h-[350px] md:h-[400px] bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-900/80 dark:from-neutral-950/80 dark:via-neutral-950/70 dark:to-neutral-950/90"
		></div>
		<div
			class="relative z-20 mx-auto flex h-[350px] max-w-4xl flex-col items-center justify-center px-4 text-center md:h-[400px]"
		>
			<div>
				<h2 class="h2 mb-4 text-secondary-400 dark:text-secondary-300">Hero Crafting</h2>
				<h1 class="h1 text-primary-50 mb-6">Forging Your Illuvian Legend</h1>
				<p class="text-lg text-primary-100 dark:text-primary-200 md:text-xl">
					Follow these steps to create your unique adventurer for the Clockwork Age. Each choice
					shapes your story!
				</p>
			</div>
		</div>
	</div>

	<!-- Character Creation Steps Grid  -->
	<div class="grid w-full max-w-5xl grid-cols-1 gap-6 px-4 md:px-8 lg:px-0">
		{#each characterCreationSteps as step (step.id)}
			{@const StepLucideIcon = step.icon} 
			<div
				class="card group bg-surface-100-800-token flex flex-col rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
			>
				<div class="mb-4 flex items-center gap-4">
					<StepLucideIcon
						class="h-10 w-10 flex-shrink-0 text-primary-500 dark:text-primary-400"
						strokeWidth={1.5}
					/>
					<h3 class="h3 text-primary-600 dark:text-primary-300 flex-grow">{step.title}</h3>
				</div>
				{#each step.content as paragraph}
					<div class="text-token prose prose-sm md:prose-base dark:prose-invert mb-3 leading-relaxed">
						{@html paragraph}
					</div>
				{/each}
				{#if step.actions && step.actions.length > 0}
					<div class="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">
						{#each step.actions as action (action.label)}
							{@const ActionLucideIcon = action.icon} 
							{@const ActionLucideIconBefore = action.iconBefore} 
							{#if action.type === 'link'}
								<a
									href={action.href}
									class="btn {action.variant || 'variant-outline-primary'} flex items-center justify-center gap-2 text-sm md:text-base"
								>
									{#if ActionLucideIconBefore} <ActionLucideIconBefore size={18} /> {/if}
									{action.label}
									{#if ActionLucideIcon} <ActionLucideIcon size={18} /> {/if}
								</a>
							{:else if action.type === 'button'}
								<button
									type="button"
									onclick={action.onClick}
									class="btn {action.variant || 'variant-outline-primary'} flex items-center justify-center gap-2 text-sm md:text-base"
								>
									{#if ActionLucideIconBefore} <ActionLucideIconBefore size={18} /> {/if}
									{action.label}
									{#if ActionLucideIcon} <ActionLucideIcon size={18} /> {/if}
								</button>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<!-- New Illuvian Ancestries Section -->
	<section id="new-races-section" class="mt-16 w-full max-w-7xl scroll-mt-20 px-4 md:mt-24 md:px-0">
		<div class="bg-surface-50-900-token p-6 shadow-xl md:p-8 rounded-lg">
			<h2 class="h2 text-center text-secondary-600 dark:text-secondary-400 mb-2">
				New Illuvian Ancestries
			</h2>
            <p class="text-token mb-8 text-center text-lg">Click on an ancestry to learn more about their unique traits and place in Illuvia.</p>

			{#if newRacesData && newRacesData.length > 0}
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {#each newRacesData as race (race.id)}
                        <Accordion value={openRaceAccordionItems} onValueChange={(e) => openRaceAccordionItems = e.value} multiple collapsible
                            classes="w-full"
                            padding="p-0"
                        >
                            <Accordion.Item value={race.id}
                                classes="!bg-surface-200-700-token rounded-lg shadow-lg overflow-hidden w-full group/item"
                                controlClasses="!p-0 relative"
                                panelPadding="p-0"
                            >
                                {#snippet control()}
                                    <div class="relative h-40 md:h-48 w-full">
                                        <div
                                            class="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-300 ease-in-out group-hover/item:scale-105"
                                            class:scale-x-[-1]={race.flipImage === 'horizontal'}
                                            class:scale-y-[-1]={race.flipImage === 'vertical'}
                                            style:background-image="url({race.image})"
                                            style:background-position={race.backgroundPosition || 'center center'}
                                        ></div>
                                        <div class="hover:scale-105 transition-transform duration-300 ease-in-out group-hover/item:scale-105 absolute inset-0 bg-gradient-to-l from-transparent via-secondary-200/50 dark:via-secondary-700/50 to-secondary-200 dark:to-secondary-700"></div>
                                            <div class="absolute inset-y-0 left-0 p-4 flex items-center space-x-3 w-3/5 md:w-1/2">
                                            {#if race.iconType === 'lucide'}
                                                {@const LucideIconToRender = race.icon as LucideIconConstructor}
                                                <LucideIconToRender size={32} class="text-primary-600 dark:text-primary-400 flex-shrink-0" strokeWidth={1.5} />
                                            {:else if race.iconType === 'iconify'}
                                                <IconifyIcon icon={race.icon as string} class="h-8 w-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                                            {/if}
                                            <div class="flex flex-col text-left">
                                                <span class="h4 !mb-0 font-bold text-surface-900 dark:text-surface-50">{race.name}</span>
                                                <em class="text-sm text-surface-700 dark:text-surface-300">{race.tagline}</em>
                                            </div>
                                        </div>
                                        <div class="accordion-indicator absolute right-4 top-1/2 -translate-y-1/2 text-surface-900 dark:text-surface-50 group-data-[state=open]/item:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                        </div>
                                    </div>
                                {/snippet}
                                {#snippet panel()}
                                    <div class="p-4 md:p-6 bg-surface-100-800-token">
                                        <div class="prose prose-sm md:prose-base dark:prose-invert max-w-none text-token">
                                            {#each race.description as paragraph}
                                                <p>{@html paragraph}</p>
                                            {/each}
                                            <h4 class="h5 !mt-6 !mb-2 text-secondary-600 dark:text-secondary-400">Ancestry Features:</h4>
                                            <ul class="!pl-5">
                                                {#each race.features as feature}
                                                    <li>
                                                        <strong>{feature.name}:</strong>
                                                        {@html feature.description}
                                                    </li>
                                                {/each}
                                            </ul>
                                        </div>
                                    </div>
                                {/snippet}
                            </Accordion.Item>
                        </Accordion>
                    {/each}
                </div>
			{:else}
				<p class="text-token text-center">Information on new ancestries coming soon!</p>
			{/if}
		</div>
	</section>
</section>

<style lang="postcss">
	.text-token li::marker {
		@apply text-surface-500 dark:text-surface-400;
	}
	.prose ul { @apply my-2 list-disc; }
    .prose ul ul { @apply my-1 list-disc; }
	.prose strong { @apply font-semibold text-primary-600 dark:text-primary-400; }
    .btn svg { @apply relative; }

    :global(.accordion-item .accordion-control > .accordion-indicator--default) {
        @apply hidden;
    }
    .scale-x-[-1] { transform: scaleX(-1); }
    .scale-y-[-1] { transform: scaleY(-1); }
</style>