import {
    LucideUsers,
    LucideUserCheck,
    LucideTarget,
    LucideDices,
    LucideTrendingUp,
    LucideChevronsUp,
    LucideSwords,
    LucideSkull,
    LucideCoins,
    LucideAlertTriangle,
    LucideGift
} from '@lucide/svelte';


type LucideIconComponent = typeof LucideUsers;

export interface CoreRule {
	id: string;
	icon: LucideIconComponent; 
	iconColor?: string;
	title: string;
	description: string[];
	keyPoints?: string[];
	whyItMatters: string;
	whyItMattersIcon?: LucideIconComponent; 
}

export const coreRulesData: CoreRule[] = [
	{
		id: 'wildcards_extras',
		icon: LucideUsers, 
		title: 'Heroes & Minions: Wild Cards vs. Extras',
		description: [
			'Not everyone in Illuvia is cut from the same cloth. The system distinguishes between two main types of characters:'
		],
		keyPoints: [
			'<strong class="text-primary-700 dark:text-primary-400">Wild Cards <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check inline-block ml-1 align-[-0.25em]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>:</strong> YOUR characters, significant allies, and formidable villains. They can take 3 Wounds and roll an extra "Wild Die".',
			'<strong class="text-secondary-600 dark:text-secondary-400">Extras <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users inline-block ml-1 align-[-0.25em]"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>:</strong> Common folk, minions, or rank-and-file monsters. Incapacitated after 1 Wound and don\'t get a Wild Die.'
		],
		whyItMatters:
			'This allows for epic heroes who can take a beating and pull off amazing feats, while still accommodating hordes of minions for fast-paced action.',
		whyItMattersIcon: LucideUserCheck 
	},
	{
		id: 'trait_rolls',
		icon: LucideTarget,
		title: 'Making Things Happen: Trait Rolls',
		description: [
			'Whenever your character attempts something challenging—be it persuading a noble, firing a flintlock, or deciphering an ancient automaton—you\'ll make a Trait Roll.'
		],
		keyPoints: [
			'<strong>The Basics:</strong> Roll the die type associated with your character\'s Attribute or Skill (e.g., Strength d8, Shooting d6).',
			'<strong>Target Number (TN):</strong> You need a <strong>4 or higher</strong> to succeed.',
			'<strong>Modifiers:</strong> The GM might apply modifiers: Easy (+2), Hard (-2), Very Hard (-4).'
		],
		whyItMatters: 'The foundation of resolving actions, keeping things straightforward yet adaptable to circumstances.',
		whyItMattersIcon: LucideTarget
	},
	{
		id: 'wild_die',
		icon: LucideDices,
		iconColor: 'text-violet-600 dark:text-violet-400',
		title: 'The Wild Die: Your Heroic Edge',
		description: [
			'A signature mechanic for Wild Cards! When a Wild Card makes a Trait roll, they roll their normal Trait die AND an extra six-sided die (d6) – the Wild Die.'
		],
		keyPoints: [
			'<strong>Take the Best:</strong> Use the higher result of the two dice.',
			'<strong>Aces on Both:</strong> Both the Trait die and the Wild Die can "Ace" (explode).',
			'<strong>One Per Action:</strong> Only one Wild Die per action, even with multiple Trait dice.'
		],
		whyItMatters:
			'Significantly increases a hero\'s chances of success and pulling off incredible feats, making them feel truly heroic.',
		whyItMattersIcon: LucideDices
	},
	{
		id: 'aces',
		icon: LucideTrendingUp,
		iconColor: 'text-accent-500 dark:text-accent-400',
		title: 'Aces: Exploding Dice!',
		description: [
			'Savage Worlds loves excitement, and Aces deliver! If you roll the highest possible number on any Trait or damage die (e.g., a 6 on a d6), you roll it again and add to the total!'
		],
		keyPoints: [
			'<strong>Keep \'Em Coming:</strong> Aces can chain multiple times.',
			'<strong>Modifiers Last:</strong> Add up all Aced dice before applying modifiers.'
		],
		whyItMatters:
			'Aces create moments of unexpected triumph and cinematic action. A desperate shot can turn into a legendary hit!',
		whyItMattersIcon: LucideTrendingUp
	},
	{
		id: 'raises',
		icon: LucideChevronsUp,
		title: 'Raises: Degrees of Success',
		description: [
			'Success is good, but *how* successful you are often matters. For every 4 points you roll *above* the Target Number (after modifiers), you achieve a "Raise."'
		],
		keyPoints: [
			'<strong>Example:</strong> Roll an 8 (TN 4) = 1 Raise. Roll 11 (TN 4) = 1 Raise (next at 12).',
			'<strong>Better Outcomes:</strong> Each Raise typically grants an additional benefit (e.g., bonus damage, more info).'
		],
		whyItMatters:
			'Adds depth to success, rewarding exceptional rolls with tangible benefits and making characters feel more competent.',
		whyItMattersIcon: LucideChevronsUp
	},
	{
		id: 'opposed_rolls',
		icon: LucideSwords,
		title: 'Opposed Rolls: Head-to-Head',
		description: [
			'When your character directly competes against another (e.g., sneaking past a guard). The acting character rolls first (must get 4+). The defender then rolls to meet or beat that total.'
		],
		keyPoints: [
			'<strong>Attacker Wins:</strong> If defender fails to meet or beat attacker\'s total.',
			'<strong>Raises:</strong> The winner uses the loser\'s total as the TN for determining Raises.'
		],
		whyItMatters: 'Creates tense moments for direct contests of skill or attributes.',
		whyItMattersIcon: LucideSwords
	},
	{
		id: 'critical_failures',
		icon: LucideAlertTriangle,
		iconColor: 'text-red-500 dark:text-red-400',
		title: 'Critical Failures: Oh No!',
		description: [
			'Sometimes, fate isn\'t on your side. This adds a touch of risk and potential for dramatic setbacks.'
		],
		keyPoints: [
			'<strong>Wild Cards:</strong> Roll a 1 on BOTH Trait die AND Wild Die. Auto-fail + something bad happens. Cannot be rerolled with Bennies!',
			'<strong>Extras:</strong> Roll a 1 on Trait die. GM may roll d6; on a 1, it\'s a Critical Failure for the Extra.'
		],
		whyItMatters: 'Introduces dramatic (and sometimes comical) fumbles, keeping players on their toes.',
		whyItMattersIcon: LucideSkull
	},
	{
		id: 'bennies',
		icon: LucideGift,
		iconColor: 'text-green-600 dark:text-green-400',
		title: 'Bennies: Your Ace in the Hole!',
		description: [
			'Bennies (short for "benefits") are tokens (like poker chips) that give players a way to control their hero\'s fate. Players start each session with 3, and GMs award more for good play.'
		],
		keyPoints: [
			'<strong>Reroll a Trait Test:</strong> (Keep best result, can\'t reroll Critical Failures).',
			'<strong>Recover from Shaken:</strong> Instantly, even out of turn.',
			'<strong>Soak Wounds:</strong> Make a Vigor roll to negate Wounds.',
			'<strong>Reroll Damage.</strong>',
			'<strong>Draw a New Action Card (Combat).</strong>',
			'<strong>(Arcanists) Regain Power Points.</strong>',
			'<strong>Influence the Story (GM discretion).</strong>'
		],
		whyItMatters:
			'Crucial for player agency! Bennies promote daring actions, mitigate bad luck, and fuel the "Fast, Furious, Fun!" motto.',
		whyItMattersIcon: LucideCoins
	}
];