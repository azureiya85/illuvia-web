<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import IconifyIcon from '@iconify/svelte';
	import { characterCreationSteps, type CreationStep, type StepAction } from '$lib/components/data/characterCreationSteps';
	import { newRacesData, type LucideIconConstructor, type NewRace, type LucideIconConstructor as RaceLucideIconType } from '$lib/components/data/NewRaces'; // Assuming NewRaces exports this
	import {
		LucideUserPlus,
		LucideBookMarked,
        LucideUsers,
        LucideChevronLeft,
        LucideChevronRight
	} from '@lucide/svelte';

    // --- Character Creation Steps Tab State ---
    let creationStepTab = $state(characterCreationSteps[0]?.id || 'step1');

	// --- Accordion State for Races ---
    let openRaceAccordionItems = $state<string[]>([]);

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

    // --- Modal State & Functions ---
    type InspectableItem = NewRace;
    let inspectedItem = $state<InspectableItem | null>(null);
    let modalElement: HTMLDivElement | null = null;

    function inspectItem(item: InspectableItem) {
        inspectedItem = item;
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
            setTimeout(() => { modalElement?.focus(); }, 0);
        }
    }
    function closeModal() {
        inspectedItem = null;
        if (typeof document !== 'undefined') document.body.style.overflow = '';
    }
    function handleModalBackdropClick(event: MouseEvent) {
        if (event.currentTarget === event.target) {
            closeModal();
        }
    }
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && inspectedItem) {
            closeModal();
        }
    }

    // --- Navigation for Character Creation Steps ---
    function navigateStep(direction: 'prev' | 'next') {
        const currentIndex = characterCreationSteps.findIndex(step => step.id === creationStepTab);
        if (direction === 'prev' && currentIndex > 0) {
            creationStepTab = characterCreationSteps[currentIndex - 1].id;
        } else if (direction === 'next' && currentIndex < characterCreationSteps.length - 1) {
            creationStepTab = characterCreationSteps[currentIndex + 1].id;
        }
        const tabsElement = document.querySelector('.character-creation-tabs');
        tabsElement?.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }

</script>

<svelte:window onkeydown={handleKeydown} />

<section
	class="bg-tertiary-400 dark:bg-tertiary-400 flex min-h-screen w-full flex-col items-center pb-16 pt-0 md:pb-24"
	in:fade={{ duration: 300 }}
