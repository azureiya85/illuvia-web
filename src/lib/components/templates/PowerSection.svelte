<script lang="ts">
	import { LucideZap } from '@lucide/svelte';
</script>

<section class="bg-tertiary-400 flex min-h-screen w-full flex-col md:flex-row">
	<!-- Left Column - Text Content -->
	<div class="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-16">
		<div class="max-w-2xl text-left">
			<h3 class="text-secondary-600 mb-6">
				THE MAGIC OF<br />
				SCIENCE
			</h3>

			<p class="mb-10 text-4xl text-black">
				Chronyte, the crystal of unknown origin and unknown potential powers the world of Illuvia.
				Powers up cities, charges technologies, it builds up people's dreams or leads them to their
				downfall. The crystal of peace and mass destruction. Illuvia's blessing and its curse.<br />
				<br />How will you wield such thing of immense power?
			</p>

			<button class="flex items-center gap-2">
				New Powers & Modifiers
				<LucideZap size={20} />
			</button>
		</div>
	</div>

	<!-- Right Column - Image with Gradient Fade -->
	<div class="relative w-full md:w-1/2">
		<div
			class="to-secondary-800 absolute inset-0 z-10 bg-gradient-to-r from-transparent opacity-20"
		></div>
		<div class="relative h-full w-full">
			<!-- Image placeholder -->
			<div class="from-primary-700 absolute inset-0 z-0 bg-gradient-to-l to-transparent"></div>

			<!-- Overlay gradient for fade effect -->
			<div
				class="from-tertiary-400 absolute inset-0 z-20 bg-gradient-to-r via-transparent to-transparent"
			></div>
		</div>
	</div>
</section>
