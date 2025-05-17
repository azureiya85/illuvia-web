import IconWind from '@lucide/svelte/icons/wind';
import IconMountain from '@lucide/svelte/icons/mountain';
import IconZap from '@lucide/svelte/icons/zap';
import IconFlame from '@lucide/svelte/icons/flame';
import IconCog from '@lucide/svelte/icons/cog';
import IconWaves from '@lucide/svelte/icons/waves';

type LucideIcon = typeof IconWind;

export interface ElementEffect {
	id: string;
	description: string;
}

export interface ElementalManipulationEntry {
	id: string;
	elementName: string;
	icon: LucideIcon;
	themeColor?: {
		bg: string;
		text: string;
		icon: string;
        border: string;
	};
	effects: ElementEffect[];
}

// Theme colors 
const airColors = { bg: 'bg-sky-100 dark:bg-sky-900', text: 'text-sky-700 dark:text-sky-200', icon: 'text-sky-500 dark:text-sky-400', border: 'border-sky-300 dark:border-sky-700' };
const earthColors = { bg: 'bg-yellow-100 dark:bg-yellow-900', text: 'text-yellow-700 dark:text-yellow-200', icon: 'text-yellow-500 dark:text-yellow-400', border: 'border-yellow-300 dark:border-yellow-700' };
const electricityColors = { bg: 'bg-blue-100 dark:bg-blue-900', text: 'text-blue-700 dark:text-blue-200', icon: 'text-blue-500 dark:text-blue-400', border: 'border-blue-300 dark:border-blue-700' };
const fireColors = { bg: 'bg-red-100 dark:bg-red-900', text: 'text-red-700 dark:text-red-200', icon: 'text-red-500 dark:text-red-400', border: 'border-red-300 dark:border-red-700' };
const metalColors = { bg: 'bg-slate-200 dark:bg-slate-700', text: 'text-slate-700 dark:text-slate-200', icon: 'text-slate-500 dark:text-slate-400', border: 'border-slate-400 dark:border-slate-600' };
const waterColors = { bg: 'bg-cyan-100 dark:bg-cyan-900', text: 'text-cyan-700 dark:text-cyan-200', icon: 'text-cyan-500 dark:text-cyan-400', border: 'border-cyan-300 dark:border-cyan-700' };


export const elementalManipulationTableData: ElementalManipulationEntry[] = [
	{
		id: 'air',
		elementName: 'Air',
		icon: IconWind,
        themeColor: airColors,
		effects: [
			{ id: 'air-push', description: 'Push someone or something' },
			{ id: 'air-slow-fall', description: "Slow down someone's fall" },
			{ id: 'air-lift', description: 'Lift 40 kg for d6, 80 kg for d8, 160 kg for d10, 320 kg for d12' },
			{ id: 'air-support-throw', description: 'Support an action to shoot or throw objects' },
			{ id: 'air-blow-out', description: 'Blow out torches, flames' },
			{ id: 'air-change-smell', description: 'Create or change a smell in Medium Blast Template' }
		]
	},
	{
		id: 'earth',
		elementName: 'Earth',
		icon: IconMountain,
        themeColor: earthColors,
		effects: [
			{ id: 'earth-cover-tracks', description: 'Cover tracks' },
			{ id: 'earth-summon-throw', description: 'Summon and/or throw a handful of dirt/sand/stone' },
			{ id: 'earth-move', description: 'Move 2 square foot of earth, one square foot of stone' },
			{ id: 'earth-crumble', description: 'Crumble two square foot of dirt or one square foot of stone/sand' },
			{ id: 'earth-transmute-gem', description: 'Transmute a small gem into another kind of gem' },
			{ id: 'earth-support-climbing', description: 'Support Climbing action' }
		]
	},
	{
		id: 'electricity',
		elementName: 'Electricity',
		icon: IconZap,
        themeColor: electricityColors,
		effects: [
			{ id: 'elec-jolt-damage', description: 'Fire a jolt of Str damage (+1d4 on wet or metal wearing target)' },
			{ id: 'elec-jolt-adrenaline', description: 'Spur a jolt of adrenaline to ignore Fatigue or Wound penalties for one round' },
			{ id: 'elec-sparks-sounds', description: 'Create sparks, buzzing sounds or thunder claps' },
			{ id: 'elec-jolt-support-bleeding', description: 'Create a jolt to Support a character who is Bleeding Out' },
			{ id: 'elec-support-recover-shaken', description: 'Support a roll to remove from Shaken or Stunned' },
			{ id: 'elec-jolt-power-up', description: 'Create a jolt to Support action to power up something' }
		]
	},
	{
		id: 'fire',
		elementName: 'Fire',
		icon: IconFlame,
        themeColor: fireColors,
		effects: [
			{ id: 'fire-torch-flame', description: 'Create a torch-like flame, hurl a Str damage fire bolt with a range of Str to someone.' },
			{ id: 'fire-heat-metal', description: 'Heat metal with the size of a fist for 3 rounds (Vigor roll to drop it or add d4 to damage)' },
			{ id: 'fire-spread', description: 'Spread fire to a nearby target' },
			{ id: 'fire-dry', description: 'Dry something or someone' },
			{ id: 'fire-intensity', description: 'Increase or decrease fire intensity on a target' },
			{ id: 'fire-cook', description: 'Warm, roast, or fry a food' }
		]
	},
	{
		id: 'metal',
		elementName: 'Metal',
		icon: IconCog,
        themeColor: metalColors,
		effects: [
			{ id: 'metal-drag', description: 'Remotely drag a small piece of metal nearby' },
			{ id: 'metal-create', description: 'Create 0.5 kg of mundane metal' },
			{ id: 'metal-support-hit', description: 'Support an action to hit with a metal object or projectile' },
			{ id: 'metal-change-shape', description: 'Change the shape of 0.5 kg of mundane metal' },
			{ id: 'metal-polish', description: 'Polish a metal surface' },
			{ id: 'metal-transmute', description: 'Change 0.5 kg of mundane metal into a different mundane metal' }
		]
	},
	{
		id: 'water',
		elementName: 'Water',
		icon: IconWaves,
        themeColor: waterColors,
		effects: [
			{ id: 'water-conjure', description: 'Conjure 1 litre of water (not "inside" of closed objects or people)' },
			{ id: 'water-freeze-gallon', description: 'Freeze a gallon of water' },
			{ id: 'water-purify', description: 'Purify a gallon of water' },
			{ id: 'water-freeze-shut', description: 'Freeze something shut (Opposed Str roll to break it free)' },
			{ id: 'water-change-taste', description: 'Change the taste of one bottle of liquid' },
			{ id: 'water-freeze-ground', description: "Freeze the ground under someone's feet" }
		]
	}
];