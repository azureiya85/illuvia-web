<script lang="ts">
	import { fade } from 'svelte/transition';
	import { LucideChevronLeft, LucideChevronRight } from '@lucide/svelte';
	import { nations } from '$lib/components/data/Nations';

	// Reference to the scrolling container
	let scrollContainer: HTMLDivElement;
	let canScrollLeft = $state(false);
	let canScrollRight = $state(true);

	// Function to update button states based on scroll position
	function updateScrollState() {
		if (!scrollContainer) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

		// Allow scrolling 2 extra card widths beyond the last card
		const maxScroll = scrollWidth - clientWidth - 2 * 300;

		canScrollLeft = scrollLeft > 0;
		canScrollRight = scrollLeft < maxScroll;
	}

	// Function to scroll left/right by exactly one card width
	function scrollLeft() {
		if (scrollContainer) {
			scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
			setTimeout(updateScrollState, 300);
		}
	}

	function scrollRight() {
		if (scrollContainer) {
			scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
			setTimeout(updateScrollState, 300);
		}
	}
</script>

<section class="bg-tertiary-400 relative flex min-h-screen w-full flex-col p-8 md:p-16">
	<!-- First Row: Title and Description -->
	<div class="mb-16 flex flex-col gap-2 md:flex-row">
		<div class="md:max-w-xl">
			<h4 class="text-secondary-600 text-left">
				THE SEVEN<br />
				POWERS
			</h4>
		</div>
		<div class="ml-4 md:max-w-xl">
			<p class="text-left text-2xl text-black">
				At its core, Illuvia is a story of how different cultures deal with the rapid advancement of
				science and technology. Represented by Seven Great Nations with their own unique cultures
				and subcultures, and their own ways to navigate through a turbulent period in Illuvia;
				Crisis of the Tenth Century.
			</p>
		</div>
	</div>

	<!-- Second Row: Nation Cards with Smooth Scroll & Right-Side Fade Mask -->
	<div
		class="fade-mask relative mb-16 flex-1 overflow-x-auto px-4 md:px-16"
		bind:this={scrollContainer}
		in:fade={{ duration: 300 }}
		onscroll={updateScrollState}
	>
		<div class="flex snap-x snap-mandatory justify-center space-x-8 md:justify-start">
			{#each nations as nation (nation.id)}
				<div
					class="group relative h-[38rem] w-[28rem] flex-shrink-0 cursor-pointer snap-center overflow-hidden transition-all duration-300 hover:shadow-xl"
				>
					<!-- Background Image -->
					<img
						src={nation.image}
						alt={nation.nation}
						class="absolute inset-0 h-full w-full bg-black/10 object-cover transition-transform duration-500 group-hover:scale-105"
					/>

					<!-- Background overlay that dims on hover -->
					<div
						class="absolute inset-0 bg-gradient-to-b transition-all duration-500 group-hover:bg-black/30"
					></div>
					<!-- Title & Description That Moves Up On Hover -->
					<div>
						<h5
							class="absolute bottom-0 mb-4 w-full p-4 text-2xl font-bold text-white transition-all duration-500 group-hover:bottom-48"
						>
							{nation.nation}
						</h5>

						<p
							class="absolute -bottom-10 w-full p-4 text-xl font-medium text-white opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100"
						>
							{nation.shortDesc}
						</p>
					</div>
				</div>
			{/each}
			<!-- Extra blank space for smooth scrolling beyond last card -->
			<div class="w-[600px] flex-shrink-0"></div>
		</div>
	</div>

	<!-- Third Row: Navigation Controls (Pushed Down) -->
	<div class="mt-auto flex items-end justify-end pb-8">
		<button
			onclick={scrollLeft}
			disabled={!canScrollLeft}
			class="bg-primary-800 p-4 transition-opacity duration-300"
			class:opacity-50={!canScrollLeft}
		>
			<LucideChevronLeft size={32} />
		</button>

		<button
			onclick={scrollRight}
			disabled={!canScrollRight}
			class="bg-primary-800 ml-4 p-4 transition-opacity duration-300"
			class:opacity-50={!canScrollRight}
		>
			<LucideChevronRight size={32} />
		</button>
	</div>
</section>

<style>
	/* Fade mask effect applied only to the right side */
	.fade-mask {
		-webkit-mask-image: linear-gradient(to right, white 70%, transparent);
		mask-image: linear-gradient(to right, white 70%, transparent);
	}
</style>
