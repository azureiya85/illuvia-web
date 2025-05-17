// src/lib/components/data/NewPowers.ts

export type PowerRank = 'Novice' | 'Seasoned' | 'Veteran' | 'Heroic' | 'Legendary';

export interface PowerModifierItem {
	id: string;
	name: string;
	cost: string;
	effect: string;
}

export interface ReferenceTableRow {
	[key: string]: string | number; // Flexible for different column names and types
}

export interface ReferenceTable {
	id: string; // e.g., 'gravity-table'
	caption?: string;
	headers: string[];
	rows: ReferenceTableRow[];
}

export interface Power {
	id: string;
	name: string;
	rank: PowerRank;
	powerPoints: string;
	range: string;
	duration: string;
	trappings: string;
	description: string[];
	modifiers?: PowerModifierItem[];
	referenceTable?: ReferenceTable; // <--- ADDED THIS
	image?: string;
}

// --- COLOR MAPPING FOR POWER RANKS (keep as is) ---
export const powerRankColors: Record<
	PowerRank,
	{ bg: string; text: string; border: string; shadowColor?: string }
> = {
	Novice: {
		bg: 'bg-tertiary-600 dark:bg-tertiary-700',
		text: 'text-tertiary-50 dark:text-tertiary-100',
		border: 'border-tertiary-400 dark:border-tertiary-500',
		shadowColor: 'rgba(13, 148, 136, 0.5)'
	},
	Seasoned: {
		bg: 'bg-primary-600 dark:bg-primary-700',
		text: 'text-primary-50 dark:text-primary-100',
		border: 'border-primary-400 dark:border-primary-500',
		shadowColor: 'rgba(37, 99, 235, 0.5)'
	},
	Veteran: {
		bg: 'bg-secondary-600 dark:bg-secondary-700',
		text: 'text-secondary-50 dark:text-secondary-100',
		border: 'border-secondary-400 dark:border-secondary-500',
		shadowColor: 'rgba(234, 88, 12, 0.5)'
	},
	Heroic: {
		bg: 'bg-warning-500 dark:bg-warning-600',
		text: 'text-warning-50 dark:text-warning-100',
		border: 'border-warning-300 dark:border-warning-400',
		shadowColor: 'rgba(245, 158, 11, 0.5)'
	},
	Legendary: {
		bg: 'bg-surface-700 dark:bg-surface-800',
		text: 'text-surface-50 dark:text-surface-100',
		border: 'border-surface-500 dark:border-surface-600',
		shadowColor: 'rgba(100, 116, 139, 0.5)'
	}
};

const placeholderPowerImage = 'https://i.pinimg.com/originals/a7/11/04/a71104995971f2b4a2013067f55009a6.jpg';

