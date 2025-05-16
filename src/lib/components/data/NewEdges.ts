export type EdgeCategory =
	| 'Background'
	| 'Combat'
	| 'Leadership'
	| 'Power'
	| 'Professional'
	| 'Social'
	| 'Weird'
	| 'Legendary'
    | 'Naval'; 

export interface Edge {
	id: string;
	name: string;
	category: EdgeCategory;
	description: string[];
	requirements: {
		rank: string;
		attributes?: string;
		skills?: string;
		otherEdges?: string;
		other?: string;
	};
	image?: string;
}

// --- COLOR MAPPING FOR EDGE CATEGORIES ---
export const edgeCategoryColors: Record<EdgeCategory, { bg: string; text: string; border: string; shadowColor: string }> = {
    Background:   { bg: 'bg-tertiary-600 dark:bg-tertiary-700',    text: 'text-green-100',   border: 'border-green-700 dark:border-green-800', shadowColor: 'rgba(22, 101, 52, 0.7)' /* Darker Green for shadow */ },
    Combat:       { bg: 'bg-primary-950 dark:bg-primary-950',        text: 'text-red-100',       border: 'border-red-700 dark:border-red-800', shadowColor: 'rgba(185, 28, 28, 0.7)' /* Darker Red */ },
    Leadership:   { bg: 'bg-yellow-500 dark:bg-yellow-600',  text: 'text-yellow-900 dark:text-yellow-100', border: 'border-yellow-600 dark:border-yellow-700', shadowColor: 'rgba(202, 138, 4, 0.7)' /* Darker Yellow */ },
    Power:        { bg: 'bg-secondary-600 dark:bg-secondary-700',  text: 'text-purple-100',  border: 'border-purple-700 dark:border-purple-800', shadowColor: 'rgba(126, 34, 206, 0.7)' /* Darker Purple */ },
    Professional: { bg: 'bg-gray-500 dark:bg-gray-600',    text: 'text-gray-100 dark:text-gray-200',   border: 'border-gray-600 dark:border-gray-700', shadowColor: 'rgba(75, 85, 99, 0.7)' /* Darker Gray */ },
    Social:       { bg: 'bg-fuchsia-700 dark:bg-fuscha-800',      text: 'text-pink-100',    border: 'border-pink-600 dark:border-pink-700', shadowColor: 'rgba(219, 39, 119, 0.7)' /* Darker Pink */ },
    Weird:        { bg: 'bg-indigo-700 dark:bg-indigo-800',  text: 'text-indigo-100',  border: 'border-indigo-600 dark:border-indigo-700', shadowColor: 'rgba(79, 70, 229, 0.7)' /* Darker Indigo */ },
    Legendary:    { bg: 'bg-stone-400 dark:bg-stone-500',    text: 'text-amber-100 dark:text-amber-100',   border: 'border-amber-500 dark:border-amber-600', shadowColor: 'rgba(217, 119, 6, 0.7)' /* Darker Amber */ },
    Naval:        { bg: 'bg-teal-700 dark:bg-teal-800',       text: 'text-sky-100',     border: 'border-sky-600 dark:border-sky-700', shadowColor: 'rgba(2, 132, 199, 0.7)' /* Darker Sky Blue */ }
};

const placeholderImage = 'https://i.pinimg.com/1200x/0b/c6/4c/0bc64cd89ad567be76ae26ecf25d3295.jpg';

