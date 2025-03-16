<script lang="ts">
	import { LucideArrowDown } from '@lucide/svelte';

	// Scroll function for the CTA button
	function scrollDown() {
		// This will be implemented later, placeholder for now
		console.log('Scroll down');
	}
</script>

<section class="relative flex min-h-screen w-full flex-col items-center justify-center">
	<!-- Dimmed background -->
	<div class="absolute inset-0 z-0 bg-neutral-800 opacity-80">
		<!-- Placeholder for background image -->
		<div
			class="from-secondary-900 to-primary-900 absolute inset-0 bg-gradient-to-b opacity-80"
		></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-2xl px-4 text-center">
		<h1 class="text-primary-50">Illuvia</h1>
		<h4 class="text-primary-500 mb-8">The Clockwork Age</h4>

		<p class="mb-10 text-2xl text-white">
			Dive into a world of Renaissance science, gunpowder, <br />
			and fantasy. Where everyone are racing against time to <br />
			fulfill their greatest ambition.<br />
			<br />
			Will you be just another cog in the machine or the one who frees them?
		</p>

		<button class="mx-auto flex items-center gap-2" onclick={scrollDown}>
			Find out More
			<LucideArrowDown size={20} />
		</button>
	</div>
</section>

<!-- <style> -->
<!-- 	/* /* Additional custom styles if needed */ */ -->
<!-- 	/* .hero { */ -->
<!-- 	/* 	font-family: var(--font-heading); */ -->
<!-- 	/* } */ -->
<!-- </style> -->