export const powersData: Power[] = [
	// ... (previous powers: black-hole, control-machine, create-pit, glyph) ...
{
		id: 'black-hole',
		name: 'Black Hole',
		rank: 'Veteran',
		powerPoints: '3',
		range: 'Smarts x2',
		duration: '5',
		trappings: 'A visible well of swirling black energy.',
		description: [
			'This deadly ability opens a momentary rift in space and time to the outer fringes of a black hole, drawing everything around it to the middle and crushing it with powerful gravitic forces.',
			'The character rolls her arcane skill, and if successful, places a Large Blast Template anywhere in Range. Small loose items within the template are drawn to the center and may be crushed (GM’s discretion).',
			'Sentient beings make an immediate Strength roll (at −2 with a raise on the arcane skill roll). Those who fail are drawn d6" to the center and take 2d6 damage, ignoring all but magical armor. On subsequent rounds, characters may attempt a Strength roll (a free action with the same penalty as above) to move at half Pace or are again drawn d6" toward the center for 2d6 damage.'
		],
		modifiers: [
			{ id: 'black-hole-aoe', name: 'Area of Effects', cost: '+2', effect: 'The area of effect increases 10" (20 yards) in radius and damage increases to 3d6.'}
		],
		image: placeholderPowerImage
	},
	{
		id: 'control-machine',
		name: 'Control Machine',
		rank: 'Novice',
		powerPoints: '2',
		range: 'Sight',
		duration: 'One hour',
		trappings: 'Nanotech, wireless hacking',
		description: [
			'The character can wrest control of a complex machine (like an assembly line, computer, or vehicle) and control it from afar.',
			'If the target has an operator, they can regain control by making an appropriate roll (at −2 with a raise on the power; usually with the Electronics or Hacking skill if the device is electronic or Repair if purely mechanical) as a limited action.',
			"While in control, the caster acts as if she’s the operator of the machine and can have it perform any of its usual functions."
		],
		image: 'https://i.pinimg.com/originals/7e/7a/7a/7e7a7ac269f7f2498c47d5c85ff54b5a.jpg'
	},
	{
		id: 'create-pit',
		name: 'Create Pit',
		rank: 'Seasoned',
		powerPoints: '2',
		range: 'Smarts',
		duration: '5',
		trappings: 'Trap door, crack in the earth, dark hole.',
		description: [
			'The spellcaster creates an extradimensional space that connects with her reality at a single point within Range. The point forms as a hole the size of a Medium Blast Template and descends 4” (eight yards) into the earth. This power cannot use the Selective Power Modifier.',
			'Anyone in or adjacent to the area when the spell is cast must make an Evasion roll (at −2 with a raise) or fall in for 2d6 + 2 damage.',
			'When the power ends, the pit disappears and anyone inside is placed on the ground where the pit formed.'
		],
		modifiers: [
			{ id: 'create-pit-deep', name: 'Deep', cost: '+2', effect: 'The pit is twice as deep, increasing the base damage to 4d6 + 4.'},
			{ id: 'create-pit-soft', name: 'Soft Ground', cost: '+1', effect: "The base of the pit is made of a soft, spongy material. Those who fall in don't take damage." },
			{ id: 'create-pit-spikes', name: 'Spikes', cost: '+1', effect: 'Spikes form at the bottom of the pit, increasing damage to those who fall in by +d6.'}
		],
		image: placeholderPowerImage
	},
	{
		id: 'glyph',
		name: 'Glyph',
		rank: 'Novice',
		powerPoints: '1',
		range: 'Smarts',
		duration: '1 day',
		trappings: 'Runes, invisible ink, shaping vines into text, moving sand or gravel, shaping water.',
		description: [
			'Glyph lets you hide a message to be revealed under given conditions.',
			'The caster places a hidden message on an object, structure, ground, or creature, and chooses the condition under which the message reveals itself. Alternatively, he can place an illusion to hide a mundane message until the condition is met.',
			'The condition is evaluated based on the caster’s knowledge and skills. Acceptable conditions are a set of predefined readers, or given date or time, or something like “anyone wearing my silver ring”. The message can be a simple mark (used to easily track a target), written text, voice speech, or some illusion scene (Size 0 or smaller).',
			'A standard success on detect arcana shows the target as enchanted. If the roll also beats the glyph activation roll (as an opposed rolls), it gives out the revealing condition. It’s up to the GM if a raise or an Occult analysis can give out the caster’s name and/or reveal the message.'
		],
		modifiers: [
			{ id: 'glyph-permanent', name: 'Permanent', cost: '+1', effect: 'The glyph lasts until the surface is violently destroyed, someone dispels it, or the creator cancels it. Until then, the Power Points used to create the glyph are “invested” and unavailable.'},
			{ id: 'glyph-subtlety', name: 'Subtlety', cost: '+1 to +4', effect: 'Each Power Point spent applies a –2 penalty to powers or abilities like detect arcana to pierce the glyph‘s secrets'}
		],
		image: 'https://i.pinimg.com/originals/6a/3a/e1/6a3ae1f9078a8d7f3c599b04f1b7c6f6.jpg'
	},
	{
		id: 'gravitate',
		name: 'Gravitate',
		rank: 'Novice',
		powerPoints: '3',
		range: 'Smarts',
		duration: '5',
		trappings: 'A visible well of swirling black energy.',
		description: [
			'Gravitate causes gravity to strengthen or weaken within a Large Blast Template placed within Range of the caster. Once activated, the caster chooses to increase or reduce gravity one level (two steps with a raise). See Gravity Table below.'
		],
		modifiers: [
			{ id: 'gravitate-local-envelope', name: 'Local Envelope', cost: '+3', effect: 'The change in gravity extends out 25” (50 yards) in every direction, enough to encompass up to a Size 14 vessel.'}
		],
		referenceTable: {
			id: 'gravity-table-gravitate',
			caption: 'Gravity Table',
			headers: ['Gravity', 'Jump', 'Str', 'Pace'],
			rows: [
				{ Gravity: 'Crushing', Jump: 'x0.5', Str: '-2', Pace: '-4' },
				{ Gravity: 'Heavy', Jump: 'x0.5', Str: '-1', Pace: '-2' },
				{ Gravity: 'Normal', Jump: '-', Str: '-', Pace: '-' },
				{ Gravity: 'Low', Jump: 'x2', Str: '+1', Pace: '+2' },
				{ Gravity: 'Zero-G', Jump: 'x4', Str: '+2', Pace: '+4' }
			]
		},
		image: 'https://i.pinimg.com/originals/f0/8c/77/f08c77489ead3d73a0a9f0b40f5079d2.jpg'
	},
	{
		id: 'haywyre',
		name: 'Haywyre',
		rank: 'Novice',
		powerPoints: '2',
		range: 'Smarts',
		duration: '5',
		trappings: 'Nanotech, wireless hacking',
		description: [
			'Sabotage all mechanical and electronic devices in a Medium Blast Template, placed anywhere in Range. All Trait rolls that involve a mechanical, electrical, or electronic item caught in any part of the area of effect are made at −2, or −4 with a raise.',
			'Haywyre has no effect on simple tools such as hammers, swords, or knives—only complex devices with moving or electric/electronic components.',
			'The caster may move the template up to 12” (24 yards) as a limited action on his turn.'
		],
		modifiers: [
			{ id: 'haywyre-aoe', name: 'Area of Effect', cost: '+2', effect: 'For +2 Power Points haywyre affects everything in a Large Blast Template.'}
		],
		image: 'https://i.pinimg.com/originals/1b/2d/7c/1b2d7c28b8c75e2a0e88dc9a2c78c2ab.jpg'
	},
	{
		id: 'impede',
		name: 'Impede',
		rank: 'Novice',
		powerPoints: '2',
		range: 'Smarts',
		duration: '5',
		trappings: 'Slippery ground, bushes and vines, rocks, quicksands.',
		description: [
			'Impede changes the shape or nature of a piece of terrain into something harder to traverse. Place a Medium Blast Template in Range. This area is now Difficult Ground (see Savage Worlds). Some Trappings may also provide Light Cover.'
		],
		modifiers: [
			{
				id: 'impede-area-effect',
				name: 'Area Effect',
				cost: '0/+1',
				effect: 'The caster can reduce the area to only cover a Small Blast Template for no extra cost, or enlarge the area to cover a Large Blast Template for +1 point.'
			},
			{
				id: 'impede-selective',
				name: 'Selective',
				cost: '+1',
				effect: 'If the Trapping allows Selective, affected persons must be defined when casting.'
			},
			{
				id: 'impede-dangerous',
				name: 'Dangerous',
				cost: '+1',
				effect: 'Running through the impeded area must succeed an Athletics roll or suffer 2d6 damage.'
			}
		],
		image: 'https://i.pinimg.com/originals/3d/9c/31/3d9c319f5a5c8c0a6e3c3288b5c7f3e5.jpg' // Example image
	},
	{
		id: 'mind-blank',
		name: 'Mind Blank',
		rank: 'Heroic',
		powerPoints: '15',
		range: 'Smarts',
		duration: '24 hours',
		trappings: 'Headband, meditation, psionic block.',
		description: [
			'Mind Blank protects the target from all powers that detect, influence, or read emotions or thoughts such as empathy, mind link, mind reading, mind wipe. This power also protects against scrying and wish when they are used to gain information about the target or affect its mind.'
		],
		// No specific modifiers listed for Mind Blank in the provided text
		image: 'https://i.pinimg.com/originals/5a/0e/f8/5a0ef81917f3e8a2a0a5312a87b6f4e6.jpg' // Example image
	},
	{
		id: 'natural-weapon',
		name: 'Natural Weapon',
		rank: 'Novice',
		powerPoints: '2',
		range: 'Self',
		duration: '5',
		trappings: 'Partial shape-shifting, demonic features, shadow tentacles.',
		description: [
			'Natural Weapon lets the caster acquire a Natural Weapon of her choice. It deals Str+d4 damage.',
			'Fangs, Beaks, Mandibles, or Stingers can be used instead of Crushing during a Grapple.', 
			'Claws grant +2 to Athletics (climbing) rolls, while Talons come with AP 1, and Pincers provide +2 to rolls to maintain a Grapple. They come in pairs and can be used with Two-Fisted, Martial Arts, and Brawler Edges.',
			'Hooves affect multiple limbs (hands, feet, or both, your choice) and can be used with Two-Fisted, Martial Arts, and Brawler Edges. On a successful Wild Attack on a target of equal or smaller Size, the target is pushed 1” away and must succeed an Athletics roll at –2 or fall Prone.',
			'Horns and Tusks grants +4 damage to Fighting attacks performed after Running at least 5” in somewhat a straight line.',
			'Tentacles are Reach 1 and grant +2 to Grapple attempts.',
			'Tails can be used to trip a target. Roll it as an Athletics or Fighting Test, with the additional benefit of setting the target Prone on a success.'
		],
		modifiers: [
			{
				id: 'natural-weapon-predator',
				name: 'Predator',
				cost: '+2 to +8',
				effect: 'Improves the deadliness of the animal weapon’s strikes. Every additional 2 Power Points, improves the damage by one dice type, from Str+d4 to Str+d6, up to a maximum of Str+d12. When stacked with Martial Artist or Brawler Edges, it is still limited to Str+d12 after the Edges are applied.'
			},
			{
				id: 'natural-weapon-poison',
				name: 'Poison',
				cost: '+2',
				effect: 'The animal weapon is coated with Mild Poison. Targets Shaken or Wounded by such attacks must roll Vigor or suffer Fatigue (Exhaustion on a Critical Failure). The Poison’s Fatigue adds cannot incapacitate a target.'
			},
			{
				id: 'natural-weapon-twin-weapons',
				name: 'Twin Weapons',
				cost: '+2',
				effect: 'The caster receives two different animal weapons at once (bite and claws, pincers and stinger, hooves and horns).'
			}
		],
		image: 'https://i.pinimg.com/originals/cb/d0/7d/cbd07d54a2b43c81c79c540f530d551a.jpg' // Example image
	},
	{
		id: 'quickness',
		name: 'Quickness',
		rank: 'Seasoned',
		powerPoints: '4',
		range: 'Touch',
		duration: '3', // Note: Duration from text is 3, not 5
		trappings: 'The caster must touch the target with at least one free hand.', 
		description: [
			'Nothing makes a gunslinger faster on the draw than this amazing power. With success, the target has two actions per round instead of the usual one (at no multi-action penalty). With a raise, the recipient gains the benefits above, and can also discard and redraw any initiative cards lower than 8 each round.'
		],
		// No specific modifiers listed for Quickness in the provided text
		image: 'https://i.pinimg.com/originals/e0/32/f4/e032f4b6e0089810443d39f90e485e3f.jpg' // Example image
	},
	{
		id: 'repair',
		name: 'Repair',
		rank: 'Novice',
		powerPoints: '3',
		range: 'Touch',
		duration: 'Instant',
		trappings: 'The caster must touch the object with at least one free hand.',
		description: [
			'Repairing fixes damage to objects, including constructs and living constructs, that have taken damage but are not entirely broken or destroyed.',
			'For a Wild Card, each use of repairing removes a Wound with a success, two with a raise. The power may be cast additional times to remove additional Wounds.',
			'For Extras or objects, they must first determine if the construct or object is already destroyed. If so, no repair may be attempted.',
			'Otherwise, a successful arcane skill roll repairs the construct or object. If the target is a living construct that was inert, a successful repairing revives them.'
		],
		modifiers: [
			{
				id: 'repair-crippling-injury',
				name: 'Crippling Injury',
				cost: '+15',
				effect: 'For living constructs, the power can repair a permanent Crippling Injury (see Incapacitation in Savage Worlds). This requires an hour of preparation and only one casting is permitted per injury. If it fails, this caster cannot repair that particular injury (but someone else may try). If successful, the subject is Exhausted for 24 hours.'
			},
			{
				id: 'repair-greater-repair',
				name: 'Greater Repair',
				cost: '+10',
				effect: 'Greater repairing can rebuild objects that are completely broken but only if all parts are still available. This spell may also be used to restore constructs (but not living constructs) that have perished.'
			}
		],
		image: 'https://i.pinimg.com/originals/4f/9a/c8/4f9ac865f272c4f1e3cd99a11219048b.jpg' // Example image
	},
	{
		id: 'rust',
		name: 'Rust',
		rank: 'Seasoned',
		powerPoints: '1',
		range: 'Smarts',
		duration: 'Instant',
		trappings: 'Rust, acid, turn to glass, dissolves, disintegration.',
		description: [
			'This power breaks solid objects but can’t affect beings (unless made of solid material like ice, wood, rock, metal).',
			'The arcane roll is usually affected by Illumination and Called Shot penalties (0 for a torso armor or door, –4 for small weapons or locks, –2 for large, typically two-handed, weapons or chair). If successful, the object receives 2d10 damage (which can’t Ace as per Breaking Things). A raise on the arcane roll provides no bonus damage.'
		],
		modifiers: [
			{
				id: 'rust-shatter',
				name: 'Shatter',
				cost: '+2',
				effect: 'If the object is destroyed, splinters or shards are projected around, damaging anyone in a Small Blast Template for 2d6 (3d6 if the activation was a raise). This may be Evaded. Trappings: Screaming, explosion.'
			}
		],
		image: 'https://i.pinimg.com/originals/8c/f0/9a/8cf09a520d005259e74179290a97d7e4.jpg' // Example image
	},
	{
		id: 'stride',
		name: 'Stride',
		rank: 'Novice',
		powerPoints: '1',
		range: 'Smarts',
		duration: '1 hour',
		trappings: 'Animal limbs, vegetation grows, stilts.',
		description: [
			'The target walks at ease in the wilderness, ignoring any natural Difficult Ground.'
		],
		modifiers: [
			{
				id: 'stride-additional-recipients',
				name: 'Additional Recipients',
				cost: '+1',
				effect: 'The power may affect more than one target for 1 additional Power Point each.'
			},
			{
				id: 'stride-no-trace',
				name: 'No Trace',
				cost: '+1',
				effect: 'In wilderness, the recipient leaves no trace and is impossible to track.'
			},
			{
				id: 'stride-waterwalk',
				name: 'Waterwalk',
				cost: '+1',
				effect: 'Instead, the recipient steps barely penetrate liquid surfaces. She walks at her full Pace (and can also run), on water, mud, swamps, quicksands, and similar surfaces. On a raise, she also ignores Difficult Ground (waves). She can walk on acid or lava, but her feet are still exposed.'
			}
		],
		image: 'https://i.pinimg.com/originals/c9/77/9c/c9779c573c5f2d257924f2d62fa960c2.jpg' // Example image
	},
	{
		id: 'succor',
		name: 'Succor',
		rank: 'Novice',
		powerPoints: '2',
		range: 'Touch',
		duration: 'Instant',
		trappings: 'The caster must touch the target with at least one free hand.', 
		description: [
			'Succor removes one Fatigue level, or two with a raise. It can also remove a character\'s Shaken status. Succor may be used to restore consciousness to those who have been Incapacitated due to wounds as well, though the wounds remain. It does not stop bleeding or otherwise stop mortal wounds from worsening, however.'
		],
		// No specific modifiers listed for Succor in the provided text
		image: 'https://i.pinimg.com/originals/b1/f9/e8/b1f9e82673743e12e211f0079d12c5e5.jpg' // Example image
	},
	{
		id: 'tremor',
		name: 'Tremor',
		rank: 'Seasoned',
		powerPoints: '3',
		range: 'Smarts',
		duration: 'Instant',
		trappings: 'Sudden gravity increase, ground shaking, sweeping roots.',
		description: [
			'This power shakes an area, threatening those caught within to be knocked to the ground. On a success, the caster affects a Medium Blast Template anywhere in Range. Targets in the area become Vulnerable and must succeed an Agility check or be knocked Prone (and Shaken, if the activation roll was a raise). Airborne creatures are unaffected.'
		],
		modifiers: [
			{
				id: 'tremor-area-effect',
				name: 'Area Effect',
				cost: '0/+1',
				effect: 'The caster may choose to reduce the affected Area to a Small Blast Template at no cost. And for 1 additional Power Point, he can increase it to a Large Blast Template.'
			},
			{
				id: 'tremor-cone',
				name: 'Cone',
				cost: '0', // Assuming 0 cost means it's an alternative way to cast, not an additional cost
				effect: 'The power affects a Cone Template emanating from the caster.'
			},
			{
				id: 'tremor-strong',
				name: 'Strong',
				cost: '+2',
				effect: 'The Agility rolls suffer a –2 penalty.'
			}
		],
		image: 'https://i.pinimg.com/originals/de/1f/f4/de1ff4748b56d1636f91244304016c1f.jpg' // Example image
	}
];