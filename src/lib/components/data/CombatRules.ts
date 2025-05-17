import {
    Swords, Zap, Dices,
    FastForward, Hand, UserCheck, Scale, User,
    ShieldAlert, HeartCrack, ThumbsDown, EyeOff, Wind, MoonStar, Bot,
    Crosshair, TrendingUp, ShieldCheck, Settings2
} from '@lucide/svelte';

// Use the constructor type of a representative Lucide icon
export type LucideIconConstructor = typeof Swords; 

export interface CombatRuleItem {
    name: string;
    description: string;
    penalty?: string;
    note?: string;
}

export interface CombatCondition {
    condition: string; 
    effect: string;    
}

export interface PowerModifierItem {
    name: string; 
    cost?: string; 
    effect: string; 
    icon?: LucideIconConstructor; 
}

export interface TabbedContentItem {
    id: string;
    title: string;
    icon?: LucideIconConstructor; 
    intro?: string[];
    listItems?: CombatRuleItem[];
    keyPoints?: string[];
}

export interface CombatRule {
	id: string;
	icon: LucideIconConstructor; 
	iconColor?: string;
	title: string;
	intro?: string[];
    listItems?: CombatRuleItem[];
    tableData?: {
        headers: string[];
        rows: (CombatCondition | PowerModifierItem | Record<string, string>)[];
    };
    tabbedContent?: TabbedContentItem[];
	keyPoints?: string[];
}

