<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Tabs } from '@skeletonlabs/skeleton-svelte'; 
	import { combatRulesData, type CombatRule, type TabbedContentItem } from '$lib/components/data/CombatRules';
	import { LucideBookMarked, LucideUserPlus } from '@lucide/svelte';

	
    let numberCrunchinSubTab = $state(combatRulesData.find(r => r.id === 'number-crunchin')?.tabbedContent?.[0]?.id || 'melee-attacks');

</script>

<section
	class="bg-tertiary-400 dark:bg-tertiary-400 flex min-h-screen w-full flex-col items-center pb-16 pt-0 md:pb-24"
	in:fade={{ duration: 300 }}
>
	<!-- Full-width Background Container for Title  -->
	<div class="relative mb-12 w-full shadow-xl md:mb-20 h-[450px] md:h-[550px]">
		<div class="absolute inset-0 z-0 h-full">
			<img src="/images/illuvia-battle.avif" alt="Dynamic battle scene in Illuvia" class="h-full w-full object-cover object-center"/>
		</div>
		<div class="absolute inset-0 z-10 h-full bg-neutral-900/60 dark:bg-neutral-900/75"></div>
		<div class="relative z-20 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
			<div>
				<h1 class="h1 text-primary-50 mb-6">Combat: Fast, Furious, Fun!</h1>
				<p class="text-xl text-primary-100 dark:text-primary-200 md:text-2xl">
					Master the flow of battle in Savage Worlds. From swift initiative to impactful actions, here’s how conflicts are resolved in Illuvia.
				</p>
			</div>
		</div>
	</div>

	<!-- Combat Rules Grid -->
	<div class="grid w-full max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:gap-8 md:px-8">
		{#each combatRulesData as rule (rule.id)}
			{@const RuleIcon = rule.icon}
			<div
				class="card group bg-surface-100/10 border border-secondary-600 flex flex-col rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
			>
				<div class="mb-4 flex items-center gap-4 border-b border-primary-600 pb-4">
					<RuleIcon
						class="h-10 w-10 flex-shrink-0 {rule.iconColor || 'text-secondary-500 dark:text-secondary-600'}"
						strokeWidth={1.5}
					/>
					<h3 class="h3 text-secondary-600 dark:text-secondary-600 flex-grow">{rule.title}</h3>
				</div>

                {#if rule.intro}
                    {#each rule.intro as paragraph}
                        <p class="text-token mb-3 text-xl text-black leading-relaxed">{@html paragraph}</p>
                    {/each}
                {/if}

				{#if rule.listItems && rule.listItems.length > 0}
					<ul class="text-token mb-4 ml-1 space-y-3 text-lg">
						{#each rule.listItems as item}
							<li class="pl-2">
                                <strong class="text-secondary-600 dark:text-secondary-600 block mb-0.5">{item.name}:</strong>
                                <span class="text-surface-700 dark:text-surface-950">{@html item.description}</span>
                                {#if item.penalty}<span class="text-warning-500 font-semibold ml-1">({item.penalty})</span>{/if}
                                {#if item.note}<em class="block text-sm text-surface-600 dark:text-surface-900 ml-4 mt-1">Note: {item.note}</em>{/if}
                            </li>
						{/each}
					</ul>
				{/if}

                {#if rule.tabbedContent && rule.tabbedContent.length > 0}
                    {@const tabsForThisRule = rule.tabbedContent} 
                    <Tabs
                        value={numberCrunchinSubTab}
                        onValueChange={(e) => (numberCrunchinSubTab = e.value)}
                        listJustify="justify-center"
                        listBorder="border-b border-surface-300 dark:border-surface-700"
                        listClasses="mb-4 mt-2 -mx-2 sm:mx-0" 
                        contentClasses="pt-4"
                      
                    >
                        {#snippet list()}
                            {#each tabsForThisRule as subTab (subTab.id)}
                                {@const SubTabIcon = subTab.icon}
                                <Tabs.Control value={subTab.id} padding="px-2 py-1.5 md:px-3 md:py-2" classes="rounded-t-md">
                                    {#if SubTabIcon}{#snippet lead()}<SubTabIcon size={16} class="mr-1 md:mr-1.5"/>{/snippet}{/if}
                                    <span class="text-xs md:text-sm">{subTab.title}</span>
                                </Tabs.Control>
                            {/each}
                        {/snippet}
                        {#snippet content()}
                            {#each tabsForThisRule as subTab (subTab.id)}
                                <Tabs.Panel value={subTab.id}>
                                    {#if subTab.intro}
                                        {#each subTab.intro as p}<p class="text-token mb-2 text-sm md:text-base">{@html p}</p>{/each}
                                    {/if}
                                    {#if subTab.keyPoints && subTab.keyPoints.length > 0}
                                        <ul class="text-token text-black list-disc space-y-1 pl-5 text-md md:text-lg">
                                            {#each subTab.keyPoints as point}
                                                <li>{@html point}</li>
                                            {/each}
                                        </ul>
                                    {/if}
                                    {#if subTab.listItems && subTab.listItems.length > 0}
                                        <ul class="text-token space-y-2 text-sm md:text-base">
                                            {#each subTab.listItems as sItem}
                                            <li><strong class="text-secondary-500 dark:text-secondary-400">{sItem.name}:</strong> {@html sItem.description}</li>
                                            {/each}
                                        </ul>
                                    {/if}
                                </Tabs.Panel>
                            {/each}
                        {/snippet}
                    </Tabs>
                {/if}

                {#if rule.tableData && rule.tableData.rows.length > 0}
                    <div class="table-wrap my-4 -mx-2 sm:mx-0 rounded-lg border border-surface-300 dark:border-surface-700 overflow-hidden">
                        <table class="table table-hover w-full text-left text-sm md:text-base">
                            <thead>
                                <tr>
                                    {#each rule.tableData.headers as header, colIndex}
                                        <th class="!bg-surface-200-700-token p-3 font-bold uppercase tracking-wider text-surface-700 dark:text-surface-900 {colIndex === 0 ? 'w-1/3 md:w-2/5' : ''}">{header}</th>
                                    {/each}
                                </tr>
                            </thead>
                            <tbody class="[&>tr]:hover:preset-tonal-primary dark:[&>tr]:hover:!bg-primary-900/30">
                                {#each rule.tableData.rows as rowItem, i (i)}  <!-- Added key for row iteration -->
                                    <tr class="{i % 2 === 0 ? 'bg-surface-50-900-token' : 'bg-surface-100-800-token'}">
                                        {#each rule.tableData.headers as headerKey, colIndex}
                                            {@const cellKey = headerKey.toLowerCase().replace(/\s+/g, '').replace(/\(\+\d+\s*pp\)/i, '')}
                                            {@const currentCellItem = rowItem as any}
                                            <td class="p-3 text-token align-top text-black">
                                                {#if colIndex === 0 && currentCellItem.icon}
                                                    {@const ModifierIcon = currentCellItem.icon}
                                                    <div class="flex items-center">
                                                        <ModifierIcon size={20} class="mr-2 text-secondary-500 flex-shrink-0" />
                                                        <span>{@html currentCellItem[cellKey] || currentCellItem.name || currentCellItem.condition || '-'}</span>
                                                    </div>
                                                {:else}
                                                    {@html currentCellItem[cellKey] || currentCellItem.effect || currentCellItem.name || currentCellItem.condition || '-'}
                                                {/if}
                                            </td>
                                        {/each}
                                    </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>
                {/if}

				{#if rule.keyPoints && !rule.tabbedContent && rule.keyPoints.length > 0}
                    <div class="mt-auto rounded-md border-l-4 border-secondary-500 bg-secondary-200-700-token p-4 text-token">
                        <h4 class="h5 text-secondary-600 dark:text-secondary-600 mb-2 font-semibold">Key Takeaways:</h4>
                        <ul class="text-black ml-5 list-disc space-y-1 text-lg">
                            {#each rule.keyPoints as point}
                                <li>{@html point}</li>
                            {/each}
                        </ul>
                    </div>
				{/if}
			</div>
		{/each}
	</div>

    <div class="mt-16 w-full max-w-3xl text-center md:mt-24 border-b border-primary-800">
		<p class="text-xl text-secondary-100 dark:text-secondary-500">
			This covers the essentials of Savage Worlds combat. For more advanced tactics, situational rules, and specific gear interactions, consult SWADE Core Rulebook.
		</p>
	</div>

    <!-- Concluding CTA Section -->
	<div class="w-full max-w-3xl text-center md:mt-24">
    <h2 class="h2 text-secondary-500 dark:text-secondary-600 mb-8">Back To Basics or Learn More?</h2>
		<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
			<a
				href="/characters"
				class="btn variant-filled-primary bg-secondary-700 text-white rounded-xl flex items-center justify-center gap-2 text-lg"
			>
				<LucideUserPlus size={24} />
				Character Creation
			</a>
			<a
				href="/rules"
				class="btn variant-filled-secondary flex bg-secondary-700 text-white rounded-xl items-center justify-center gap-2 text-lg"
			>
				<LucideBookMarked size={24} />
				Core Rules
			</a>
            <a
				href="/rules/new"
				class="btn variant-filled-secondary flex bg-secondary-700 text-white rounded-xl items-center justify-center gap-2 text-lg"
			>
				<LucideBookMarked size={24} />
				New Rules
			</a>
		</div>
	</div>
</section>

<style lang="postcss">
	.text-token li::marker { @apply text-surface-500 dark:text-surface-400; }
    .prose ul { @apply my-2 list-disc pl-5; }
    .prose strong { @apply font-semibold text-primary-600 dark:text-primary-400; } /* Global strong in prose */
    /* For strong tags within list items specifically if needed */
    ul li strong { @apply text-secondary-600 dark:text-secondary-400; }

    .table th, .table td { @apply text-token; }
    .table thead th { /* More specific selector for head */
        @apply !bg-surface-200-700-token text-surface-700 dark:text-surface-300;
    }
    .table-container {
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
</style>