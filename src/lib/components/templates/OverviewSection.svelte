<script lang="ts">
	// Placeholder for any future logic or imports
	// import { SomeIcon } from '@lucide/svelte';

	const overviewContent = [
		{
			id: 1,
			title: "The Fool's Journey",
			text: `Welcome to Illuvia, a science-fantasy realm where intricate clockwork mechanisms power an age of discovery, gunpowder, and revolution. Inspired by the 17th-18th centuries, diverse peoples—humans, elves, sentient automatons, and more—chase grand ambitions. You are "The Fool," not in folly, but as the Wild Card, a catalyst for change. Feared by the powerful, your transformative journey could dismantle old orders or herald a new era. Will you be a mere cog, or the architect of Illuvia's destiny?`
		},
		{
			id: 2,
			title: 'The Essence of Clockpunk',
			text: `Illuvia is steeped in "clockpunk," a genre rewinding to the Renaissance and Baroque eras (1490s-1840s). Imagine Da Vinci's time, but where his fantastical clockwork contraptions, automatons, and early scientific theories truly flourish, often enhanced by arcane energies. The aesthetic mirrors this, blending High Renaissance and Baroque opulence with a fondness for the Late Baroque/Rococo style—expect ornamental, dramatic designs with asymmetry, gilded curves, and theatrical flair, creating a world of surprise and motion.`
		},
		{
			id: 3,
			title: 'A World Reimagined',
			text: `Illuvia is an alternate universe, not Earth, set during its "Age of Revolution" (paralleling 1765-1848). Here, revolutionary ideals ignite an "Age of Enlightenment," driving themes of freedom, rebellion, and progress. Humans coexist with elves, dwarves, and gnomes, their world powered by Chronyte—a mysterious crystal fueling Illuvia's unique magitech. Prepare for uncharted frontiers, thundering naval battles in a golden age of piracy, and tense Wild West duels, all shaped by mythical beings and reality-bending technology.`
		}
	];

	// Image
	const imageUrl = '/images/illuvia-overview.avif'; 
</script>

<section
	id="overview"
	class="bg-tertiary-400 flex min-h-screen w-full flex-col md:flex-row"
>
	<!-- Left Column - Image with Gradient Fade -->
	<div class="relative h-64 w-full md:h-auto md:w-1/2">
		<!-- Base Image - Fades to transparent on its right edge -->
		<div
			class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-black/0 via-black/0 to-transparent"
			style="background-image: url('{imageUrl}');"
		></div>

		<!-- Overlay gradient to blend with the right panel's background (tertiary-400) -->
		<!-- Fades from tertiary-400 on the right (text panel side) to transparent over the image on the left -->
		<div
			class="from-tertiary-400 absolute inset-0 z-10 bg-gradient-to-l via-transparent to-transparent"
		></div>
	</div>

	<!-- Right Column - Text Content as Cards -->
	<div
		class="flex w-full flex-col justify-center gap-6 overflow-y-auto p-6 md:w-1/2 md:gap-8 md:p-12 lg:p-16"
	>
		{#each overviewContent as card (card.id)}
			<div
				class="card border border-secondary-600 shadow-md hover:shadow-xl transition-all duration-300 translate-y-2 bg-surface-100/10 md:p-6 rounded-lg backdrop-blur-sm"
			>
				<h6 class="h6 text-secondary-600 mb-3">{card.title}</h6>
				<p class="text-sm text-black md:text-base">{card.text}</p>
			</div>
		{/each}
	</div>
</section>