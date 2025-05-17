<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Tabs, Accordion } from '@skeletonlabs/skeleton-svelte'; // Accordion is already here
	import { powersData, type Power, type PowerRank, powerRankColors, type PowerModifierItem } from '$lib/components/data/NewPowers';
	import { newGeneralModifiersData, type PowerWithNewModifiers, type GeneralPowerModifier, modifierGroupColors } from '$lib/components/data/NewGeneralModifiers';
	import { elementalManipulationTableData, type ElementalManipulationEntry } from '$lib/components/data/ElementalManipulationTable';    
    import IconZap from '@lucide/svelte/icons/zap';
	import IconSettings2 from '@lucide/svelte/icons/settings-2';
    import IconX from '@lucide/svelte/icons/x';
    import IconListChecks from '@lucide/svelte/icons/list-checks';

    let activeTab = $state('powers');

	// --- Powers Logic  ---
	const powerRanks: PowerRank[] = ['Novice', 'Seasoned', 'Veteran', 'Heroic', 'Legendary'];
	let selectedPowerRank = $state<PowerRank | 'All'>('All');
	let filteredPowers = $derived(
		selectedPowerRank === 'All'
			? powersData
			: powersData.filter((power) => power.rank === selectedPowerRank)
	);

	// --- General Modifiers Logic ---
    let openModifierAccordions = $state<string[]>([]);

    // --- Modal State (currently only for inspecting 'New Powers') ---
    type InspectableItem = Power;
    let inspectedItem = $state<InspectableItem | null>(null);
    let modalElement = $state<HTMLDivElement | null>(null);

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
    let modalDisplayConfig = $derived(() => {
        if (!inspectedItem) return null;
        return {
            colors: powerRankColors[inspectedItem.rank] || powerRankColors.Novice,
            item: inspectedItem
        };
    });
</script>

<svelte:window onkeydown={handleKeydown} />

<section
    class="bg-tertiary-400 dark:bg-tertiary-400 w-full min-h-screen relative transition-all duration-300"
    class:filter={inspectedItem ? 'blur-sm brightness-75 dark:brightness-50' : 'none'}
    class:pointer-events-none={inspectedItem}
    class:bg-surface-50-900-token={!inspectedItem}
    class:dark:bg-surface-900={!inspectedItem}
    in:fade={{ duration: 300}}
