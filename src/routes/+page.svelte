<script>
	import { onMount } from 'svelte';
	import Home from '$lib/components/templates/HeroSection.svelte';
	import Rule from '$lib/components/templates/RuleSection.svelte';
	import CharacterSection from '$lib/components/templates/CharacterSection.svelte';
	import PowerSection from '$lib/components/templates/PowerSection.svelte';
	import QuoteSection from '$lib/components/templates/QouteSection.svelte';
	import LocationSection from '$lib/components/templates/LocationSection.svelte';
	import AdvRules from '$lib/components/templates/AdvRules.svelte';
	let showHero = $state(false);

	onMount(() => {
		showHero = true;
	});
</script>

<svelte:head>
	<title>Home | Illuvia THe Clockwork Age</title>
	<meta name="description" content="Welcome to Illuvia" />
</svelte:head>

{#if showHero}
	<Home />
	<Rule />
	<CharacterSection />
	<PowerSection />
	<QuoteSection />
	<LocationSection />
	<AdvRules />
{/if}
