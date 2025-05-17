import IconShield from '@lucide/svelte/icons/shield';
import IconBomb from '@lucide/svelte/icons/bomb';
import IconEyeOff from '@lucide/svelte/icons/eye-off';
import IconZap from '@lucide/svelte/icons/zap';
import IconTrendingUp from '@lucide/svelte/icons/trending-up';
import IconMousePointer2 from '@lucide/svelte/icons/mouse-pointer-2';
import IconWind from '@lucide/svelte/icons/wind';
import IconShieldAlert from '@lucide/svelte/icons/shield-alert';
import IconShieldCheck from '@lucide/svelte/icons/shield-check';
import IconScanEye from '@lucide/svelte/icons/scan-eye';
import IconWand2 from '@lucide/svelte/icons/wand-2';
import IconFlameKindling from '@lucide/svelte/icons/flame-kindling';
import IconShieldPlus from '@lucide/svelte/icons/shield-plus';
import IconMaximize from '@lucide/svelte/icons/maximize';
import IconSunMoon from '@lucide/svelte/icons/sun-moon';
import IconEraser from '@lucide/svelte/icons/eraser';
import IconUserCog from '@lucide/svelte/icons/user-cog';
import IconPawPrint from '@lucide/svelte/icons/paw-print';
import IconSnail from '@lucide/svelte/icons/snail';
import IconSword from '@lucide/svelte/icons/sword';
import IconVolume2 from '@lucide/svelte/icons/volume-2';
import IconDizzy from '@lucide/svelte/icons/zap';
import IconFootprints from '@lucide/svelte/icons/footprints';
import IconSwords from '@lucide/svelte/icons/swords';


type LucideIcon = typeof IconShield; 

// Interface for an individual new modifier (
export interface GeneralPowerModifier {
	id: string;
	name: string;
	cost: string;
	description: string[];
	trappings?: string;
}

// Interface for a group of new modifiers for a specific core power
export interface PowerWithNewModifiers {
	id: string;
	powerName: string;
	icon?: LucideIcon; 
	tagline?: string;
	newModifiers: GeneralPowerModifier[];
	image?: string;
	backgroundPosition?: string;
	flipImage?: 'horizontal' | 'vertical' | 'both' | false;
}

// Example background color/style for accordion items 
export const modifierGroupColors = {
	bg: 'bg-surface-200-700-token',
	text: 'text-surface-900 dark:text-surface-50',
	accentText: 'text-secondary-600 dark:text-secondary-600',
	gradient: 'bg-gradient-to-l from-transparent via-primary-200/40 dark:via-primary-700/40 to-primary-200/80 dark:to-primary-700/80'
};

