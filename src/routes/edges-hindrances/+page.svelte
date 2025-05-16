<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import { edgesData, type Edge, type EdgeCategory, edgeCategoryColors } from '$lib/components/data/NewEdges';
	import { hindrancesData, type Hindrance, type HindranceType, hindranceTypeColors } from '$lib/components/data/NewHindrances';
	import IconSword from '@lucide/svelte/icons/swords';
	import IconShieldOff from '@lucide/svelte/icons/shield-off';
    import IconX from '@lucide/svelte/icons/x';

	let activeTab = $state('edges');

	// --- Edges Logic ---
	const edgeCategories: EdgeCategory[] = Array.from(new Set(edgesData.map(edge => edge.category))).sort();
	let selectedEdgeCategory = $state<EdgeCategory | 'All'>('All');
	let filteredEdges = $derived(
		selectedEdgeCategory === 'All'
			? edgesData
			: edgesData.filter((edge) => edge.category === selectedEdgeCategory)
	);
    function formatRequirements(req: Edge['requirements']): string {
        let parts: string[] = [req.rank];
        if (req.attributes) parts.push(req.attributes);
        if (req.skills) parts.push(req.skills);
        if (req.otherEdges) parts.push(req.otherEdges);
        if (req.other) parts.push(req.other);
        return parts.join(' | ');
    }

	// --- Hindrances Logic ---
    const hindranceTypes: HindranceType[] = ['Minor', 'Major', 'Minor/Major'];
	let selectedHindranceType = $state<HindranceType | 'All'>('All');
	let filteredHindrances = $derived(
		selectedHindranceType === 'All'
			? hindrancesData
			: hindrancesData.filter((h) => h.type === selectedHindranceType || (selectedHindranceType !== 'All' && h.type === 'Minor/Major'))
	);

    // --- Modal State ---
    type InspectableItem = Edge | Hindrance;
    let inspectedItem = $state<InspectableItem | null>(null);
    // svelte-ignore non_reactive_update
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

    // Type guard function remains the same
    function isEdge(item: InspectableItem | null): item is Edge {
        // Check for null first
        if (!item) return false;
        return (item as Edge).category !== undefined;
    }

    // Derived state for modal colors based on the type of inspectedItem
    let modalDisplayConfig = $derived(() => {
        if (!inspectedItem) return null;

        if (isEdge(inspectedItem)) {
            return {
                colors: edgeCategoryColors[inspectedItem.category] || edgeCategoryColors.Background,
                isEdge: true,
                item: inspectedItem // Now item is correctly typed as Edge
            };
        } else {
            return {
                colors: hindranceTypeColors[inspectedItem.type] || hindranceTypeColors.Minor,
                isEdge: false,
                item: inspectedItem // Now item is correctly typed as Hindrance
            };
        }
    });

</script>

<svelte:window onkeydown={handleKeydown} />


<section
    class="bg-surface-500 dark:bg-surface-500 w-full min-h-screen  relative transition-all duration-300"
    class:filter={inspectedItem ? 'blur-sm brightness-75 dark:brightness-50' : 'none'}
    class:pointer-events-none={inspectedItem}
    class:bg-surface-50-900-token={!inspectedItem}
    class:dark:bg-surface-900={!inspectedItem}
    in:fade={{ duration: 300}}