export const edgesData: Edge[] = [
	// --- BACKGROUND EDGES ---
	{
		id: 'blind-mechanic',
		name: 'Blind Mechanic',
		category: 'Background',
		description: [
			"The most difficult part in the repair of large machines is to find a damaged detail that caused a break-down in a maze of sprockets and shafts. Your character knows how to define malfunctioning parts by ear.",
			"He receives +2 to all Repair rolls and doesn't receive any penalties in a situation when he doesn't see what he is working on."
		],
		requirements: { rank: 'Novice', attributes: 'Smarts d8+', skills: 'Repair d6+' },
        image: placeholderImage
	},
	{
		id: 'naval-natural-swimmer',
		name: 'Naval: Natural Swimmer',
		category: 'Naval', 
		description: [
			"Your hero wasn’t literally born in the water, but some might believe he was. He takes to it like a fish and can hold his breath longer than most others.",
			"Natural swimmers add +2 to their Athletics rolls on swimming, add +1 to their Swimming Pace, and can hold their breath 50% longer than others of their species."
		],
		requirements: { rank: 'Novice', attributes: 'Agility d6+', other: "Not available to Aquatic and Semi-Aquatic races" },
        image: placeholderImage
	},
	{
		id: 'military-training',
		name: 'Military Training',
		category: 'Background',
		description: [
			"You were born in a family who is trained as a soldier or served in the military, or you may take a military training on your youth. This gives you advantage on combat and battle knowledge.",
            "You gain 4 additional skill points which must be spent on either: Athletics, Fighting, Shooting, Boating, Driving, Battle, or Survival.",
            "This Edge must be taken at character creation."
		],
		requirements: { rank: 'Novice', attributes: 'Agility d8+' },
        image: placeholderImage
	},
    {
		id: 'true-gentlemen',
		name: 'True Gentlemen',
		category: 'Social', 
		description: [
			"Your character is good at fencing, boxing and shooting, but these noble skills are good only in an honest fight with one opponent. In a street brawl they tend to be useless.",
            "The character gets +2 to Fighting rolls, Shooting rolls and to damage if he meets an opponent one-on-one."
		],
		requirements: { rank: 'Seasoned', other: "Aristocrat", skills: 'Fighting d8+, Shooting d8+'},
        image: placeholderImage
	},
    {
		id: 'well-educated',
		name: 'Well-Educated',
		category: 'Background',
		description: [
			"The hero has had the chance to have deep study, and knows many different things as a result.",
            "The hero gains 4 additional Skill points, which must be spent on either: Science, Research, Academics, Repair, Engineering, or Survival.",
            "This Edge must be taken at character creation and cannot be taken if you have the Self-Taught Hindrance."
		],
		requirements: { rank: 'Novice', attributes: 'Smarts d8+' },
        image: placeholderImage
	},

    // --- COMBAT EDGES ---
    {
        id: 'action-surge',
        name: 'Action Surge',
        category: 'Combat',
        description: ["The adventurer can spend a Benny to take one additional action on their turn. This action does not add or include a Multi-Action penalty. Any other actions on that turn are still accounted for when determining the penalty for those other actions."],
        requirements: { rank: 'Seasoned', other: 'Wild Card' },
        image: placeholderImage
    },
    {
        id: 'all-riled-up',
        name: 'All Riled Up',
        category: 'Combat',
        description: ["The hero with this Edge can be a real curly wolf when he gets roughed up. When causing melee damage, he adds his Wound levels to the roll. A hero with three Wounds, for instance, adds +3 to his melee damage rolls!"],
        requirements: { rank: 'Novice' },
        image: placeholderImage
    },
    {
        id: 'covering-defense',
        name: 'Covering Defense',
        category: 'Combat',
        description: ["You are skilled at protecting yourself and your allies with your shield. When this valiant champion uses the Defend maneuver while wielding a shield, he may provide an adjacent ally with the Parry and Cover bonus of his shield (in addition to himself)."],
        requirements: { rank: 'Seasoned' },
        image: placeholderImage
    },
    {
        id: 'crippling-attack',
        name: 'Crippling Attack',
        category: 'Combat',
        description: ["Whenever the hero gets a raise with his trademark weapon, the target's Pace is halved for five rounds. Against creatures with multiple types of movement, the character must choose which movement type to affect. Flying creature hit must make an Athletics check to remain airborne when crippled."],
        requirements: { rank: 'Heroic', other: 'Trademark Weapon' }, 
    },
    {
        id: 'duelist',
        name: 'Duelist',
        category: 'Combat',
        description: ["Your hero is a deadly gunfighter, and anyone foolish enough to face him at High Noon is likely to end up in the boneyard by sunset. In a duel, this hero receives two extra Hole Cards at the start of the throwdown."],
        requirements: { rank: 'Novice', skills: 'Shooting d6+' },
        image: placeholderImage
    },
    {
        id: 'extend-berserk',
        name: 'Extend Berserk',
        category: 'Combat',
        description: ["Each phase of the hero's Berserk state can last five additional rounds before suffering a level of Fatigue."],
        requirements: { rank: 'Seasoned', otherEdges: 'Berserk' },
        image: placeholderImage
    },
    {
        id: 'fan-the-hammer',
        name: 'Fan The Hammer',
        category: 'Combat',
        description: [
            "A gunslinger who wants to “fan the hammer” holds the trigger of a single-action pistol down while repeatedly slapping the hammer with his other hand. Assuming his six-gun is fully loaded, he may fire up to six shots in a single action.",
            "Each shot is a Shooting die at a −4 Shooting penalty, along with the Wild Die if the shooter is a Wild Card. A player character firing all six shots, for example, rolls six Shooting dice and one Wild Die. What you lose in accuracy you (hopefully) make up for by getting lead in the air!",
            "Just watch who’s about when you’re fanning the hammer, partner. If your Shooting die comes up 1 or 2, there’s a chance you hit an Innocent Bystander."
        ],
        requirements: { rank: 'Seasoned', attributes: 'Agility d8+', skills: 'Shooting d8+' },
        image: placeholderImage
    },
    {
        id: 'improved-fan-the-hammer',
        name: 'Improved Fan The Hammer',
        category: 'Combat',
        description: ["The same as Fan the Hammer, above, but each shot suffers a −2 Shooting penalty."],
        requirements: { rank: 'Heroic', attributes: 'Agility d10+', skills: 'Shooting d10+', otherEdges: 'Fan the Hammer' },
        image: placeholderImage
    },
    {
        id: 'missile-shield',
        name: 'Missile Shield',
        category: 'Combat',
        description: ["You are skilled at deflecting ranged attacks with your shield. The hero must be using a shield to benefit from this Edge. When he is hit with a ranged attack (not including spell effects), he may apply the shield's Parry bonus to his Toughness. The character must be aware of the attack for this Edge to take effect."],
        requirements: { rank: 'Veteran' }, 
        image: placeholderImage
    },
    {
        id: 'mounted-shield',
        name: 'Mounted Shield',
        category: 'Combat', 
        description: ["Your defensive tactics defend both you and your mount. When mounted, the horseman may add his shield bonuses (against both ranged and melee attacks) to his mount's defenses."],
        requirements: { rank: 'Novice', skills: 'Riding d6+' },
        image: placeholderImage
    },
    {
		id: 'naval-bilge-rat',
		name: 'Naval: Bilge Rat',
		category: 'Naval',
		description: ["Scuttling around in the bowels of the ship doesn’t suit every sailor, but this character has learned to adjust to the cramped conditions below deck. The character no longer suffers the –2 penalty when fighting below decks."],
		requirements: { rank: 'Seasoned', attributes: 'Agility d8+', skills: 'Fighting d8+' },
        image: placeholderImage
	},
    {
        id: 'pigeon-hunter',
        name: 'Pigeon Hunter',
        category: 'Combat',
        description: ["One philosopher said the quantity sooner or later turns into the quality. This is true about your character: during his lifetime he has produced so many bullets from his flintlock pistol that he can shoot fast and with great lethality. The character gets additional +1d4 to damage when he uses flintlock pistols."],
        requirements: { rank: 'Seasoned', otherEdges: 'Street Shooter' },
        image: placeholderImage
    },
    {
        id: 'precise-swing',
        name: 'Precise Swing',
        category: 'Combat',
        description: ["An adventurer with this Edge can maneuver their weapon when making a melee attack against an opponent behind Cover, ignoring all penalties from Cover, but not from Near Total Cover."],
        requirements: { rank: 'Seasoned', skills: 'Fighting d8+' },
        image: placeholderImage
    },
    {
        id: 'quick-draw-combat', 
        name: 'Quick Draw',
        category: 'Combat',
        description: [
            "You draw two cards when spending a Benny for an additional Action Card at the beginning of a round. You may choose your final Action Card from any of your available choices, including additional draws from Level Headed, Quick, etc.",
            "You also add +2 to Athletics rolls made to interrupt others’ actions (including resisting being interrupted)."
        ],
        requirements: { rank: 'Novice', attributes: 'Agility d8+' },
        image: placeholderImage
    },
    {
        id: 'ramming-speed',
        name: 'Ramming Speed',
        category: 'Combat', 
        description: ["When all else fails, a vehicle can be used as a weapon within reason. The hero receives a +2 bonus to perform a Ram maneuver. In addition, the vehicle takes only half damage from ramming attacks it delivers."],
        requirements: { rank: 'Seasoned', skills: 'Boating d8+ or Driving d8+ or Piloting d8+' },
        image: placeholderImage
    },
    {
        id: 'rapid-reload',
        name: 'Rapid Reload',
        category: 'Combat',
        description: ["Reloading a black powder weapon takes a great deal of time. This character is well versed in the many steps needed to prepare one, and can reload in record time. In the hands of this character, black powder firearms have Reload 1. This Edge does not affect artillery pieces, which require an entire team of master gunners and assistants."],
        requirements: { rank: 'Novice', attributes: 'Agility d8+', skills: 'Shooting d6+' },
        image: placeholderImage
    },
    {
        id: 'sensitive-marksman',
        name: 'Sensitive Marksman',
        category: 'Combat', // Or Professional
        description: ["Your character feels an air weapon like nobody else and is capable of determining the condition of a black powder heating by sound. When there is a malfunction with a black powder weapon, ignore it, if you draw a Ten or higher when you try to define the type of malfunction."],
        requirements: { rank: 'Novice', skills: 'Repair d6+, Shooting d6+' },
        image: placeholderImage
    },
    {
        id: 'street-shooter',
        name: 'Street Shooter',
        category: 'Combat',
        description: ["In Illuvia, gunpowder are common. Your character has mastery of the favorite weapon of street bandits and when he shoot a flintlock pistol he can roll the damage twice and use the highest number."],
        requirements: { rank: 'Novice', skills: 'Shooting d6+' },
        image: placeholderImage
    },
    {
        id: 'tiger-hunter',
        name: 'Tiger Hunter',
        category: 'Combat',
        description: ["Black powder weapon might soon be replaced by clockwork weapons in the future, but the familiarity of black powder weapon made it easier to handle for some experienced user, just like your character who knows that in an experienced hand a flintlock can be very dangerous: the most important thing is to take aim properly. He gets +2 to Shooting rolls when he uses a black powder weapon."],
        requirements: { rank: 'Veteran', skills: 'Shooting d8+', otherEdges: 'Pigeon Hunter' },
        image: placeholderImage
    },
    {
        id: 'tripping-strike',
        name: 'Tripping Strike',
        category: 'Combat',
        description: ["The force of this brute's blows brings opponents to their knees. A target Shaken or Wounded by this warrior's attack is also knocked prone."],
        requirements: { rank: 'Seasoned', skills: 'Fighting d8+' },
        image: placeholderImage
    },

    // --- LEADERSHIP EDGES ---
    {
        id: 'naval-board-em',
        name: 'Naval: Board ‘Em!',
        category: 'Naval', // Or Leadership
        description: ["The character is a master at judging when to launch grapples against enemy vessels. When he leads the boarding party group Athletics rolls to grapple an enemy vessel receive a +2 bonus."],
        requirements: { rank: 'Seasoned', otherEdges: 'Command', skills: 'Athletics d8+' }, // Assuming Command is an Edge
        image: placeholderImage
    },
    {
        id: 'team-up',
        name: 'Team Up!',
        category: 'Leadership',
        description: ["This tactical master makes his allies more efficient. Once per turn, he may choose a character in Command Range to take an additional limited action or limited free action on their next turn. This doesn't increase the number of actions a character can take."],
        requirements: { rank: 'Veteran', attributes: 'Smarts d8+', otherEdges: 'Command, Natural Leader' }, // Assuming these are Edges
        image: placeholderImage
    },

    // --- POWER EDGES ---
    {
        id: 'animalist',
        name: 'Animalist',
        category: 'Power',
        description: [
            "The hero may ignore 2 points of penalties (including Multi-Action and Shorting) to activate powers that affect, summon, or transform into animals.",
            "Moreover, the base Duration of shape change and animal weapon are increased to 5 minutes (the Trapping must remain related to animals)."
        ],
        requirements: { rank: 'Novice', attributes: 'Spirit d6+', other: 'Arcane Background (any)' },
        image: placeholderImage
    },
    {
        id: 'bouncing-spells',
        name: 'Bouncing Spells',
        category: 'Power',
        description: ["Whenever a character with this Edge successfully casts a power at a single target and the enemy resists it or is Immune to it, they may spend two Power Points to choose another target in Range instead. This Edge can only be used once per casting."],
        requirements: { rank: 'Veteran', other: 'Arcane Background (Any)' },
        image: placeholderImage
    },
    {
        id: 'exceptional-artificer',
        name: 'Exceptional Artificer',
        category: 'Power', // Or Professional
        description: ["When crafting a magic item, a success on an Repair roll earns 2,000 gp worth of progress towards its completion instead of 1,000 gp. A Critical Failure results in only a loss of 250 gp worth of progress."],
        requirements: { rank: 'Veteran', otherEdges: 'Artificer', skills: 'Repair d10+' },
        image: placeholderImage
    },
    {
        id: 'flexible-caster',
        name: 'Flexible Caster',
        category: 'Power',
        description: [
            "The hero has mastered how to modify his powers to adapt to various situations.",
            "Whenever the hero activates a power with at least one Power Modifier selected (with a cost of 1 or higher), the total cost of the power is reduced by 1."
        ],
        requirements: { rank: 'Seasoned', other: 'Arcane Background (any)', skills: 'arcane skill d8+' },
        image: placeholderImage
    },
    {
        id: 'improved-flexible-caster',
        name: 'Improved Flexible Caster',
        category: 'Power',
        description: ["Same as Flexible Caster, but total cost of the power is reduced by 2."],
        requirements: { rank: 'Veteran', otherEdges: 'Flexible Caster', other: 'Arcane Background (any)', skills: 'arcane skill d10+' },
        image: placeholderImage
    },
    {
        id: 'master-artificer',
        name: 'Master Artificer',
        category: 'Power', // Or Professional
        description: ["The artificer gains 1000 progress for each success and raise on his Repair roll (rather than being limited to 2000 total progress per roll)."],
        requirements: { rank: 'Heroic', otherEdges: 'Exceptional Artificer', skills: 'Repair d10+' }, // Assuming d10+ was a typo for d12+ or similar high skill
        image: placeholderImage
    },

    // --- PROFESSIONAL EDGES ---
    {
        id: 'card-sharp',
        name: 'Card Sharp',
        category: 'Professional',
        description: [
            "Your hero has a knack for odds, wagers, and when to call a bluff. He never feels more at home than when he’s shuffling cards, tossing dice, or calculating the chances of some wager.",
            "Your character gets one free reroll when making a Gambling roll."
        ],
        requirements: { rank: 'Novice', skills: 'Gambling d6+' },
        image: placeholderImage
    },
    {
        id: 'clockwork-master',
        name: 'Clockwork Master',
        category: 'Professional',
        description: ["Your character has mastered work with clockwork mechanisms and is able to predict any breakdown by a sound of gear's work. If there is a malfunction when you work with a clockwork mechanism the character can perform a Smarts check, in a case of success the malfunction is prevented."],
        requirements: { rank: 'Veteran', attributes: 'Smarts d8+', skills: 'Repair d8+' },
        image: placeholderImage
    },
    {
        id: 'explorer',
        name: 'Explorer',
        category: 'Professional',
        description: ["An explorer is an expert at surviving and exploring the wilderness. He gains +2 on Science rolls when applied to topics regarding surviving the wilderness, also roll +2 Survival and Vigor when venturing through the wilderness."],
        requirements: { attributes: 'Agility d6+, Smarts d6+', skills: 'Science d6+, Survival d6+', rank: 'Novice' }, // Added Novice as implied
        image: placeholderImage
    },
    {
        id: 'guts',
        name: 'Guts',
        category: 'Professional', // Often Background or General, but can fit here
        description: ["A hero with this Edge has learned to steel himself against the horrors that stalk Illuvia. He gets a free reroll when making Fear checks."],
        requirements: { rank: 'Novice', attributes: 'Spirit d6+' },
        image: placeholderImage
    },
    {
        id: 'medic',
        name: 'Medic',
        category: 'Professional',
        description: ["The character has received a training as a medic. They gain a free reroll made to treat a Wound and supporting allies who is bleeding out."],
        requirements: { rank: 'Novice', attributes: 'Smarts d6+', skills: 'Healing d6+' },
        image: placeholderImage
    },
    {
        id: 'miner',
        name: 'Miner',
        category: 'Professional',
        description: [
            "Being a miner involves being able to identify and locate precious metals in forbidding environments, and successfully mining or taking them out and transporting them back to civilization. People who choose this life face hardships but the chance of great rewards.",
            "Most miners have to have a scientific background in order to figure out how to identify and obtain these precious elements.",
            "Miners gain a +2 bonus to Science and Survival rolls involved when searching for, identifying, locating, and mining minerals or precious elements. They also get a +2 bonus when selling these minerals back in civilization."
        ],
        requirements: { rank: 'Novice', attributes: 'Spirit d6+', skills: 'Science d6+, Survival d6+' },
        image: placeholderImage
    },
    {
		id: 'naval-ships-carpenter',
		name: 'Naval: Ship’s Carpenter',
		category: 'Naval', // Or Professional
		description: [
            "The character may use his knowledge of carpentry to repair damage to a ship without taking it to a dry dock.",
            "Repairing each wound requires a successful Repair roll, takes 1d4 days, and requires a half cargo space worth of timber per wound. With a failure the time and materials are ruined. With a raise, the time is halved. A number of crew equal to the ship’s base Toughness are required.",
            "Time can be halved with double the crew, or time is doubled every time that number is halved.",
            "Critical wounds require a successful Repair (–2) roll and take 1d6 days to fix."
        ],
		requirements: { rank: 'Seasoned', attributes: 'Smarts d8+', skills: 'Boating d6+, Repair d8+' },
        image: placeholderImage
	},
    {
        id: 'salvager',
        name: 'Salvager',
        category: 'Professional',
        description: [
            "The best friend of the would-be inventor, this Edge allows you to double the value of “spare parts” you can salvage from an item.",
            "In addition, it allows you to sell the spare parts on the market for at least half the value."
        ],
        requirements: { rank: 'Novice', attributes: 'Smarts d6+', skills: 'Repair d6+' },
        image: placeholderImage
    },
    {
        id: 'scoundrel',
        name: 'Scoundrel',
        category: 'Professional', // Or Social
        description: ["The hero is skilled in dealing with people on the edge of the law, getting the info he needs. He has +2 to Persuasion, Research and Notice rolls when looking for information in shady places or dealing with unsavory people."],
        requirements: { rank: 'Novice', attributes: 'Smarts d6+' },
        image: placeholderImage
    },
    {
        id: 'surgeon',
        name: 'Surgeon',
        category: 'Professional',
        description: ["The character receives a +2 to all Healing rolls made to assist characters."],
        requirements: { rank: 'Seasoned', attributes: 'Smarts d8+, Spirit d6+', skills: 'Healing d8+', otherEdges: 'Medic' },
        image: placeholderImage
    },
    {
        id: 'tradecraft',
        name: 'Tradecraft',
        category: 'Professional',
        description: [
            "This character has learned to navigate through the underworld of Illuvia.",
            "He receives +2 to skill rolls when related to: cryptography, interrogation, sabotage, social engineering, surveillance (including shadowing) and so on."
        ],
        requirements: { rank: 'Seasoned', attributes: 'Smarts d6+', skills: 'Notice d6+, Stealth d6+' },
        image: placeholderImage
    },
    {
        id: 'treasure-hunter',
        name: 'Treasure Hunter',
        category: 'Professional',
        description: [
            "This hero is an expert in exploring ancient ruins to retrieve precious artifacts and other valuables, so she knows how to avoid the terrible traps put in place to guard these treasures.",
            "The hero gains +2 to Notice rolls to spot traps, to Agility rolls to avoid them, and to rolls to disarm these dangerous mechanisms. In addition, she always knows how and where to sell her loot, obtaining better prices than others."
        ],
        requirements: { rank: 'Novice', attributes: 'Agility d6+, Smarts d6+', skills: 'Notice d6+, Lockpicking d6+' },
        image: placeholderImage
    },

    // --- SOCIAL EDGES ---
    {
        id: 'diplomat',
        name: 'Diplomat',
        category: 'Social',
        description: ["Diplomats are experts at dealing with people, understanding their needs, and getting what they want. They receive +2 to any Persuasion rolls, and also +2 to Notice rolls to read people’s body language (detecting if the person is lying, telling the truth, anxious, etc.)."],
        requirements: { rank: 'Seasoned', attributes: 'Smarts d6+, Spirit d8+', skills: 'Notice d6+, Persuasion d8+' },
        image: placeholderImage
    },
    {
        id: 'swift-support',
        name: 'Swift Support',
        category: 'Social', // Could also be Leadership or Combat depending on interpretation
        description: ["This stalwart champion is ready to assist his allies at a moment's notice. If the hero's Action Card is a face card or Joker, he may Support an ally as a limited free action."],
        requirements: { rank: 'Seasoned', attributes: 'Smarts d8+' },
        image: placeholderImage
    },

    // --- WEIRD EDGES ---
    {
        id: 'grit',
        name: 'Grit',
        category: 'Weird', // Or Background/General
        description: ["Through perseverance and maybe a little insanity, this hardcase reduces penalties to the Fear check by 2. This stacks with Brave."],
        requirements: { rank: 'Veteran', attributes: 'Spirit d8+', otherEdges: 'Guts' },
        image: placeholderImage
    },
    {
		id: 'naval-storm-chaser',
		name: 'Naval: Storm Chaser',
		category: 'Naval', // Or Weird
		description: [
            "When the weather is at its worst the character is at his best, seeming to read the storm like he would a book. Such characters are respected for their skill but feared for their love of a good storm.",
            "The character receives +1 to all Boating rolls made during a storm. In addition, the character may draw two cards each round during a storm and keep the best card. If the character has the Wind Sense Edge as well he draws three cards total.",
            "Only applies to the character if he is the captain of the ship."
        ],
		requirements: { rank: 'Novice', skills: 'Boating d8+' },
        image: placeholderImage
	},
    {
		id: 'naval-wind-sense',
		name: 'Naval: Wind Sense',
		category: 'Naval', // Or Weird
		description: [
            "The character has an almost supernatural knowledge of air and wind. He can sense changes in the weather and wind direction long before they actually happen.",
            "If the character is piloting a ship he gains +1 to Boating rolls during Chases, using his knowledge of the winds to outrun and catch prey.",
            "Also, the character may draw two cards each round during a storm and keeps the best. If the character has the Storm Chaser Edge as well he draws three cards."
        ],
		requirements: { rank: 'Novice', attributes: 'Smarts d8+', skills: 'Boating d8+' },
        image: placeholderImage
	},

    // --- LEGENDARY EDGES ---
    {
        id: 'fast-as-lightning',
        name: 'Fast As Lightning',
        category: 'Legendary',
        description: [
            "When your hero reaches for his shootin’ irons, folks rarely have time to blink, much less draw him down. Some say he’s the fastest gun in Illuvia.",
            "Your hero gets a fourth action. This increases the maximum Multi-Action penalty to −6 (which can be reduced by any Edges or abilities that do so, such as Two-Fisted or Two-Gun Kid)."
        ],
        requirements: { rank: 'Legendary', attributes: 'Agility d10+', otherEdges: 'Quick' },
        image: placeholderImage
    },
    {
        id: 'legendary-artificer',
        name: 'Legendary Artificer',
        category: 'Legendary', // Or Power/Professional
        description: ["The crafter has mastered the art of crafting magic items. The crafter may make an Repair roll after every three days rather than after each week to determine progress."],
        requirements: { rank: 'Legendary', otherEdges: 'Master Artificer', skills: 'Repair d12+' },
        image: placeholderImage
    },
    {
        id: 'true-grit',
        name: 'True Grit',
        category: 'Legendary', // Or Weird
        description: ["This grizzled veteran has seen things that’d make others’ eyes pop like they just saw a rattler in their bedroll. He ignores all penalties when making Fear checks, and if failed, gets one free reroll on the Fear Effects Table if he chooses."],
        requirements: { rank: 'Legendary', attributes: 'Spirit d10+', otherEdges: 'Grit' },
        image: placeholderImage
    }
];