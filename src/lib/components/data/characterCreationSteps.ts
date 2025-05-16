import {
    LucideUsers,
    LucideSparkles,
    LucideSmilePlus,
    LucideBan,
    LucideWand2,
    LucideScrollText,
    LucideShoppingBag,
    LucideChevronRight,
    LucideGanttChartSquare,
    LucideCalculator,
} from '@lucide/svelte';

// Type for Lucide icon components 
type LucideIconComponent = typeof LucideUsers; 

// Define more specific types for actions
interface ActionLink {
    type: 'link';
    label: string;
    href: string;
    icon?: LucideIconComponent;
    iconBefore?: LucideIconComponent;
    variant?: string;
}

interface ActionButton {
    type: 'button';
    label: string;
    onClick: () => void;
    icon?: LucideIconComponent;
    iconBefore?: LucideIconComponent;
    variant?: string;
}

export type StepAction = ActionLink | ActionButton;

export interface CreationStep {
    id: string;
    icon: LucideIconComponent;
    title: string;
    content: string[];
    actions?: StepAction[];
}

export const characterCreationSteps: CreationStep[] = [
    {
        id: 'concept',
        icon: LucideSparkles,
        title: 'Step 1: Envision Your Character Concept',
        content: [
            'Before diving into numbers, imagine who you want to be. Illuvia is a realm where Renaissance science, gunpowder, and vibrant fantasy collide. Think:',
            '<ul class="list-disc ml-6 my-2 space-y-1"><li><strong>A World of Daring:</strong> Inspired by the Golden Age of Piracy, the Age of Revolution, and the grit of the Old West.</li><li><strong>Possible Paths:</strong> Swashbuckling Pirate, Curious Inventor, Master Engineer, Restless Aristocrat, Runaway Slave, Cunning Master Thief, Sharp Detective, Hardened Cowboy, Fervent Revolutionist, Intrepid Archaeologist, or an everyday individual swept into extraordinary events.</li></ul>',
            '<em>Talk to your Game Master (GM) about the campaign and what kind of hero might thrive (or cause delightful chaos!) in their story.</em>'
        ]
    },
    {
        id: 'ancestry',
        icon: LucideUsers,
        title: 'Step 2: Choose Your Ancestry',
        content: [
            'Illuvia is a melting pot of cultures and beings. While Humans are prevalent, followed by Elves, Halflings, Dwarves, and Dragonfolk, many other ancestries enrich the world.',
            '<ul class="list-disc ml-6 my-2 space-y-1"><li><strong>Core Ancestries:</strong> Illuvia primarily uses ancestries from the <strong>SWADE: Fantasy Companion</strong>.</li><li><strong>Illuvian Adjustments & Additions:</strong><ul class="list-disc ml-6 my-1 space-y-1"><li><strong>Replaced:</strong> Android by <strong>Automata/Marionette</strong>; Aquarian by <strong>Cephalios</strong>; Graveborn by <strong>Dhampir</strong>; Infernals by <strong>Tiefling</strong>; Rakashan by <strong>Catfolk</strong>.</li><li><em>Not typically used: Avion, Celestial, Elemental Scion, Insectoid, Shapeshifter.</em></li><li><strong>The Wyldmen:</strong> Fairies, Satyrs, Goliaths, Minotaurs, Centaurs, etc., from the Wyld Plains.</li></ul></li></ul>',
            '<em>Consult the Fantasy Companion and your GM for full details. New Illuvian ancestries are detailed below!</em>'
        ],
        actions: [
            {
                type: 'button', // Explicitly define type
                label: 'Discover New Illuvian Ancestries',
                icon: LucideChevronRight,
                onClick: () => { // This will need to be handled in the component if defined here
                    const element = document.getElementById('new-races-section');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            }
        ]
    },
    {
        id: 'hindrances',
        icon: LucideBan,
        title: 'Step 3: Select Hindrances (Flaws & Hooks)',
        content: [
            'Hindrances are story hooks and roleplaying opportunities. They define your character\'s personality and past.',
            '<ul class="list-disc ml-6 my-2 space-y-1"><li><strong>The System:</strong> Up to <strong>4 points</strong> of Hindrances. Minor = 1 pt, Major = 2 pts.</li><li><strong>The Benefits (per point gained):</strong><ul class="list-disc ml-6 my-1 space-y-1"><li><strong>2 Hindrance Points:</strong> Raise one Attribute one die type OR Choose one Edge.</li><li><strong>1 Hindrance Point:</strong> Gain one additional Skill Point OR Gain additional starting funds (double standard).</li></ul></li><li><strong>Available Hindrances:</strong> SWADE Core Rulebook, SWADE Fantasy Companion, plus Illuvia-specific ones.</li></ul>'
        ],
        actions: [
            {
                type: 'link', // Explicitly define type
                label: 'Explore Edges & Hindrances',
                href: '/rules/edges-hindrances',
                icon: LucideChevronRight
            }
        ]
    },
    {
        id: 'traits',
        icon: LucideGanttChartSquare,
        title: 'Step 4: Assign Your Traits (Attributes & Skills)',
        content: [
            'Traits define innate capabilities and learned talents, ranked by die types (d4-d12).',
            '<h4 class="h5 mt-3 mb-1 text-secondary-600 dark:text-secondary-400">Attributes (Agility, Smarts, Spirit, Strength, Vigor)</h4><ul class="list-disc ml-6 space-y-1"><li><strong>Starting Value:</strong> All Attributes begin at <strong>d4</strong>.</li><li><strong>Attribute Points:</strong> You have <strong>5 points</strong> to distribute.</li><li><strong>Cost:</strong> 1 point to raise an Attribute by one die type.</li><li><strong>Maximum:</strong> d12 (unless ancestry allows otherwise).</li></ul>',
            '<h4 class="h5 mt-3 mb-1 text-secondary-600 dark:text-secondary-400">Skills</h4><ul class="list-disc ml-6 space-y-1"><li><strong>Core Skills (Free d4):</strong> Athletics, Common Knowledge, Notice, Persuasion, Stealth.</li><li><strong>Skill Points (Illuvia Rule: More Skill Points!):</strong> <strong>15 additional points</strong> to raise Core Skills or buy new ones.</li><li><strong>Cost:</strong> 1 point/die type if skill ≤ linked Attribute; 2 points/die type if skill > linked Attribute.</li><li><strong>Skill List:</strong> SWADE Core skills + <strong>Alchemy</strong> (Fantasy Companion).</li><li><strong>Illuvian Skill Notes:</strong><ul class="list-disc ml-6 my-1 space-y-1"><li><strong>Repair:</strong> Broader use (engineering, item creation, tech "hacking", demolition).</li><li><strong>Hacking Skill:</strong> Not used (covered by Repair).</li></ul></li><li><strong>Maximum:</strong> d12 (normally).</li></ul>'
        ]
    },
    {
        id: 'derived-stats',
        icon: LucideCalculator,
        title: 'Step 5: Calculate Derived Statistics',
        content: [
            '<ul class="list-disc ml-6 my-2 space-y-1"><li><strong>Pace <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rabbit align-[-0.25em] inline-block ml-1"><path d="M12 16a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z"/><path d="M21 12a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Z"/><path d="M16 7a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0Z"/><path d="M13.244 9.433a2.992 2.992 0 0 0-2.012.517A16.63 16.63 0 0 1 8.5 9c-1.71 0-3.11.281-4 .75-1.322.693-1.5 2.25-1.5 3.25v0c0 1.548.452 3 1.5 4 .917.833 2.394 1 4.5 1s3.583-.167 4.5-1c1.048-1 1.5-2.452 1.5-4V13a1 1 0 0 0-1-1h-.5a1 1 0 1 0 0 2h.5a1 1 0 0 1 1 1v.75c0 .938-.272 1.769-.721 2.356A4.311 4.311 0 0 1 12.502 17c-1.65 0-2.783-.488-3.422-1.031a2.484 2.484 0 0 1-.605-1.838A1.923 1.923 0 0 1 8.5 13c.214 0 .424.027.632.079a3.006 3.006 0 0 0 .69-.37c.26-.186.49-.406.674-.664.18-.25.313-.526.39-.815.075-.282.11-.579.106-.88A2.721 2.721 0 0 0 10.5 9c0-.174.016-.346.047-.514.053-.29.145-.565.28-.812.13-.241.3-.455.502-.637a2.958 2.958 0 0 1 1.915-.537Z"/></svg>:</strong> Standard is <strong>6"</strong> (6 yards) per round.</li><li><strong>Parry <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half align-[-0.25em] inline-block ml-1"><path d="M20 13c0 1.5-4 5-8 5s-8-3.5-8-5V6c0-1.1.9-2 2-2h4l2-3 2 3h4c1.1 0 2 .9 2 2Z"/><path d="M12 22V4"/></svg>:</strong> <strong>2 + half Fighting skill</strong> (min. Parry 2). Target Number for melee hits.</li><li><strong>Toughness <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse inline-block ml-1 align-[-0.25em]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.71 2.14.71-4.28.71 4.28.71-2.14H20.78"/></svg>:</strong> <strong>2 + half Vigor + Armor</strong> (torso). Damage threshold.</li></ul>',
            '<em>(For Traits > d12, like d12+1, add half the fixed modifier, rounded down, for Parry/Toughness calcs.)</em>'
        ]
    },
    {
        id: 'edges',
        icon: LucideSmilePlus,
        title: 'Step 6: Choose Your Edges',
        content: [
            'Edges are special talents that make your character unique. Acquire them using points from Hindrances (2 Hindrance pts = 1 Edge).',
            '<ul class="list-disc ml-6 my-2 space-y-1"><li><strong>Available Edges:</strong> SWADE Core Rulebook, SWADE Fantasy Companion, plus new Illuvian Edges.</li></ul>'
        ],
        actions: [
            {
                type: 'link', // Explicit type
                label: 'Explore Edges & Hindrances',
                href: '/rules/edges-hindrances',
                icon: LucideChevronRight
            },
            {
                type: 'link', // Explicit type
                label: 'Discover Arcane Powers',
                href: '/rules/powers',
                icon: LucideWand2,
                variant: 'variant-soft-secondary' // Changed to soft for distinction
            }
        ]
    },
    {
        id: 'gear',
        icon: LucideShoppingBag,
        title: 'Step 7: Gear Up!',
        content: [
            '<ul class="list-disc ml-6 my-2 space-y-1"><li><strong>Starting Funds:</strong> <strong>300 pyrons</strong> (Illuvia\'s currency) for equipment.</li><li><strong>The Chronicler (Optional Magitech):</strong> Personal magitech (badge, heirloom, etc.) with a Chronyte crystal. Helps control innate magic. Non-power users can opt out.</li></ul>'
        ],
        actions: [
            {
                type: 'link', // Explicit type
                label: 'Browse Available Gear',
                href: '/gear',
                icon: LucideChevronRight
            }
        ]
    },
    {
        id: 'background',
        icon: LucideScrollText,
        title: 'Step 8: Add Background Details & Flourish!',
        content: [
            'Breathe life into your creation!',
            '<ul class="list-disc ml-6 my-2 space-y-1"><li>What are their goals? Where are they from?</li><li>Important friends, family, rivals? Why this adventure?</li><li>Consider discussing with other players for shared histories or complementary group abilities.</li></ul>',
            '<em>Most importantly, create a character you\'re excited to play! Details can evolve during gameplay.</em>'
        ]
    }
];