>
	<!-- Header Section -->
	<div class="pt-24 bg-surface-500 dark:bg-surface-500 relative mb-12 w-full shadow-xl md:mb-20">
		<div class="absolute inset-0 z-0 h-[500px] md:h-[550px]">
			<img src="/images/clockpunk-edges.avif" alt="Scrolls, cards, and adventuring gear" class="h-full w-full object-cover object-center "/>
		</div>
		<div class="absolute inset-0 z-10 h-[500] md:h-[550px] bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
		<div class="relative z-20 mx-auto flex h-[300px] max-w-4xl flex-col items-center justify-center px-4 text-center md:h-[350px]">
			<div>
				<h1 class="h1 text-primary-50 mb-6">Edges & Hindrances</h1>
				<p class="text-lg text-primary-100 dark:text-primary-200 md:text-xl">
					Explore special abilities (Edges) that define your hero's strengths, and compelling flaws (Hindrances) that add depth and challenge.
				</p>
			</div>
		</div>
	</div>

	<!-- Main Content Area with Tabs -->
	<div class="pt-12 bg-surface-500 dark:bg-surface-500 mx-auto max-w-8xl px-12">
		<Tabs
            value={activeTab}
            onValueChange={(e) => (activeTab = e.value)}
            listJustify="justify-center"
            listBorder="border-b border-surface-300 dark:border-surface-700"
            listGap="gap-0"
            listClasses="mb-6"
            contentClasses="pt-6"
        >
			{#snippet list()}
				<Tabs.Control value="edges" padding="px-4 py-3 md:px-6 md:py-3" classes="rounded-t-md">
                    {#snippet lead()}<IconSword size={20} />{/snippet}
                    <span class="text-base md:text-lg">Edges</span>
                </Tabs.Control>
				<Tabs.Control value="hindrances" padding="px-4 py-3 md:px-6 md:py-3" classes="rounded-t-md">
                    {#snippet lead()}<IconShieldOff size={20} />{/snippet}
                    <span class="text-base md:text-lg">Hindrances</span>
                </Tabs.Control>
			{/snippet}

			{#snippet content()}
				<Tabs.Panel value="edges" classes="min-h-[50vh]">
					<h3 class="h3 mb-6 text-center text-secondary-500 dark:text-secondary-500">New Edges</h3>
                    <div class="mb-8 flex flex-wrap justify-center gap-2">
                        <button type="button" class="btn {selectedEdgeCategory === 'All' ? 'variant-filled-primary' : 'variant-ghost-surface'}" onclick={() => selectedEdgeCategory = 'All'}>All</button>
                        {#each edgeCategories as category}
                            {@const catColors = edgeCategoryColors[category] || edgeCategoryColors.Background}
                            <button
                                type="button"
                                class="btn {selectedEdgeCategory === category ? `${catColors.bg} ${catColors.text} !border-transparent shadow-md` : 'variant-ghost-surface'}"
                                onclick={() => selectedEdgeCategory = category}
                            >
                                {category}
                            </button>
                        {/each}
                    </div>

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-12">
                        {#if filteredEdges.length > 0}
                            {#each filteredEdges as edge (edge.id)}
                                {@const colors = edgeCategoryColors[edge.category] || edgeCategoryColors.Background}
                  <div
        role="button"                         
        tabindex="0"                         
        onclick={() => inspectItem(edge)}
        onkeydown={(event) => {               
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default space scroll
                inspectItem(edge);
            }
        }}
        class="mt-8 edge-card {colors.bg} cursor-pointer hover:border hover:border-tertiary-500 hover:scale-105 transition-all duration-300" 
        style="box-shadow: 0 0 0 1px {colors.shadowColor || 'transparent'}, 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);"
        aria-label="Inspect {edge.name}"
    >
        <header class="p-4 text-center {colors.text} border-b {colors.border} opacity-90">
            <h4 class="h4 !mb-0 truncate font-bold" title={edge.name}>{edge.name}</h4>
        </header>
        {#if edge.image}
            <img src={edge.image} alt="Art for {edge.name}" class="aspect-[16/10] w-full object-cover" />
        {:else}
            <div class="aspect-[16/10] w-full bg-surface-300-600-token flex items-center justify-center opacity-50">
                <IconSword size={64} class="text-surface-500 dark:text-surface-400" />
            </div>
        {/if}
        <article class="text-lg prose prose-sm dark:prose-invert p-4 flex-grow {colors.text}" style="background-color: rgba(0,0,0,0.05); backdrop-filter: blur(2px);">
            {#each edge.description as p} <p>{@html p}</p> {/each}
        </article>
        <footer class="p-3 mt-auto border-t {colors.border} {colors.text} text-xs opacity-80">
            <div class="flex justify-between items-center">
                <span class="font-semibold">{edge.category}</span>
                <span class="text-right">{formatRequirements(edge.requirements)}</span>
            </div>
        </footer>
    </div>
{/each}
                        {:else} <p class="col-span-full text-center text-lg text-surface-500 dark:text-surface-400">No edges found for this category.</p>{/if}
                    </div>
				</Tabs.Panel>

				<Tabs.Panel value="hindrances" classes="min-h-[50vh]">
					<h3 class="h3 mb-6 text-center text-secondary-500 dark:text-secondary-500">New Hindrances</h3>
					<div class="mb-8 flex flex-wrap justify-center gap-2">
                        <button type="button" class="btn {selectedHindranceType === 'All' ? 'variant-filled-error' : 'variant-ghost-surface'}" onclick={() => selectedHindranceType = 'All'}>All</button>
                        {#each hindranceTypes as typeName}
                            {@const typeColors = hindranceTypeColors[typeName]}
                             <button
                                type="button"
                                class="btn {selectedHindranceType === typeName ? `${typeColors.bg} ${typeColors.text} !border-transparent shadow-md` : 'variant-ghost-surface'}"
                                onclick={() => selectedHindranceType = typeName}
                            >
                                {typeName}
                            </button>
                        {/each}
                    </div>
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-screen pb-12">
                        {#if filteredHindrances.length > 0}
                           {#each filteredHindrances as hindrance (hindrance.id)}
    {@const colors = hindranceTypeColors[hindrance.type] || hindranceTypeColors.Minor}
    <div
        role="button"
        tabindex="0"
        onclick={() => inspectItem(hindrance)}
        onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                inspectItem(hindrance);
            }
        }}
        class="edge-card {colors.bg} cursor-pointer  hover:border hover:border-tertiary-500 hover:scale-105 transition-all duration-300"
        style="box-shadow: 0 0 0 1px {colors.shadowColor || 'transparent'}, 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);"
        aria-label="Inspect {hindrance.name}"
    >
        <header class="p-4 text-center {colors.text} border-b {colors.border} opacity-90">
            <h4 class="h4 !mb-0 truncate font-bold" title={hindrance.name}>{hindrance.name}</h4>
        </header>
        {#if hindrance.image}
            <img src={hindrance.image} alt="Art for {hindrance.name}" class="aspect-[16/10] w-full object-cover" />
        {:else}
            <div class="aspect-[16/10] w-full bg-surface-300-600-token flex items-center justify-center opacity-50">
                <IconShieldOff size={64} class="text-surface-500 dark:text-surface-400" />
            </div>
        {/if}
        <article class="text-lg prose prose-sm dark:prose-invert p-4 flex-grow {colors.text}" style="background-color: rgba(0,0,0,0.05); backdrop-filter: blur(2px);">
            {#each hindrance.description as p} <p>{@html p}</p> {/each}
        </article>
        <footer class="p-3 mt-auto border-t {colors.border} {colors.text} text-xs opacity-80">
            <div class="flex justify-start items-center">
                <span class="font-semibold">{hindrance.type}</span>
            </div>
        </footer>
    </div>
{/each}
                        {:else} <p class="col-span-full text-center text-lg text-surface-500 dark:text-surface-400">No hindrances found for this type.</p>{/if}
                    </div>
				</Tabs.Panel>
			{/snippet}
		</Tabs>
	</div>
</section>


<!-- Universal Card Inspection Modal -->
{#if inspectedItem && modalDisplayConfig()} <!-- Call modalDisplayConfig as a function -->
    {@const config = modalDisplayConfig()} <!-- Get the actual object value -->

    {#if config} <!-- Add an inner check for null, as the derived state can return null -->
        {@const modalColors = config.colors}
        {@const currentItem = config.item}
        {@const itemIsEdgeType = config.isEdge}

        <div
            transition:fade={{ duration: 150 }}
            class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 dark:bg-black/90"
            role="presentation"
            onclick={handleModalBackdropClick}
        >
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div
                bind:this={modalElement}
                class="relative flex flex-col overflow-hidden rounded-xl shadow-2xl w-full max-w-md md:max-w-lg {modalColors.bg} border-2 {modalColors.border}"
                onclick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="inspected-item-name-{currentItem.id}"
                tabindex="-1"
            >
                <button
                    type="button"
                    onclick={closeModal}
                    class="absolute top-2 right-2 btn btn-sm btn-circle z-10 {modalColors.bg === 'bg-black' || modalColors.bg === 'bg-gray-800' || modalColors.bg === 'bg-surface-900' || modalColors.bg.includes('dark:bg-surface-800') || modalColors.bg.includes('dark:bg-surface-900') ? 'variant-ghost-surface text-white hover:!bg-white/20' : 'variant-ghost-surface text-black hover:!bg-black/10'}"
                    aria-label="Close inspected item"
                >
                    <IconX size={20}/>
                </button>

                <header class="p-5 text-center {modalColors.text} border-b-2 {modalColors.border} opacity-90">
                    <h4 id="inspected-item-name-{currentItem.id}" class="h3 !mb-0 font-bold">{currentItem.name}</h4>
                </header>

                {#if currentItem.image}
                    <img src={currentItem.image} alt="Art for {currentItem.name}" class="aspect-[16/10] w-full object-cover" />
                {:else}
                    <div class="aspect-[16/10] w-full bg-surface-300-600-token flex items-center justify-center opacity-50">
                        {#if itemIsEdgeType} <IconSword size={80} class="text-surface-500 dark:text-surface-400" />
                        {:else} <IconShieldOff size={80} class="text-surface-500 dark:text-surface-400" /> {/if}
                    </div>
                {/if}

                <article class="text-2xl prose dark:prose-invert p-5 flex-grow overflow-y-auto max-h-[calc(80vh-200px)] {modalColors.text} bg-black/10 dark:bg-black/20 text-sm md:text-base">
                    {#each currentItem.description as p}
                        <p>{@html p}</p>
                    {/each}
                </article>

                <footer class="p-4 mt-auto border-t-2 {modalColors.border} {modalColors.text} text-sm opacity-90">
                    <div class="flex justify-between items-center">
                        {#if itemIsEdgeType && 'category' in currentItem && 'requirements' in currentItem}
                            <span class="font-bold">{currentItem.category}</span>
                            <span class="text-right">{formatRequirements(currentItem.requirements)}</span>
                        {:else if !itemIsEdgeType && 'type' in currentItem}
                            <span class="font-bold">{currentItem.type}</span>
                            <span></span>
                        {/if}
                    </div>
                </footer>
            </div>
        </div>
    {/if} 
{/if} 

<style lang="postcss">
.edge-card { /* Shared style for Edge and Hindrance cards */
    @apply flex flex-col overflow-hidden rounded-lg text-left;
}

.prose p {
    @apply my-1.5;
}
.prose strong {
    @apply text-current font-bold;
}
:global(.tabs-list .tab[aria-selected="true"]) {
    @apply !bg-primary-500 dark:!bg-primary-600 !text-on-primary-token;
}
:global(.tabs-list .tab) {
    @apply transition-colors duration-200;
}
.scale-x-[-1] { transform: scaleX(-1); }
.scale-y-[-1] { transform: scaleY(-1); }
</style>