export const newGeneralModifiersData: PowerWithNewModifiers[] = [
	{
		id: 'barrier',
		powerName: 'Barrier',
		icon: IconShield,
		tagline: 'New ways to shape and utilize protective fields.',
		image: 'https://i.pinimg.com/originals/a1/3d/f7/a13df7495f7f57f0948e093291f05920.jpg',
		newModifiers: [
			// ... (Barrier modifiers as before)
			{ id: 'barrier-bridge', name: 'Bridge', cost: '+2', description: [ `The barrier is horizontal and can be used as e.g. a bridge, a platform, or a roof. It is up to 5” (10 yards or meters) long and 1” (two yards or meters)
                                                                                wide. It can withstand about 500 lbs (250 kg), 1 ton if Hardened. The Size Modifier doubles the length and width.` ] },
			{ id: 'barrier-energy', name: 'Energy Barrier', cost: '0', description: [`The barrier is not solid and can’t be destroyed with damage. It always comes with the Damage Power Modifier selected for free. Characters
                                                                                        wanting to jump through such an energy wall must succeed a Spirit roll (at -2 if Hardened) to have the guts to do so. Whoever passes through (intended or not), suffers the barrier’s damage. Depending on the
                                                                                        Trapping, there might be other ways to pass the curtain, like destroying it with water, splitting it open with a strong gust of wind, or protecting yourself with a shield over the head. ` ], trappings: 'Wall of flames, curtain of lightning, steam geysers.' },
			{ id: 'barrier-kinetic', name: 'Kinetic Barrier', cost: '0', description: [ `The barrier is not solid and can’t be destroyed with damage but blocks movement and repels physical attacks. Characters can force their
                                                                                        way through taking their full turn and a successful Strength roll (at - 2 if Hardened). ` ], trappings: 'Repulsion field, wall of kinetic force.' }
		]
	},
	{
		id: 'blast',
		powerName: 'Blast',
		icon: IconBomb,
		tagline: 'Enhancements for area-of-effect attacks.',
		image: 'https://i.pinimg.com/originals/f5/f7/bf/f5f7bf820f0b093e503a125a4c931e20.jpg',
		newModifiers: [
			// ... (Blast modifiers as before)
			{ id: 'blast-lingering-area', name: 'Lingering Area', cost: '+2', description: [ `The blast also affects the ground and continues to provide effects there for one more turn. At the beginning of the caster’s next turn, all targets in the area suffer the power base damage again,
                                                                                                but one die type lower (e.g. d6s becomes d4s). If a target would suffer from both Lingering Damage and Lingering Area, it only suffer from Lingering Area this turn, and Lingering Damage will trigger during her next turn.` ] }
		]
	},
	{
		id: 'blind',
		powerName: 'Blind',
		icon: IconEyeOff,
		tagline: 'More potent ways to obscure vision.',
		image: 'https://i.pinimg.com/originals/8b/a3/e3/8ba3e39260b45f0b4a0045dd5408d9c7.jpg',
		newModifiers: [
			// ... (Blind modifiers as before)
            { id: 'blind-efficiency', name: 'Efficiency', cost: '+2', description: ['The penalty to actions requiring sight is increased by 2 (–4 on success, –6 on a raise).'] }
		]
	},
	{
		id: 'bolt',
		powerName: 'Bolt',
		icon: IconZap,
		tagline: 'Transform single bolts into multiple projectiles.',
		image: 'https://i.pinimg.com/originals/0c/d8/8f/0cd88f46117bf6a999d580811f18c5e9.jpg',
		newModifiers: [
			// ... (Bolt modifiers as before)
            { id: 'bolt-missiles', name: 'Missiles', cost: '+1', description: [ `The power releases multiple smaller bolts (each can target a different enemy). The power gains a Rate of Fire of 3 (you roll multiple arcane skill dice to activate the power), ignores the Recoil penalty,
                                                                                but its damage dice lose one die type (e.g. d6s becomes d4s). The bonus damage from a raise remains +1d6. Spending 1 more Power Points improves Rate of Fire to 5. Trappings: Magic missiles, fan of knives, ice shards,
                                                                                swarm of bolts, projectile splitting on impact`], trappings: 'Magic missiles, fan of knives, ice shards, swarm of bolts, projectile splitting on impact.'}
		]
	},
	{
		id: 'boost-lower-trait',
		powerName: 'Boost / Lower Trait',
		icon: IconTrendingUp,
		tagline: 'Alternative ways to modify attributes and skills.',
		image: 'https://i.pinimg.com/originals/aa/bd/f4/aabdf47927c216636c1ba322f833016c.jpg',
		newModifiers: [
			// ... (Boost/Lower Trait modifiers as before)
            { id: 'boost-lower-trait-proficiency', name: 'Proficiency', cost: '+2', description: [ `Instead of increasing or decreasing the Trait by one (or two on a raise) die type(s), the Trait receives a +1 bonus or –1 penalty (+2/–2 on a raise` ] }
		]
	},
    {
		id: 'burrow',
		powerName: 'Burrow',
        icon: IconMousePointer2,
		tagline: 'Enhanced subterranean movement.',
        image: 'https://i.pinimg.com/originals/d3/e0/8e/d3e08e4f8bb544e73442525b37ae8b03.jpg',
		newModifiers: [
			{ id: 'burrow-celerity', name: 'Celerity', cost: '+2', description: ['The recipient may Run using his standard Running die.']},
			{ id: 'burrow-subtlety', name: 'Subtlety', cost: '+2', description: ['While underground, the recipient is hard to notice, Notice and Survival rolls to spot or track him are made at –2.']}
		]
	},
    {
		id: 'burst',
		powerName: 'Burst',
        icon: IconWind,
		tagline: 'Persistent ground effects and caster movement.',
        image: 'https://i.pinimg.com/originals/f5/f7/bf/f5f7bf820f0b093e503a125a4c931e20.jpg',
		newModifiers: [
			{ id: 'burst-lingering-area', name: 'Lingering Area', cost: '+2', description: [ `The burst also affects the ground and continues to provide effects there for one more turn. At the beginning of the caster’s next turn, all targets in the area suffers the power base damage
                                                                                            again, but with one die type less (d6s becomes d4s). If a target would suffer from both Lingering Damage and Lingering Area, it only suffer from Lingering Area this turn, and Lingering Damage will trigger during her next turn.` ] },
            { id: 'burst-self', name: 'Self', cost: '+0', description: ['Range is no longer Cone Template, but Self. The effect sprays to targets within a Medium Blast Template emanating from the caster.']},
            { id: 'burst-rush', name: 'Rush', cost: '+1', description: [ `The caster gets overwhelmed by energy and quickly moves onto the battlefield, damaging targets he passes through. After placing the Cone Template, the
                                                                        caster moves to the center of the circular end of the Cone (opponents do get a free attack on the caster from Withdrawing from Melee). Then, burst damage applies as normal to all within the Cone but the caster.` ]}
		]
	},
    {
        id: 'damage-field',
        powerName: 'Damage Field',
        icon: IconShieldAlert,
        tagline: 'Stationary damaging zones.',
        image: 'https://i.pinimg.com/originals/ef/0f/7c/ef0f7c06d1d8c2c6a9d08563b972d7b1.jpg',
        newModifiers: [
            { id: 'damage-field-pillar', name: 'Damage Pillar', cost: '0', description: [ `The power no longer targets a recipient but it affects the ground under a Small Blast Template. Anyone moving into the area takes damage,
                                                                                        as well as anyone still in the area at the end of each of the caster’s turns. ` ], trappings: 'Acid rain, flame pillar, caltrops, stalwart guardian.'}
        ]
    },
    {
        id: 'deflection',
        powerName: 'Deflection',
        icon: IconShieldCheck,
        tagline: 'Greater protection against attacks.',
        image: 'https://i.pinimg.com/originals/4c/a2/3c/4ca23c4a8e79f03e8f76f000590a8f8f.jpg',
        newModifiers: [
            { id: 'deflection-efficiency', name: 'Efficiency', cost: '+2', description: ['Deflection effects are improved by 2 (–4 on success, –6 on a raise).']}
        ]
    },
    {
        id: 'detect-conceal-arcana',
        powerName: 'Detect/Conceal Arcana',
        icon: IconScanEye,
        tagline: 'Enhanced magical perception and stealth.',
        image: 'https://i.pinimg.com/originals/9e/2c/1d/9e2c1da685e6f87b6d13091529f4f2b2.jpg',
        newModifiers: [
            { id: 'detect-arcana-awareness', name: 'Awareness (Detect Only)', cost: '+1 to +4', description: [ `Detect arcana only. Every Power Point spent grants a +2 bonus to pierce conceal
                                                                                                                arcana and glyph, as well as darkness and invisibility if they require an opposed roll.` ]},
            { id: 'conceal-arcana-subtlety', name: 'Subtlety (Conceal Only)', cost: '+1 to +4', description: [ `Conceal arcana only. Every Power Point spent applies a –2 penalty to powers and
                                                                                                                abilities like detect arcana, locate, or sense beings to see through the conceal arcana effects` ]},
            { id: 'detect-arcana-heightened-senses', name: 'Heightened Senses (Detect Only)', cost: '+2', description: [ `Detect arcana only. The recipients perceive the presence of magic through clothes, furniture, thin walls.` ]}
        ]
    },
    {
        id: 'dispel',
        powerName: 'Dispel',
        icon: IconWand2,
        tagline: 'More effective magical nullification.',
        image: 'https://i.pinimg.com/originals/a3/5a/1f/a35a1f8c89d7188e6457020820b123d8.jpg',
        newModifiers: [
            { id: 'dispel-efficiency', name: 'Efficiency', cost: '+1 to +4', description: ['Every additional Power Point add +2 to opposed arcane skill rolls to dispel powers or arcane devices.']}
        ]
    },
    {
        id: 'elemental-manipulation',
        powerName: 'Elemental Manipulation',
        icon: IconFlameKindling,
        tagline: 'Greater control over elemental forces.',
        image: 'https://i.pinimg.com/originals/0e/2e/3a/0e2e3a1f8e1d309f1400b23f3045191e.jpg',
        newModifiers: [
            { id: 'elemental-manip-quantity', name: 'Quantity', cost: '+1 to +4', description: [ `Every additional Power Point doubles the quantity of elements created, transmuted, or destroyed by elemental manipulations.` ]},
            { id: 'elemental-manip-aoe', name: 'Area of Effect', cost: '+2', description: [ `Once per turn, an elemental manipulation used to perform a Test can affect targets in a Medium Blast Template` ]}
        ]
    },
    {
        id: 'elemental-protection',
        powerName: 'Elemental Protection',
        icon: IconShieldPlus,
        tagline: 'Absolute defense against specific elements.',
        image: 'https://i.pinimg.com/originals/7a/5f/bc/7a5fbcb9864a1e200f5b2b2f61348a4c.jpg',
        newModifiers: [
            { id: 'elemental-prot-immunity', name: 'Immunity', cost: '+6', description: [ `The power damage reduction now becomes immunity to that damage. For example, arctic environment protection makes the recipient immune to cold damage.` ]}
        ]
    },
    {
        id: 'growth-shrink',
        powerName: 'Growth/Shrink',
        icon: IconMaximize,
        tagline: 'Affect multiple targets or alter object dimensions.',
        image: 'https://i.pinimg.com/originals/2d/f8/1e/2df81e7c057b9f805d0a31953204d501.jpg',
        newModifiers: [
            { id: 'growth-shrink-additional-recipients', name: 'Additional Recipients', cost: '+2', description: [ `Growth and shrink may affect more than one target for 2 additional Power Points each`]},
            { id: 'growth-shrink-elongate', name: 'Elongate (Objects Only)', cost: '0', description: [ `Only applicable to objects. The item grows (or shrinks), in a single direction, in a logical, balanced way, like increasing length of a rope, pole, table, or ladder (rungs might thicken then split and
                                                                                                        move to keep the interval human- sized). For weapons, a single Size change can change daggers or short swords to long swords, long swords to great swords. Alternatively, a club can become a staff, or a staff can gain +1 Reach.` ]}
        ]
    },
    {
        id: 'invisibility',
        powerName: 'Invisibility',
        icon: IconEyeOff, // Re-use
        tagline: 'Enhanced undetectability.',
        image: 'https://i.pinimg.com/originals/8b/a3/e3/8ba3e39260b45f0b4a0045dd5408d9c7.jpg', // Re-use
        newModifiers: [
            { id: 'invisibility-subtlety', name: 'Subtlety', cost: '+1 to +4', description: [ `Each Power Point spent applies a –2 penalty to powers or abilities like sense beings (against Wild Cards) to see through the invisibility
                                                                                                effects. In addition, piercing the invisibility with detect arcana becomes an opposed roll of arcane skills, with a –2 penalty per Power Point spent in Subtlety on invisibility.` ]}
        ]
    },
    {
        id: 'light-darkness',
        powerName: 'Light/Darkness',
        icon: IconSunMoon,
        tagline: 'Specialized illumination and obscuration.',
        image: 'https://i.pinimg.com/originals/e4/b4/b2/e4b4b2038822ff1c117467a994b78739.jpg',
        newModifiers: [
            { id: 'light-beacon', name: 'Beacon (Light Only)', cost: '+1', description: [ `The area is only a Small Blast Template, but reaches very high in the sky.` ]},
            { id: 'darkness-subtlety', name: 'Subtlety (Darkness Only)', cost: '+1 to +4', description: [`Detect arcana can’t see through this darkness, unless its caster succeeds an opposed arcane skill roll against the
                                                                                                        darkness caster’s arcane skill, with a –2 penalty per Power Point spent in Subtlety.` ]}
        ]
    },
    {
        id: 'mind-wipe',
        powerName: 'Mind Wipe',
        icon: IconEraser,
        tagline: 'Total memory erasure.',
        image: 'https://i.pinimg.com/originals/a3/3d/80/a33d807a599b4221ae4d14a7032a08f9.jpg',
        newModifiers: [
            { id: 'mind-wipe-amnesia', name: 'Amnesia', cost: '+8', description: [ `The target loses his memories. He keeps his ability to talk and all his skills, but forgets his name, what he did, who he knows. Time, as well as physical or
                                                                                    emotional shocks, may have the memories return (fully or partially, up to the GM).` ]}
        ]
    },
    {
        id: 'puppet',
        powerName: 'Puppet',
        icon: IconUserCog,
        tagline: 'Enhanced control and sensory link with dominated targets.',
        image: 'https://i.pinimg.com/originals/2c/73/7f/2c737f6cd78fd65524391f7d9539251c.jpg',
        newModifiers: [
            { id: 'puppet-mind-rider', name: 'Mind Rider', cost: '+1', description: [ ` The caster keeps a telepathic channel to his targets. He doesn’t need to speak out his orders to
                                                                                        them. In addition, he can sense through one of his puppets and switch as a free action.` ]}
        ]
    },
    {
        id: 'shape-change',
        powerName: 'Shape Change',
        icon: IconPawPrint,
        tagline: 'Improved combat prowess and skills in animal forms.',
        image: 'https://i.pinimg.com/originals/e7/58/49/e75849423a94b313f4a7739ef41bc6cf.jpg',
        newModifiers: [
            { id: 'shape-change-predator', name: 'Predator', cost: '+2/+4', description: [ `For 2 additional Power Points, the damage of the animal fighting attacks improves by one
                                                                                        die type (Str+d6 becomes Str+d8). For 4 Power Points, special or ranged attacks are improved as well.`]},
            { id: 'shape-change-proficiency', name: 'Proficiency', cost: '+2', description: [ `Improves two of the animal’s natural skills by one die type. They can go higher than d12` ]}
        ]
    },
    {
        id: 'sloth-speed',
        powerName: 'Sloth/Speed',
        icon: IconSnail,
        tagline: 'Further debilitating effects for slowed targets.',
        image: 'https://i.pinimg.com/originals/c3/8c/c4/c38cc4b6868f6b88c299e1b742896099.jpg',
        newModifiers: [
            { id: 'sloth-numb', name: 'Numb (Sloth Only)', cost: '+2', description: [ `Targets lose Quick, Level Headed and Improved Level Headed Edges for the
                                                                                    Duration. If they had none of those, they gain the Hesitant Hindrance instead.` ]}
        ]
    },
    {
        id: 'smite',
        powerName: 'Smite',
        icon: IconSword,
        tagline: 'Enhanced weapon enchantments and spiritual arms.',
        image: 'https://i.pinimg.com/originals/a7/db/0e/a7db0ef95b182233db48b56c04ae39f5.jpg',
        newModifiers: [
            { id: 'smite-returning', name: 'Returning', cost: '+1', description: [ `Immediately after a ranged attack, whether it lands or misses, the weapon, or ammunition,
                                                                                    returns to the attacker’s hand, quiver or sheathe, their choice.` ]},
            { id: 'smite-seeking', name: 'Seeking', cost: '+1', description: [ `Attacks made with the weapon or ammunition also ignore up to 2 points of penalty from
                                                                                Scale, Cover, the deflection Power, or Edges like Combat Acrobat or Dodge.`]},
            { id: 'smite-spiritual', name: 'Spiritual', cost: '+2', description: [ `Instead of enchanting a weapon, the spellcaster creates a weapon of pure energy in Range: Smarts. The caster can move her spiritual weapon up to
                                                                                     5" on her turn and attack with it as a limited free action, using her arcane skill. The weapon does Spr+d4 damage (Spr+d6 with a raise).` ]}
        ]
    },
    {
        id: 'sound-silence',
        powerName: 'Sound/Silence',
        icon: IconVolume2,
        tagline: 'Broader sound projection and deafening effects.',
        image: 'https://i.pinimg.com/originals/3f/8e/59/3f8e5954df4f85ae50d5ae7f9a68554e.jpg',
        newModifiers: [
            { id: 'sound-area-effect', name: 'Area Effect (Sound Only)', cost: '+2', description: [ `The sound is designed to be clearly heard around the point of origin. If used as
                                                                                                    a Test, it applies to all targets in a Medium Blast Template around the sound’s point of origin.` ]},
            { id: 'sound-loud', name: 'Loud (Sound Only)', cost: '+2', description: [ `The sound is extremely loud, like standing next to a thunderclap. Targets of a sound Test, are deafened. They receive the Hard of Hearing
                                                                                        Minor Hindrance (Major with a raise). They roll Vigor at the end of each of their turn to shake the effects off.` ]}
        ]
    },
    {
        id: 'stun',
        powerName: 'Stun',
        icon: IconDizzy,
        tagline: 'Prolonged incapacitation and protective states.',
        image: 'https://i.pinimg.com/originals/ba/99/7e/ba997e3ccf15f17d7b57972431432320.jpg',
        newModifiers: [
            { id: 'stun-paralysis', name: 'Paralysis', cost: '+4', description: [ `A target is incapable of recovering from Stunned for 1d6 rounds or until she is Shaken or
                                                                                    suffers a Wound. The next turn, she can resume rolling to recover as normal` ]},
            { id: 'stun-petrify', name: 'Petrify', cost: '+1', description: [ `While Stunned the target gains the effect of Heavy Armor (immune to all damage which is not Heavy Weapon). ` ], trappings: 'Petrify gaze, encased in ice.'},
            { id: 'stun-stasis', name: 'Stasis', cost: '+1', description: [ `While Stunned the target is no longer here, can’t be targeted, and/or is totally immune to damage.` ], trappings: 'Sent into the future, sent to limbo.'}
        ]
    },
    {
        id: 'wall-walker',
        powerName: 'Wall Walker',
        icon: IconFootprints,
        tagline: 'Enhanced surface anchoring.',
        image: 'https://i.pinimg.com/originals/c9/1d/05/c91d05ef77c4a42826f7c538014d3106.jpg',
        newModifiers: [
            { id: 'wall-walker-anchored', name: 'Anchored', cost: '+2', description: [ `All the recipients can tightly anchor themselves to surfaces, receiving a +2 bonus (+4 on a raise) to resist Push maneuvers and attempts to be
                                                                                        moved by force (elemental manipulation, havoc, hook, telekinesis, or similar effects).` ]}
        ]
    },
    {
        id: 'warriors-gift',
        powerName: "Warrior's Gift",
        icon: IconSwords,
        tagline: 'Grants multiple combat advantages.',
        image: 'https://i.pinimg.com/originals/cc/6a/d8/cc6ad8d51b390104047d1f1964033b1c.jpg',
        newModifiers: [
            { id: 'warriors-gift-master', name: 'Master', cost: '+4', description: [ `Grants two Combat Edges instead of one. With a raise, grants the improved version of both (if they have one).` ]}
        ]
    }
];