>
	<!-- Title Section  -->
    <div class="relative mb-12 w-full shadow-xl md:mb-20">
		<div class="absolute inset-0 z-0 h-[350px] md:h-[400px]">
			<img src="/images/clockpunk-char-upscayl.avif" alt="Diverse group of adventurers planning" class="h-full w-full object-cover object-center"/>
		</div>
		<div class="absolute inset-0 z-10 h-[350px] md:h-[400px] bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-900/80 dark:from-neutral-950/80 dark:via-neutral-950/70 dark:to-neutral-950/90"></div>
		<div class="relative z-20 mx-auto flex h-[350px] max-w-4xl flex-col items-center justify-center px-4 text-center md:h-[400px]">
			<div>
				<h1 class="h1 text-primary-50 mb-6">Creating A Hero</h1>
				<p class="text-lg text-primary-100 dark:text-primary-200 md:text-xl">
					Create your unique adventurer for the Clockwork Age. Each choice shapes your story!
				</p>
			</div>
		</div>
	</div>

	<!-- Character Creation Steps using Tabs -->
	<div class="w-full max-w-7xl px-4 md:px-4 lg:px-0 mb-16 character-creation-tabs bg-surface-100/10 border border-secondary-600">
        <h2 class="h2 text-center mb-8 text-primary-200 dark:text-secondary-600">Creation Process</h2>
        <Tabs
            value={creationStepTab}
            onValueChange={(e) => (creationStepTab = e.value)}
            listJustify="justify-start"
            listBorder="border-b border-surface-300 dark:border-surface-700"
            listClasses="mb-1 scroll-smooth overflow-x-auto whitespace-nowrap hide-scrollbar"
            contentClasses="pt-6 bg-surface-100-800-token rounded-b-lg shadow-lg p-6 md:p-8"
        >
            {#snippet list()}
                {#each characterCreationSteps as step, i (step.id)}
                    {@const StepIconComponent = step.icon} <!-- step.icon is the Lucide constructor type -->
                    <Tabs.Control value={step.id} padding="px-4 py-3 md:px-6" classes="rounded-t-md flex-shrink-0">
                        {#snippet lead()}
                            {#if StepIconComponent} <!-- Check if icon exists -->
                                <StepIconComponent size={20} class="mr-2" />
                            {/if}
                        {/snippet}
                        <span class="text-sm md:text-base whitespace-normal text-center sm:text-left">{step.title}</span>
                    </Tabs.Control>
                {/each}
            {/snippet}

            {#snippet content()}
                {#each characterCreationSteps as step, i (step.id)}
                    <Tabs.Panel value={step.id} classes="min-h-[40vh] flex flex-col">
                        <div class="text-token text-black prose prose-sm md:prose-base dark:prose-invert text-xl mb-6 leading-relaxed flex-grow">
                            {#each step.content as paragraph}
                                {@html paragraph}
                            {/each}
                        </div>

                        {#if step.actions && step.actions.length > 0}
                            <div class="mb-6 flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">
                                {#each step.actions as action (action.label)}
                                    {@const ActionSpecificIcon = action.icon} 
                                    {@const ActionSpecificIconBefore = action.iconBefore} 
                                    {#if action.type === 'link'}
                                        <a href={action.href} class="btn {action.variant || 'variant-outline-primary'} flex items-center justify-center gap-2 bg-secondary-600 rounded">
                                            {#if ActionSpecificIconBefore} <ActionSpecificIconBefore size={18} /> {/if}
                                            {action.label}
                                            {#if ActionSpecificIcon} <ActionSpecificIcon size={18} /> {/if}
                                        </a>
                                    {:else if action.type === 'button'}
                                        <button type="button" onclick={action.onClick} class="btn {action.variant || 'variant-outline-primary'} flex items-center justify-center gap-2 rounded">
                                            {#if ActionSpecificIconBefore} <ActionSpecificIconBefore size={18} /> {/if}
                                            {action.label}
                                            {#if ActionSpecificIcon} <ActionSpecificIcon size={18} /> {/if}
                                        </button>
                                    {/if}
                                {/each}
                            </div>
                        {/if}
                        
                        <div class="mt-auto pt-6 flex justify-between border-t border-surface-300 dark:border-surface-700">
                            <button type="button" class="btn variant-ghost-surface rounded" onclick={() => navigateStep('prev')} disabled={i === 0}>
                                <LucideChevronLeft size={20} class="mr-2" /> Previous
                            </button>
                            <button type="button" class="btn variant-ghost-surface rounded" onclick={() => navigateStep('next')} disabled={i === characterCreationSteps.length - 1}>
                                Next <LucideChevronRight size={20} class="ml-2" />
                            </button>
                        </div>
                    </Tabs.Panel>
                {/each}
            {/snippet}
        </Tabs>
    </div>

	<!-- New Illuvian Ancestries Section -->
	<section id="new-races-section" class="mt-16 w-full max-w-7xl scroll-mt-20 px-4 md:mt-24 md:px-0">
		<div class="bg-surface-50-900-token p-6  md:p-8 rounded-lg">
			<h2 class="h2 text-center text-secondary-600 dark:text-secondary-600 mb-2">
				New Illuvian Ancestries
			</h2>
            <p class="text-token mb-8 text-center text-black text-2xl">Click on an ancestry to learn more about their unique traits and place in Illuvia.</p>

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
                                        <div class="prose prose-sm md:prose-base text-lg text-black dark:prose-invert max-w-none text-token">
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