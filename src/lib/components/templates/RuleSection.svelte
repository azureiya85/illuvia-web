<script lang="ts">
	import { LucideBookOpen } from '@lucide/svelte';
</script>

<section class="bg-tertiary-400 basic-rules flex min-h-screen w-full flex-col md:flex-row">
	<!-- Left Column - Text Content -->
	<div class="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-16">
		<div class="max-w-2xl text-left">
			<h3 class="text-secondary-600 mb-6 drop-shadow-2xl">
				AGE OF SAVAGERY <br />
				AGE OF REVOLUTION
			</h3>

			<p class="mb-10 text-4xl text-black">
				Powered by the setting-agnostic, rules-light, narrative-first system <span
					class="font-bold italic">Savage Worlds</span
				>. Illuvia embodies the system's tagline. "Fast! Furious! Fun!". This core philosophy aligns
				with Illuvia's core principle and main inspirations: 80's and 90's media. <br />
				<br /> <span class="font-bold">Fast, bombastic and lethal. </span>
			</p>
<a href="/rules">
  <button class="flex items-center gap-2">
    Learn The Rules
    <LucideBookOpen size={20} />
  </button>
</a>
		</div>
	</div>

	<!-- Right Column - Image with Gradient Fade -->
	<div class="relative w-full md:w-1/2">
		<div
			class="to-secondary-800 absolute inset-0 z-10 bg-gradient-to-r from-transparent opacity-20"
		></div>
		<div class="relative h-full w-full">
			<!-- Image placeholder -->
			<div
				class="absolute inset-0 z-0 bg-gradient-to-l bg-[url('/images/rules-bg.avif')] to-transparent bg-cover"
			></div>

			<!-- Overlay gradient for fade effect -->
			<div
				class="from-tertiary-400 absolute inset-0 z-20 bg-gradient-to-r via-transparent to-transparent"
			></div>
		</div>
	</div>
</section>
