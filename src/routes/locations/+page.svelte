<script lang="ts">
    import { onMount } from 'svelte'; 
	import { fade } from 'svelte/transition';
	import { nationsData, type Nation } from '$lib/components/data/DetailedNations';
	import { LucideChevronLeft, LucideChevronRight } from '@lucide/svelte';

	let selectedNation = $state<Nation>(nationsData[0]);
	let postcardScroller: HTMLDivElement | undefined = undefined;

    let canScrollLeft = $state(false);
    let canScrollRight = $state(true);

	function selectNation(nation: Nation) {
		selectedNation = nation;
		const detailSection = document.getElementById('nation-detail-section');
		detailSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

    const postcardBorderStyle = "border-8 border-double border-amber-300/70 dark:border-amber-600/70 shadow-xl";

    function updateScrollButtonsState() {
        if (!postcardScroller) return;
        const { scrollLeft, scrollWidth, clientWidth } = postcardScroller;
        const scrollEndThreshold = 5;

        canScrollLeft = scrollLeft > scrollEndThreshold;
        canScrollRight = scrollLeft < scrollWidth - clientWidth - scrollEndThreshold;
    }

    function scrollPostcards(direction: 'left' | 'right') {
        if (!postcardScroller) return;
        const scrollAmount = postcardScroller.clientWidth * 0.75;

        postcardScroller.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(updateScrollButtonsState, 350);
    }

	onMount(() => {
        // Wait for the DOM element to be surely available and rendered
        const initialCheck = () => {
            if (postcardScroller) {
                updateScrollButtonsState();
                // Add resize listener only after postcardScroller is confirmed
                window.addEventListener('resize', updateScrollButtonsState);
            } else {
                requestAnimationFrame(initialCheck);
            }
        };
        initialCheck();

        // Cleanup function for the event listener
        return () => {
            window.removeEventListener('resize', updateScrollButtonsState);
        };
	});
</script>

<svelte:head>
	<title>Locations | Illuvia The Clockwork Age</title>
	<meta name="description" content="Explore the diverse nations of Illuvia." />
</svelte:head>

<div class="flex flex-col bg-tertiary-400 text-token">
	<!-- Section 1: Heading & Postcards -->
	<section class="flex h-screen flex-col">
		<!-- 1/3 Screen Height: Heading -->
		<div class="relative flex h-1/3 w-full flex-shrink-0 flex-col items-center justify-center p-6 md:p-10"> 
			<div class="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40">
                {#if selectedNation.postcardImage}
                    <img src={selectedNation.postcardImage || selectedNation.image} alt="Illuvian Landscape" class="h-full w-full object-cover opacity-30 dark:opacity-20"/>
                {/if}
            </div>
			<div class="flex flex-col relative z-10 text-center items-center justyify-center">
				<h1 class="h1 mb-4 text-primary-50 dark:text-primary-100">The Nations of Illuvia</h1>
				<p class="text-xl text-primary-200 dark:text-primary-300 md:text-2xl max-w-3xl">
					Discover the diverse cultures, burgeoning technologies, and simmering conflicts of Illuvia's great powers.
				</p>
			</div>
		</div>

		<!-- 2/3 Screen Height: Postcards Area -->
		<div class="relative flex flex-grow flex-col justify-center bg-surface-200-700-token min-h-0 p-4 md:p-6"> 
			<div
                class="relative w-full overflow-x-auto overflow-y-hidden postcard-scroller-container"
                bind:this={postcardScroller}
                onscroll={updateScrollButtonsState}
            >
                <div class="flex flex-nowrap items-center gap-6 px-4 py-8 md:gap-8 md:px-8"> 
                    {#each nationsData as nation (nation.id)}
                        <button
                            type="button"
                            onclick={() => selectNation(nation)}
                            class="group relative h-[18rem] w-[28rem] flex-shrink-0 transform cursor-pointer snap-center overflow-hidden rounded-lg {postcardBorderStyle} transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-surface-200-700-token"
                            aria-label="Select {nation.nation}"
                            class:ring-4={selectedNation.id === nation.id}
                            class:ring-primary-500={selectedNation.id === nation.id}
                            class:ring-offset-4={selectedNation.id === nation.id}
                            class:ring-offset-surface-200-700-token={selectedNation.id === nation.id}
                        >
                            <img
                                src={nation.postcardImage || nation.image}
                                alt="Postcard of {nation.nation}"
                                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
                            <div class="absolute bottom-0 left-0 w-full p-4">
                                <h3 class="h5 font-bold text-white drop-shadow-md group-hover:text-primary-300 transition-colors">
                                    {nation.nation}
                                </h3>
                            </div>
                            {#if nation.flagImage}
                                <img src={nation.flagImage} alt="{nation.nation} Flag" class="absolute top-3 right-3 h-10 w-auto rounded-sm border-2 border-white/50 shadow-md opacity-80 group-hover:opacity-100 transition-opacity"/>
                            {/if}
                        </button>
                    {/each}
                </div>
			</div>

            <!-- Scroll Buttons overlaying the postcard scroller -->
            {#if postcardScroller && nationsData.length > 1} 
                <button
                    title="Scroll Left"
                    aria-label="Scroll postcards left"
                    onclick={() => scrollPostcards('left')}
                    disabled={!canScrollLeft}
                    class="absolute left-2 top-1/2 z-40 -translate-y-1/2 transform rounded-full p-2
                           bg-surface-500/60 hover:bg-surface-600/80 text-white
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <LucideChevronLeft size={28} />
                </button>
                <button
                    title="Scroll Right"
                    aria-label="Scroll postcards right"
                    onclick={() => scrollPostcards('right')}
                    disabled={!canScrollRight}
                    class="absolute right-2 top-1/2 z-40 -translate-y-1/2 transform rounded-full p-2
                           bg-black hover:bg-secondary-600 text-black
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                    <LucideChevronRight size={28} />
                </button>
            {/if}
		</div>
	</section>

	<!-- Section 2: Selected Nation Details -->
	<section id="nation-detail-section" class="bg-tertiary-400 flex min-h-screen w-full flex-col md:flex-row text-token" in:fade={{duration: 300, delay: 150}}>
		{#if selectedNation}
            {@const nation = selectedNation} 
			<!-- Left Column: Nation Image with Fade -->
			<div class="relative h-72 w-full md:h-auto md:w-1/2">
				<div
					class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
					style:background-image="url('{nation.image}')"
				></div>
				<!-- Overlay gradient to blend with the right panel's background (tertiary-400) -->
				<div class="from-tertiary-400 absolute inset-0 z-10 bg-gradient-to-l via-transparent to-transparent"></div>
			</div>

			<!-- Right Column: Nation Description -->
			<div class="prose prose-lg dark:prose-invert flex w-full flex-col justify-center p-8 md:w-1/2 md:p-12 lg:p-16 text-black dark:text-surface-100">
                <header class="mb-6">
                    <h2 class="h2 !mb-1 text-secondary-600 dark:text-secondary-600">{nation.nation}</h2>
                    {#if nation.officialName}<p class="text-md italic text-surface-900 dark:text-surface-950 !mt-0">({nation.officialName})</p>{/if}
                    {#if nation.established}<p class="text-sm text-surface-900 dark:text-surface-950 !mt-0">Established: {nation.established}</p>{/if}
                </header>

                {#each nation.overview as paragraph}
                    <p class="text-black text-xl">{@html paragraph}</p>
                {/each}

                {#if nation.governance && nation.governance.length > 0}
                    <h4 class="h4 !mt-6 !mb-2 text-primary-600 dark:text-primary-400">Governance & Politics</h4>
                    {#each nation.governance as paragraph} <p class="text-black text-xl">{@html paragraph}</p> {/each}
                {/if}

                {#if nation.culture && nation.culture.length > 0}
                    <h4 class="h4 !mt-6 !mb-2 text-primary-600 dark:text-primary-400">Culture & Society</h4>
                    {#each nation.culture as paragraph} <p class="text-black text-xl">{@html paragraph}</p> {/each}
                {/if}

                 {#if nation.society && nation.society.length > 0 && !nation.culture} <!-- Only show if culture isn't already used -->
                    <h4 class="h4 !mt-6 !mb-2 text-primary-600 dark:text-primary-400">Society</h4>
                    {#each nation.society as paragraph} <p class="text-black text-xl">{@html paragraph}</p> {/each}
                {/if}

                {#if nation.technology && nation.technology.length > 0}
                    <h4 class="h4 !mt-6 !mb-2 text-primary-600 dark:text-primary-400">Technology & Advancement</h4>
                    {#each nation.technology as paragraph} <p class="text-black text-xl">{@html paragraph}</p> {/each}
                {/if}

                {#if nation.economy && nation.economy.length > 0}
                    <h4 class="h4 !mt-6 !mb-2 text-primary-600 dark:text-primary-400">Economy</h4>
                    {#each nation.economy as paragraph} <p class="text-black text-xl">{@html paragraph}</p> {/each}
                {/if}

                {#if nation.military && nation.military.length > 0}
                    <h4 class="h4 !mt-6 !mb-2 text-primary-600 dark:text-primary-400">Military</h4>
                    {#each nation.military as paragraph} <p class="text-black text-lg">{@html paragraph}</p> {/each}
                {/if}

                {#if nation.subRegions && nation.subRegions.length > 0}
                    <h4 class="h4 !mt-6 !mb-2 text-primary-600 dark:text-primary-400">Notable Regions</h4>
                    <ul class="!pl-0 !list-none space-y-2">
                        {#each nation.subRegions as subRegion (subRegion.name)}
                            <li class="!pl-0 text-black"><strong class="font-semibold">{subRegion.name}:</strong> {subRegion.description}</li>
                        {/each}
                    </ul>
                {/if}

                <footer class="mt-8 border-t border-surface-300 dark:border-surface-700 pt-4">
                    <p class="text-md italic text-black !my-0">
                        <strong>Inspirations:</strong> {nation.realWorldInspirations}
                    </p>
                </footer>
			</div>
		{/if}
	</section>
</div>

<style lang="postcss">

	.dark .prose-invert p,
    .dark .prose-invert ul,
    .dark .prose-invert strong {
		color: var(--color-surface-100);
	}
    .dark .prose-invert h4 {
        color: var(--color-primary-400);
    }
    .dark .prose-invert footer p {
        color: var(--color-surface-400);
    }

    /* Ensure scrollbar is visible and styled */
	.postcard-scroller-container::-webkit-scrollbar {
		height: 10px; /* Make it a bit more prominent */
        background-color: var(--color-surface-600); /* Track color */
	}
	.postcard-scroller-container::-webkit-scrollbar-track {
		background: var(--color-surface-600); /* Slightly darker than thumb for contrast or same as thumb bg */
        border-radius: 10px;
        margin: 0 40px; /* Add margin so track doesn't go under buttons */
	}
	.postcard-scroller-container::-webkit-scrollbar-thumb {
        background: var(--color-primary-500);
        border-radius: 10px;
        border: 2px solid var(--color-surface-600); /* Creates a border around the thumb */
	}
	.postcard-scroller-container::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary-600);
	}
    /* For Firefox */
    .postcard-scroller-container {
        scrollbar-width: auto; /* Or 'thin' */
        scrollbar-color: var(--color-primary-500) var(--color-surface-600);
    }
</style>