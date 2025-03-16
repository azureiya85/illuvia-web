<script lang="ts">
	// Navigation state (only need menu toggle for mobile)
	let isMenuOpen = $state(false);

	// Navigation toggle
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Define navigation links
	const navLinks = [
		{ name: 'explore', href: '/explore' },
		{ name: 'lore', href: '/lore' },
		{ name: 'characters', href: '/characters' },
		{ name: 'rules', href: '/rules' }
	];
</script>

<!-- Navigation with baroque styling -->
<header class="bg-primay-950 border-tertiary-500 w-full border-b">
	<nav class="baroque-nav bg-tertiary-950 flex w-full items-center justify-between px-6 py-4">
		<div class="logo">
			<h5 class="text-primary-50">Illuvia</h5>
		</div>

		<button
			class="text-primary-400 transition-all duration-300 md:hidden"
			onclick={toggleMenu}
			aria-label="Toggle navigation menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
				/>
			</svg>
		</button>

		<div
			class={`bg-primary-900 absolute top-full left-0 w-full transition-all duration-300 md:relative md:w-auto md:bg-transparent ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'}`}
		>
			<ul
				class="border-primary-900 flex flex-col items-center gap-2 border-t p-4 md:flex-row md:items-center md:gap-6 md:border-0 md:p-0"
			>
				{#each navLinks as link (link.name)}
					<li>
						<a
							href={link.href}
							class="hover:text-primary-700 text-primary-300 relative block px-4 py-2 text-center text-2xl capitalize transition-all duration-300"
							onfocus={() => (isMenuOpen = false)}
						>
							{link.name}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 bg-red-800 transition-transform duration-300 hover:scale-x-100"
							></span>
							<span
								class="absolute top-0 right-0 h-2 w-2 border-t border-r border-amber-700 opacity-0 transition-opacity duration-300 hover:opacity-70"
							></span>
							<span
								class="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-amber-700 opacity-0 transition-opacity duration-300 hover:opacity-70"
							></span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</header>

<style>
	.baroque-nav {
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}
</style>
