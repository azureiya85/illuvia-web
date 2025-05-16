<script lang="ts">
	import { LucideUsers } from '@lucide/svelte';
</script>

<section class="bg-tertiary-400 flex min-h-screen w-full flex-col md:flex-row-reverse">
	<!-- Right Column (now on the left in desktop) - Text Content -->
	<div class="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-16">
		<div class="max-w-2xl text-left md:ml-auto">
			<h3 class="text-secondary-600 mb-6">
				WHEN SCIENCE<br />
				& FANTASY COLLIDES
			</h3>

			<p class="mb-10 text-4xl text-black">
				Illuvia is a work of science-fantasy, an alternate history in an alternate universe where
				races such as humans, elves, dwarves, halflings, satyrs, fairies, dhampirs and sentient
				automatons live amongst each others. <br /> <br /> A catfolk pirate captain who can't swim? A
				spirit hunter kobold cowboy who is afraid of automatons? The choice is yours.
			</p>
			<a href="/characters">
			<button class="flex items-center gap-2">
				New Character Options
				<LucideUsers size={20} />
			</button>
			</a>
		</div>
	</div>

	<!-- Left Column (now on the right in desktop) - Image with Gradient Fade -->
	<div class="relative w-full md:w-1/2">
		<div
			class="to-secondary-800 absolute inset-0 z-10 bg-gradient-to-l from-transparent opacity-20"
		></div>
		<div class="relative h-full w-full">
			<!-- Image placeholder -->
			<div
				class="absolute inset-0 z-0 bg-gradient-to-r bg-[url('/images/clockwork-gnome.avif')] to-transparent bg-cover"
			></div>

			<!-- Overlay gradient for fade effect -->
			<div
				class="from-tertiary-400 absolute inset-0 z-20 bg-gradient-to-l via-transparent to-transparent"
			></div>
		</div>
	</div>
</section>
