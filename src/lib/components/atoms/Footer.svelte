<script lang="ts">
	// Define social links for type safety and key support
	interface SocialLink {
		name: string;
		url: string;
	}

	const socialLinks: SocialLink[] = [
		{ name: 'Discord', url: '#' },
		{ name: 'Twitter', url: '#' },
		{ name: 'Newsletter', url: '#' }
	];
</script>

<!-- Footer with baroque styling -->
<footer class="border-primary-950 bg-tertiary-950 border-t px-6 py-8">
	<div class="container mx-auto">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-6 md:mb-0">
				<h4 class="text-primary-50 text-2xl">Illuvia</h4>
				<p class="text-lg text-white">A Clockpunk TTRPG Setting for Savage Worlds</p>
			</div>

			<div class="flex gap-6">
				{#each socialLinks as social (social.name)}
					<a
						href={social.url}
						class=" text-primary-600 hover:text-primary-400 transition-colors duration-300"
					>
						{social.name}
					</a>
				{/each}
			</div>
		</div>

		<div class="border-primary-400 mt-8 border-t pt-4 text-center">
			<p class=" text-primary-50 text-sm">&copy; 2025 Illuvia TTRPG. All Rights Reserved.</p>
		</div>
	</div>
</footer>