>
	<!-- Header Section -->
	<div class="pt-24 bg-tertiary-400 dark:bg-tertiary-400 relative mb-12 w-full shadow-xl md:mb-20">
		<div class="absolute inset-0 z-0 h-[500px] md:h-[550px]">
			<img src="/images/illuvia-powers.avif" alt="Arcane energies and ancient tomes" class="h-full w-full object-cover object-center"/>
		</div>
		<div class="absolute inset-0 z-10 h-[500px] md:h-[550px] bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
		<div class="relative z-20 mx-auto flex h-[300px] max-w-4xl flex-col items-center justify-center px-4 text-center md:h-[350px]">
			<div>
				<h1 class="h1 text-primary-50 mb-6">Powers & Modifiers</h1>
				<p class="text-lg text-primary-100 dark:text-primary-200 md:text-xl">
					Unleash potent abilities (Powers) and customize them with unique alterations (Modifiers).
				</p>
			</div>
		</div>
	</div>

	<!-- Main Content Area with Tabs -->
	<div class="pt-12 bg-tertiary-400 dark:bg-tertiary-400 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
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
				<Tabs.Control value="powers" padding="px-4 py-3 md:px-6 md:py-3" classes="rounded-t-md">
                    {#snippet lead()}<IconZap size={20} />{/snippet}
                    <span class="text-base md:text-lg">New Powers</span>
                </Tabs.Control>
				<Tabs.Control value="modifiers" padding="px-4 py-3 md:px-6 md:py-3" classes="rounded-t-md">
                    {#snippet lead()}<IconSettings2 size={20} />{/snippet}
                    <span class="text-base md:text-lg">New Modifiers</span>
                </Tabs.Control>
			{/snippet}

			{#snippet content()}
				<Tabs.Panel value="powers" classes="min-h-[50vh]">
					<h3 class="h3 mb-6 text-center text-secondary-500 dark:text-secondary-500">New Powers</h3>
                    <div class="mb-8 flex flex-wrap justify-center gap-2">
                        <button type="button" class="btn rounded {selectedPowerRank === 'All' ? 'variant-filled-primary' : 'variant-ghost-surface'}" onclick={() => selectedPowerRank = 'All'}>All Ranks</button>
                        {#each powerRanks as rank}
                            {@const rankBtnColors = powerRankColors[rank] || powerRankColors.Novice}
                            <button
                                type="button"
                                class="btn {selectedPowerRank === rank ? `${rankBtnColors.bg} ${rankBtnColors.text} !border-transparent shadow-md` : 'variant-ghost-surface'} rounded"
                                onclick={() => selectedPowerRank = rank}
                            >
                                {rank}
                            </button>
                        {/each}
                    </div>

                    <div class="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-12"> 
                        {#if filteredPowers.length > 0}
                            {#each filteredPowers as power (power.id)}
                                {@const colors = powerRankColors[power.rank] || powerRankColors.Novice}
                                <div
                                    role="button"
                                    tabindex="0"
                                    onclick={() => inspectItem(power)}
                                    onkeydown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault();
                                            inspectItem(power);
                                        }
                                    }}
                                    class="power-card {colors.bg} cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
                                    style="box-shadow: 0 0 0 1px {colors.shadowColor || 'transparent'}, 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);"
                                    aria-label="Inspect {power.name}"
                                >
                                    <header class="p-4 text-center {colors.text} border-b {colors.border} opacity-90">
                                        <h4 class="h4 !mb-0 truncate font-bold" title={power.name}>{power.name}</h4>
                                    </header>

                                    {#if power.image}
                                        <img src={power.image} alt="Art for {power.name}" class="aspect-[16/10] w-full object-cover" />
                                    {:else}
                                        <div class="aspect-[16/10] w-full bg-surface-300-600-token flex items-center justify-center opacity-50">
                                            <IconZap size={64} class="text-surface-500 dark:text-surface-400" />
                                        </div>
                                    {/if}

                                    <article class="text-base prose prose-sm dark:prose-invert p-4 flex-grow {colors.text}" style="background-color: rgba(0,0,0,0.05); backdrop-filter: blur(2px);">
                                        {#each power.description as p} <p>{@html p}</p> {/each}

                                        <!-- Display Reference Table in Card and Compact) -->
                                        {#if power.referenceTable}
                                            <div class="mt-3 text-xs opacity-90 border-t {colors.border} pt-2">
                                                <h6 class="font-semibold mb-1">{power.referenceTable.caption || 'Reference Table'}:</h6>
                                                <!-- A very compact representation or just a note to see modal -->
                                                <p class="italic">See details in modal for {power.referenceTable.caption || 'table'}.</p>
                                            </div>
                                        {/if}
                                    </article>

                                    {#if power.modifiers && power.modifiers.length > 0}
                                        <div class="border-t {colors.border} mt-auto">
                                            <div class="px-4 py-3 {colors.text} text-sm opacity-90">
                                                <h5 class="font-semibold mb-1.5 text-xs uppercase tracking-wider">Modifiers:</h5>
                                                <ul class="space-y-1 text-xs">
                                                    {#each power.modifiers as modifier (modifier.id)}
                                                        <li>
                                                            <strong class="font-medium">{modifier.name} ({modifier.cost}):</strong>
                                                            <span class="opacity-90"> {@html modifier.effect}</span>
                                                        </li>
                                                    {/each}
                                                </ul>
                                            </div>
                                        </div>
                                    {/if}

                                    <footer class="p-3 mt-auto border-t {colors.border} {colors.text} text-xs opacity-80">
                                        <div class="flex justify-between items-start gap-2">
                                            <div class="text-left ml-2 flex-shrink-0 items-center">
                                                <span class="font-semibold block">{power.rank}</span>
                                            </div>
                                            <div class="text-right flex-shrink min-w-0">
                                                <div class="truncate" title="PP: {power.powerPoints}"><strong>PP:</strong> {power.powerPoints}</div>
                                                <div class="truncate" title="Range: {power.range}"><strong>Rg:</strong> {power.range}</div>
                                                <div class="truncate" title="Duration: {power.duration}"><strong>Dr:</strong> {power.duration}</div>
                                                <div class="mt-1 text-wrap" title="Trappings: {power.trappings}"><strong>Tr:</strong> {power.trappings}</div>
                                            </div>  
                                        </div>
                                    </footer>
                                </div>
                            {/each}
                        {:else} <p class="col-span-full text-center text-lg text-surface-500 dark:text-surface-400">No powers found for this rank.</p>{/if}
                    </div>
				</Tabs.Panel>

			
				<Tabs.Panel value="modifiers" classes="min-h-[50vh]">
					<h3 class="h3 mb-6 text-center text-secondary-500 dark:text-secondary-500">New Modifiers</h3>
                    <p class="text-semibold text-token mb-8 text-center text-surface-950 dark:text-surface-950 text-xl max-w-3xl mx-auto">
                        These are new ways to augment existing powers from the Savage Worlds core rules or companion books. Click on a power name to see its new modifier options.
                    </p>

                    {#if newGeneralModifiersData && newGeneralModifiersData.length > 0}
                        <div class="grid grid-cols-4 gap-4 md:grid-cols-5 md:gap-6 max-w-8xl mx-auto">
                            {#each newGeneralModifiersData as powerGroup (powerGroup.id)}
                                <Accordion
                                    value={openModifierAccordions}
                                    onValueChange={(e) => openModifierAccordions = e.value}
                                    multiple
                                    collapsible
                                    classes="w-full"
                                    padding="p-0"
                                >
                                    <Accordion.Item
                                        value={powerGroup.id}
                                        classes="!{modifierGroupColors.bg} rounded-lg shadow-lg overflow-hidden w-full group/item"
                                        controlClasses="!p-0 relative"
                                        panelPadding="p-0"
                                    >
                                        {#snippet control()}
                                            <div class="relative h-32 md:h-36 w-full">
                                                {#if powerGroup.image}
                                                    <div
                                                        class="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-300 ease-in-out group-hover/item:scale-105"
                                                        class:scale-x-[-1]={powerGroup.flipImage === 'horizontal'}
                                                        class:scale-y-[-1]={powerGroup.flipImage === 'vertical'}
                                                        style:background-image="url('{powerGroup.image}')"
                                                        style:background-position={powerGroup.backgroundPosition || 'center center'}
                                                    ></div>
                                                    <div class="hover:scale-105 transition-transform duration-300 ease-in-out group-hover/item:scale-105 absolute inset-0 {modifierGroupColors.gradient}"></div>
                                                {/if}
                                                <div class="absolute inset-y-0 left-0 p-4 flex items-center space-x-3 w-4/5 md:w-3/4">
                                                  {#if powerGroup.icon}
                                                    <!-- Render Lucide icon directly -->
                                                    {@const IconComponent = powerGroup.icon}
                                                    <IconComponent size={28} class="text-primary-500 flex-shrink-0" strokeWidth={1.75} />
                                                {/if}
                                                    <div class="flex flex-col text-left">
                                                        <span class="h5 !mb-0.5 font-bold {modifierGroupColors.text}">{powerGroup.powerName}</span>
                                                        {#if powerGroup.tagline}
                                                            <em class="text-xs {modifierGroupColors.text} opacity-80">{powerGroup.tagline}</em>
                                                        {/if}
                                                    </div>
                                                </div>
                                                <div class="accordion-indicator absolute right-4 top-1/2 -translate-y-1/2 {modifierGroupColors.text} group-data-[state=open]/item:rotate-180 transition-transform">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                                </div>
                                            </div>
                                        {/snippet}
                                        {#snippet panel()}
                                            <div class="p-4 md:p-6 bg-surface-100-800-token">
                                                <div class="prose prose-sm md:prose-base dark:prose-invert max-w-none {modifierGroupColors.text} opacity-95">
                                                    <ul class="!pl-0 !list-none space-y-3">
                                                        {#each powerGroup.newModifiers as modifier (modifier.id)}
                                                            <li class="!pl-0 border-b border-surface-500/20 pb-3 last:border-b-0 last:pb-0">
                                                                <strong class="text-base font-semibold {modifierGroupColors.accentText}">{modifier.name} ({modifier.cost})</strong>
                                                                {#each modifier.description as paragraph}
                                                                    <p class="text-black text-md !my-1">{@html paragraph}</p>
                                                                {/each}
                                                                {#if modifier.trappings}
                                                                    <p class="text-gray-800 text-xs italic !mt-1 opacity-75">Trappings: {modifier.trappings}</p>
                                                                {/if}
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
                        <p class="text-token text-center">Information on new general modifiers coming soon!</p>
                    {/if}
                      <!-- Elemental Manipulation Table Section -->
                    <div class="mt-16 pt-10 pb-8 border-t-2 border-surface-300 dark:border-surface-700">
                        <div class="mb-10 text-center">
                            <IconListChecks size={48} class="mx-auto mb-3 text-secondary-500 dark:text-secondary-400" strokeWidth={1.5} />
                            <h4 class="h4 text-secondary-600 dark:text-secondary-500">Elemental Manipulation Table</h4>
                            <p class="text-xl text-semibold text-surface-950 dark:text-surface-950 max-w-2xl mx-auto">
                                Examples of common effects achieved through the Elemental Manipulation power.
                            </p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {#each elementalManipulationTableData as element (element.id)}
                                {@const ElIcon = element.icon}
                                {@const colors = element.themeColor || { bg: 'bg-surface-100 dark:bg-surface-800', text: 'text-surface-900 dark:text-surface-50', icon: 'text-primary-500 dark:text-primary-400', border: 'border-surface-300 dark:border-surface-700' }}
                                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden {colors.bg} border {colors.border}">
                                    <header class="p-4 flex items-center space-x-3 border-b {colors.border} {colors.bg} sticky top-0 z-10 shadow-sm"> 
                                        <ElIcon size={28} class="{colors.icon} flex-shrink-0" strokeWidth={1.75}/>
                                        <h5 class="h5 !mb-0 font-semibold {colors.text}">{element.elementName}</h5>
                                    </header>
                                    <div class="p-4 md:p-5 flex-grow">
                                        <ul class="space-y-2.5 list-disc list-inside text-sm {colors.text} opacity-90">
                                            {#each element.effects as effect (effect.id)}
                                                <li class="text-md leading-relaxed">{@html effect.description}</li>
                                            {/each}
                                        </ul>
                                    </div>
                                </div>
                            {/each}
                        </div>
                    </div>
				</Tabs.Panel>
			{/snippet}
		</Tabs>
	</div>
</section>

<!-- Universal Power Inspection Modal -->
{#if inspectedItem && modalDisplayConfig()}
    {@const config = modalDisplayConfig()}

    {#if config} 
        {@const modalColors = config.colors}
        {@const currentItem = config.item}

        <div
            transition:fade={{ duration: 150 }}
            class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 dark:bg-black/90"
            role="presentation"
            onclick={handleModalBackdropClick}
        >
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <div
                bind:this={modalElement}
                class="relative flex flex-col overflow-hidden rounded-xl shadow-2xl w-full max-w-lg md:max-w-xl {modalColors.bg} border-2 {modalColors.border}"
                onclick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="inspected-power-name-{currentItem.id}"
                tabindex="-1"
            >
                <button
                    type="button"
                    onclick={closeModal}
                    class="absolute top-3 right-3 btn btn-sm btn-circle z-10 {modalColors.bg.includes('dark:') ? 'variant-ghost-surface text-white hover:!bg-white/20' : 'variant-ghost-surface text-black hover:!bg-black/10'}"
                    aria-label="Close inspected item"
                >
                    <IconX size={20}/>
                </button>

                <header class="p-5 text-center {modalColors.text} border-b-2 {modalColors.border} opacity-90">
                    <h4 id="inspected-power-name-{currentItem.id}" class="h3 !mb-0 font-bold">{currentItem.name}</h4>
                </header>

                {#if currentItem.image}
                    <img src={currentItem.image} alt="Art for {currentItem.name}" class="aspect-[16/9] w-full object-cover" />
                {:else}
                    <div class="aspect-[16/9] w-full bg-surface-300-600-token flex items-center justify-center opacity-50">
                        <IconZap size={80} class="text-surface-500 dark:text-surface-400" />
                    </div>
                {/if}

                <article class="text-xl prose dark:prose-invert p-5 flex-grow overflow-y-auto max-h-[calc(70vh-250px)] {modalColors.text} bg-black/10 dark:bg-black/20 text-sm md:text-base">
                    {#each currentItem.description as p}
                        <p>{@html p}</p>
                    {/each}

                     <!-- Display Reference Table in Modal -->
                    {#if currentItem.referenceTable}
                        {@const table = currentItem.referenceTable}
                        <div class="mt-6 mb-4 table-wrap text-current"> 
                            <table class="table caption-bottom text-xs sm:text-sm w-full"> 
                                {#if table.caption}
                                    <caption class="pt-2 pb-1 font-semibold {modalColors.text} opacity-90">{table.caption}</caption>
                                {/if}
                                <thead class="border-b {modalColors.border} {modalColors.text} opacity-80">
                                    <tr>
                                        {#each table.headers as header}
                                            <th class="!text-left !font-semibold p-2">{header}</th>
                                        {/each}
                                    </tr>
                                </thead>
                                <tbody class="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-surface-500/20 {modalColors.text} opacity-90">
                                    {#each table.rows as row, rowIndex (rowIndex)}
                                        <tr class="hover:bg-surface-500/10">
                                            {#each table.headers as headerKey}
                                                <td class="p-2">{@html String(row[headerKey])}</td>
                                            {/each}
                                        </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    {/if}

                    {#if currentItem.modifiers && currentItem.modifiers.length > 0}
                        <h5 class="h5 !mt-6 !mb-2 {modalColors.text} opacity-90">Modifiers:</h5>
                        <ul class="!pl-5 list-disc space-y-1.5 {modalColors.text} opacity-90">
                            {#each currentItem.modifiers as modifier (modifier.id)}
                                <li>
                                    <strong class="font-medium">{modifier.name} ({modifier.cost}):</strong>
                                    <span class="opacity-90"> {@html modifier.effect}</span>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </article>

                <footer class="p-4 mt-auto border-t-2 {modalColors.border} {modalColors.text} text-sm opacity-90">
                    <div class="grid grid-cols-2 gap-x-4 gap-y-1">
                        <div><strong>Rank:</strong> {currentItem.rank}</div>
                        <div><strong>Power Points:</strong> {currentItem.powerPoints}</div>
                        <div><strong>Range:</strong> {currentItem.range}</div>
                        <div><strong>Duration:</strong> {currentItem.duration}</div>
                        <div class="col-span-2 mt-1"><strong>Trappings:</strong> {currentItem.trappings}</div>
                    </div>
                </footer>
            </div>
        </div>
    {/if}
{/if}

<style lang="postcss">
.power-card {
    @apply rounded-lg text-left shadow-lg; /* Keep overflow-hidden on parent if image has different border-radius */
}
.prose p {
    @apply my-1.5; /* Consistent with Edges/Hindrances */
}
.prose strong {
    @apply text-current font-bold; /* Consistent */
}
/* Tab active state styling, same as Edges/Hindrances */
:global(.tabs-list .tab[aria-selected="true"]) {
    @apply !bg-primary-500 dark:!bg-primary-600 !text-on-primary-token;
}
:global(.tabs-list .tab) {
    @apply transition-colors duration-200;
}
.text-wrap {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
}
</style>