export const combatRulesData: CombatRule[] = [
    {
        id: 'action-cards',
        icon: Dices, // More thematic for "rolling" initiative with cards
        iconColor: 'text-primary-500',
        title: '1. Initiative & Action Cards',
        intro: [
            "Combat unfolds in <strong>rounds</strong>, with each character taking one <strong>turn</strong> per round. The order is dynamic, determined by Action Cards dealt at the start of each round."
        ],
        keyPoints: [
            "<strong>Deal:</strong> Each Wild Card (PCs & special NPCs) and one card for each group of allied Extras receives an Action Card.",
            "<strong>Countdown:</strong> GM counts from Ace to Deuce. Act when your card is called.",
            "<strong>Jokers Wild!</strong> Act anytime, +2 to Trait tests & damage for the round, and gain a <strong>Benny</strong>!",
            "<strong>Suit Order (Ties):</strong> Spades ♠ (high) → Hearts ♥ → Diamonds ♦ → Clubs ♣ (low).",
            "<strong>Redraws:</strong> Spend a <strong>Benny</strong> to redraw your Action Card. Must be done *before* any actions are taken by those with higher cards."
        ]
    },
    {
        id: 'your-turn',
        icon: User, // Or UserCheck
        iconColor: 'text-secondary-500',
        title: '2. Your Turn: Actions & Movement',
        intro: [
            "When your card is up, it's your time to act! You can move and take actions to shape the battle."
        ],
        listItems: [
            { name: 'Standard Turn', description: "Perform one standard Action and any number of Free Actions. Move up to your <strong>Pace</strong>." },
            { name: 'Multi-Actions', description: "Attempt up to <strong>three</strong> actions. Each suffers a penalty: <strong>–2 for two actions</strong>, <strong>–4 for three actions</strong>. Free Actions are not penalized.", note: "Declare all actions before rolling." },
            { name: 'Hold', description: "Go 'On Hold' to act later. You can interrupt another character's turn (may require opposed <strong>Athletics</strong> vs. an enemy) before your next card." }
        ],
        keyPoints: [
            "Movement (up to <strong>Pace</strong>) is a Free Action, breakable around other actions.",
            "Only one Trait-rolling standard Action without Multi-Action penalties (unless an Edge allows)."
        ]
    },
    {
        id: 'free-actions',
        icon: FastForward,
        iconColor: 'text-green-500',
        title: '3. Free Actions: Quick & Easy',
        intro: [
            "These don't require a roll and usually have no penalties. Take any number, but be reasonable and declare them."
        ],
        listItems: [
            { name: 'Move', description: "Up to your <strong>Pace</strong> once per turn." },
            { name: 'Run', description: "Move an additional distance per your Running die (typically d6). Incurs –2 to other actions this turn.", note: "Once per turn." },
            { name: 'Speak', description: "A short sentence or two." },
            { name: 'Go Prone', description: "Drop down. Ranged attacks vs. you are –4 if attacker >3\" away. Melee attackers +2 to hit you. Standing costs 2\" of <strong>Pace</strong>.", note: "No stack with Cover." },
            { name: 'Drop Item', description: "Let go of an item." },
            { name: 'Aim', description: "If **no other actions** this turn, gain +2 to Shooting/Throwing on your *next* turn, OR ignore up to 4 points of penalties on an attack *this* turn." },
            { name: 'Reload', description: "Reload. Weapons with Reload X need X full actions (often not free)." }
        ]
    },
    {
        id: 'standard-actions',
        icon: Hand,
        iconColor: 'text-yellow-500',
        title: '4. Standard Actions: Making Your Mark',
        intro: [
            "These are main turn actions, usually involving a Trait roll. One standard action, or more with Multi-Action penalties."
        ],
        listItems: [
            { name: 'Attack (Melee/Ranged)', description: "Make a <strong>Fighting</strong> or <strong>Shooting</strong> roll. See details below." },
            { name: 'Call Your Shot', description: "Target a specific part/item at a penalty (–2 to –6). GM sets penalty/effect." },
            { name: 'Push', description: "Opposed <strong>Strength</strong>. Success pushes 1\"; <strong>Raise</strong> pushes 2\". Run-up (+1\" move) adds +2." },
            { name: 'Grapple', description: "Opposed <strong>Athletics</strong> or <strong>Strength</strong>. Success = <strong>Entangled</strong>; <strong>Raise</strong> = <strong>Bound</strong>. Can crush on later turns." },
            { name: 'Defend', description: "+4 to <strong>Parry</strong> until your next turn. Not a Multi-Action." },
            { name: 'Test', description: "Use a skill (Taunt, Intimidation, etc.) vs. opponent. Success = <strong>Distracted</strong>; <strong>Raise</strong> = <strong>Vulnerable</strong>." },
            { name: 'Support', description: "Help an ally. Roll relevant Trait. Success = +1 to ally's roll, <strong>Raise</strong> = +2 (max +4 total)." }
        ]
    },
    // Section 5: Number Crunchin' - Now with sub-tabs
    {
        id: 'number-crunchin',
        icon: Scale, // Or Calculator, Crosshair
        iconColor: 'text-orange-500',
        title: '5. Attacks & Damage',
        intro: ["Resolving attacks and the harm they cause involves a few key steps and calculations."],
        tabbedContent: [
            {
                id: 'melee-attacks',
                title: 'Melee Attacks',
                icon: Swords,
                keyPoints: [
                    "<strong>Range:</strong> Weapon's Reach.",
                    "<strong>Roll:</strong> <strong>Fighting</strong> die + Wild Die (take highest).",
                    "<strong>Target:</strong> Enemy’s <strong>Parry</strong>.",
                    "<strong>Wild Attack:</strong> +2 To Hit & Damage, but your <strong>Parry</strong> is –2 until your next turn (you become <strong>Vulnerable</strong>).",
                    "<strong>Desperate Attack:</strong> Choose +X to hit (max +4), suffer –X to damage. Not cumulative with Wild Attack.",
                    "<strong>Prone Target:</strong> Attacker +2 to hit; Prone character's <strong>Parry</strong> is effectively –2, and they take –2 on their own <strong>Fighting</strong> rolls."
                ]
            },
            {
                id: 'ranged-attacks',
                title: 'Ranged Attacks',
                icon: Crosshair,
                keyPoints: [
                    "<strong>Range Categories:</strong> Short / Medium (–2) / Long (–4).",
                    "<strong>Roll:</strong> <strong>Shooting</strong> die + Wild Die (take highest).",
                    "<strong>Target Number (TN):</strong> Base TN is <strong>4</strong>.",
                    "<strong>Modifiers:</strong> Cover (Light –2, Medium –4, Heavy –6, Near Total –8), Prone Target (–4 if >3\" away, doesn't stack with Cover), Illumination, Size, Aiming, etc.",
                ]
            },
            {
                id: 'damage-wounds',
                title: 'Damage & Wounds',
                icon: HeartCrack,
                keyPoints: [
                    "<strong>Damage Roll (Melee):</strong> <strong>Strength</strong> die + weapon damage die(s).",
                    "<strong>Damage Roll (Ranged):</strong> Weapon damage die(s).",
                    "<strong>Raise on Attack Roll:</strong> Add an extra <strong>d6</strong> to your total damage! This is called an 'Ace' on damage in some contexts but specifically a 'bonus damage die' for a raise on attack.",
                    "<strong>Shaken:</strong> If total damage ≥ target’s <strong>Toughness</strong>, target is <strong>Shaken</strong>.",
                    "<strong>Wounds:</strong> For each <strong>Raise</strong> (every 4 points over Toughness) on the damage roll, target also suffers <strong>1 Wound</strong>.",
                    "<strong>Soak Wounds (Wild Cards):</strong> Spend a <strong>Benny</strong> to make an immediate <strong>Vigor</strong> roll. Success negates 1 Wound; each <strong>Raise</strong> negates another.",
                    "<strong>Extras Down:</strong> Non-Wild Card NPCs are typically <strong>Incapacitated</strong> (out of the fight) by a single Wound or being Shaken twice.",
                    "<strong>Wild Cards Tougher:</strong> PCs and important NPCs can take <strong>3 Wounds</strong> before being Incapacitated. A 4th Wound means Incapacitation."
                ]
            }
        ]
    },
    {
        id: 'conditions',
        icon: ShieldAlert,
        iconColor: 'text-red-600 dark:text-red-500', // More intense red
        title: '6. Conditions: Status Effects',
        intro: ["Various effects can impose conditions, impacting abilities. Most last until the character recovers or the end of their next turn."],
        tableData: {
            headers: ['Condition', 'Effect'],
            rows: [
                { condition: '<strong>Distracted</strong>', effect: '–2 to all Trait rolls. Ends after next turn.' },
                { condition: '<strong>Vulnerable</strong>', effect: 'Attackers add +2 to their Trait rolls against this target. Ends after next turn.' },
                { condition: '<strong>Shaken</strong>', effect: 'Can only take Free Actions or Run. Must make a <strong>Spirit</strong> roll at start of turn (or spend a <strong>Benny</strong>) to recover. Failing means still Shaken, can still take Free Actions. A second Shaken result while already Shaken causes a Wound.' },
                { condition: '<strong>Entangled</strong>', effect: 'Immobilized & <strong>Vulnerable</strong>. Escape with <strong>Athletics</strong> or <strong>Strength</strong> at –2. If Grappled, it’s an opposed roll.' },
                { condition: '<strong>Bound</strong>', effect: '<strong>Entangled</strong> + <strong>Distracted</strong>. Only Free Action is to escape (success → becomes just <strong>Entangled</strong>).' },
                { condition: '<strong>Fatigued</strong>', effect: 'Each level: –1 to all Trait rolls. Recover 1 level/hour of rest or if source removed. At 3 levels = <strong>Incapacitated</strong>.' },
                { condition: '<strong>Wounded</strong>', effect: 'Each Wound: –1 to <strong>Pace</strong> and all Trait rolls (max –3). Wild Cards take 3 before Incapacitation.' },
                { condition: '<strong>Incapacitated</strong>', effect: 'Out of action. GM consults Injury Table for effects (Bleeding Out, permanent injuries, etc.).' }
            ]
        }
    },
    {
        id: 'powers-activation',
        icon: Zap, // Changed from Sparkles for more direct "power" feel
        iconColor: 'text-purple-500',
        title: '7. Using Powers',
        intro: ["Characters with Arcane Backgrounds unleash potent abilities! They are the equivalent of a magic system of SWADE, but reflavoring is very encouraged. That's why the power descriptions are left open-ended. In case of Illuvia, Powers are cast through gadgets and The Arcane Chronicler, or simply amazing physical or mental technique"],
        keyPoints: [
            "<strong>Activation:</strong> Roll Arcane Skill vs. TN <strong>4</strong>. Success costs 1 Power Point (PP) per target (base). Failure costs 1 PP.",
            "<strong>Raise on Activation:</strong> Often grants bonus effects (see power description).",
            "<strong>Critical Failure (Backlash):</strong> 1s on skill & Wild Die = Lose 1 PP, gain 1 level of <strong>Fatigue</strong>, all active powers end!",
            "<strong>Maintain Powers:</strong> Pay 1 PP per target per base duration to maintain ongoing effects.",
            "<strong>Shorting:</strong> Reduce PP spent for a power, taking –1 to activation roll per PP shorted.",
            "<strong>Recovery:</strong> Regain 5 PP per hour of rest."
        ]
    },
    // New Card for Power Modifiers
    {
        id: 'power-modifiers',
        icon: Settings2, // Or Wand, BookOpen
        iconColor: 'text-indigo-500',
        title: 'Example Power Modifiers',
        intro: ["Enhance your powers with these common modifiers, usually by spending additional Power Points (PP)."],
        tableData: {
            headers: ['Modifier (Cost)', 'Effect'],
            rows: [
                { name: 'Armor Piercing (+1 PP)', effect: 'Power gains AP 2. Can be taken multiple times (e.g., +2 PP for AP 4, max AP defined by power or GM).', icon: ShieldCheck },
                { name: 'Fatigue (+2 PP)', effect: 'Target suffers a level of <strong>Fatigue</strong> if power causes damage or is successfully resisted.', icon: ThumbsDown },
                { name: 'Selective (+1 PP)', effect: 'Caster chooses who is (or isn’t) affected within an area of effect power.', icon: UserCheck },
                { name: 'Heavy Weapon (+2 PP)', effect: 'Power can damage vehicles or targets with Heavy Armor.', icon: Bot /* Or a truck/tank icon */ },
                { name: 'Hinder/Hurry (+1 PP)', effect: 'Target’s <strong>Pace</strong> is –2 (Hinder) or +2 (Hurry) for duration.', icon: Wind },
                { name: 'Range (+1/+2 PP)', effect: '+1 PP doubles Range; +2 PP triples Range.', icon: TrendingUp },
                { name: 'Lingering Damage (+2 PP)', effect: 'Damage from the power occurs again on the target’s next turn (at one die type less).', icon: MoonStar /* For duration/recurring */ },
                { name: 'Glow/Shroud (+1 PP)', effect: 'Target glows (–2 to their Stealth, attackers +1 to hit them in darkness) or is shrouded (+1 Stealth, attackers –1 to hit them).', icon: EyeOff }
            ]
        }
    }
];