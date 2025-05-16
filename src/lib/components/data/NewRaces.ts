import { Cog, Cat, Skull, Bird, Rabbit, Waves } from '@lucide/svelte'; 

// For Lucide components
export type LucideIconConstructor = typeof Cog;

// For Iconify (string names)
type IconifyIconName = string;

// Union type for the icon property
export type IconType = LucideIconConstructor | IconifyIconName;

export interface AncestryFeature {
    name: string;
    description: string;
    points?: number;
}

export interface NewRace {
    id: string;
    name: string;
    icon: IconType; 
    iconType: 'lucide' | 'iconify'; 
    image: string;
    tagline: string;
    description: string[];
    features: AncestryFeature[];
    backgroundPosition?: string;
    flipImage?: 'horizontal' | 'vertical';
}

export const newRacesData: NewRace[] = [
    {
        id: 'automata',
        name: 'Automata',
        icon: Cog,
        iconType: 'lucide',
        image: 'https://i.pinimg.com/736x/65/ba/7a/65ba7a660db22c1c2a301cfb001a5522.jpg',
        tagline: 'Cogs in a grand design, seeking their own purpose.',
        description: [
            "God created mankind in their own image, they say. And so, the Timesmith, aspiring to godhood, forged the Automata. Not truly constructs, yet not fully living, they are beings of metal and magic, capable of expression, learning, and experiencing the full spectrum of 'life' without needing to eat, breathe, or sleep.",
            "Created as adults, they don't age physically but can experience the joys of 'childhood' and the existential dread of a 'mid-life crisis'. Mysteriously, they often appear as if from nowhere.",
            "Despite their direct creation by the Timesmith, Automata possess free will. They blend into Illuvian society in diverse roles: soldiers, entertainers, doctors, scientists. Unlike Marionettes, they lack an artificial soul or 'core'."
        ],
        features: [
            { name: 'Armor (+2)', description: 'Automata are made of metal. They have a natural +2 to their Armor value.' },
            { name: 'Clockwork Vulnerability (-2)', description: 'Movement relies on intricate, magically enhanced mechanical parts. On a Critical Failure resisting a Test, an Automaton is Stunned (not Shaken), standing as a lifeless statue. They must spend one hour every 2 days on maintenance (winding/cleaning gears) or suffer a level of Fatigue.' },
            { name: 'Construct (+3)', description: '+2 to recover from Shaken; ignore 1 point of Wound penalties; don’t breathe; immune to disease and poison. Wounds are mended with the Repair skill (1 hour/Wound level, ignores Golden Hour).' },
            { name: 'Supernatural Science Oddity (-1)', description: 'The only Arcane Background available is Weird Science. They cannot benefit from organic supernatural ingredients (potions, tinctures). Their unnatural appearance often causes unease, granting the Outsider (Minor) Hindrance.' }
        ],
        backgroundPosition: 'center 15%',
    },
    {
        id: 'catfolk',
        name: 'Catfolk',
        icon: Cat,
        iconType: 'lucide',
        image: 'https://i.pinimg.com/736x/3b/68/09/3b68094568a2edcbcd9e6591636ad7d3.jpg',
        tagline: 'Curious explorers with a feline grace and nine lives of luck.',
        description: [
            "Natural explorers, Catfolk are driven by an insatiable curiosity, whether it's for distant lands or personal growth. Their culture champions inquisitiveness and individuality.",
            "Often seen by outsiders as quirky extroverts, Catfolk are fiercely loyal to their chosen 'tribe' – be it family or friends. They are generous and enjoy being the center of attention, but not at the expense of their companions.",
            "Lithe and slender, they possess feline ears, a sleek tail, and a coat of soft fur. Their fingers end in small, retractable claws, sometimes honed into effective natural weapons. Most Catfolk hail from the Triburones Archipelago, a nation of sailors and privateers."
        ],
        features: [
            { name: 'Agile (+1)', description: 'Start with Agility d6 instead of d4. Maximum Agility becomes d12+1.' },
            { name: 'Can’t Swim Well (-1)', description: 'They shun water and are poor swimmers. Suffer -2 to Athletics (swimming) rolls; each inch of movement in water costs 3" of Pace.' },
            { name: 'Cat’s Luck (+1)', description: 'Gain a free reroll on failed Evasion rolls (rolls to avoid area effect attacks or similar dangers where Agility is key).' },
            { name: 'Carnivorous Diet (-1)', description: 'Primarily carnivores. Can eat vegetable matter to survive but gain one Fatigue level if they go a day without meat (max one level, recovers after eating ~0.5lb of meat). They enjoy raw meat but are wary of parasites.' },
            { name: 'Low-Light Vision (+1)', description: 'Ignore penalties for Dim and Dark Illumination.' },
            { name: 'Natural Weapons (Claws) (+1)', description: 'Retractable claws deal Str+d4 damage. If an Edge like Martial Artist or Brawler is gained, these claws also gain AP 1.' }
        ],
        backgroundPosition: 'center 20%'
    },
     {
        id: 'canides',
        name: 'Canides',
        icon: 'iconoir:wolf', 
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/40/ea/18/40ea18f96b9045d12caee8834e9f7acd.jpg',
        tagline: 'Loyal hunters with an unwavering sense of community.',
        description: [
            "Coming out from the laboratory of Pavlovyshka, they wander the realm of Illuvia after the collapse of the infamous bioengineering lab. Canides are humanoid wild canines; wolves, coyotes, jackals, dholes, and wild dogs.",
            "They are natural born hunters and loyal to the community they find themselves in, ones that they can call family, usually but not necessarily fellow Canides. They mainly live in Heverius Continent, inhabiting cities and jungles while blending in with others.",
            "Canides like to keep things low profile, in order, and harmonious. They usually join the city watch, detective agencies, become law-keepers, and sometimes vigilantes. It is rare for a Canides to indulge in criminal activity."
        ],
        features: [
            { name: 'Darkvision (+1)', description: "Canides can see in dim light within 60 feet of them as if it were bright light, and in darkness as if it were dim light. They can't discern color in darkness, only shades of gray. They ignore illumination penalties." },
            { name: 'Keen Nose (+2)', description: 'Canides have an enhanced sense of smell. They start with d6 in Notice and gain +2 to Trait rolls that involve smell.' },
            { name: 'Natural Weapon (Bite) (+1)', description: 'Canides have sharp teeth that make a powerful weapon; as such, they can use their bite as a natural weapon. When they hit with it, the strike deals Strength + d4.' },
            { name: 'Vow (Major) (-2)', description: 'Canides are known to be extremely loyal, either to a cause, a code, a clan, an organization, or a particular person, sometimes to a fault. Gain Vow (Major) Hindrance.' }
        ],
        backgroundPosition: 'center 25%'
    },
    {
        id: 'cephalios',
        name: 'Cephalios',
        icon: `hugeicons:octopus`, 
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/c5/cf/ad/c5cfadb1f4bfbe328ed3eb25b982ede5.jpg',
        tagline: 'Sea dwellers with mysterious origins and arcane power.',
        description: [
            "The origin of Cephalios is up for much debate, though they claim to be native of Triburones Archipelago, which contradicts what the Triton, Sea Elf, and Tabaxi claims. Cephalios only showed themselves a couple of decades after the Triton, Sea Elf, and Tabaxi settled there, claiming they only resurfaced because the 'outsiders' were too noisy.",
            "The Cephalios and the inhabitants of the Archipelago fought a 20-year war for territorial control until finally finding common ground in their love of the sea and a common enemy: Lunaveira. They formed an alliance in the name of conquest of the sea and treasure hunting.",
            "Despite their good relationship, the Archipelago's inhabitants, and even the rest of Illuvia, can't help but shake off the feeling that something sinister is hidden beneath them. People say they reek of the Depths and speculate that they are creatures that came crawling out from the cursed Mondischt Depths, with a secret agenda of spreading the influence of the infamous Black Trench into Illuvia."
        ],
        features: [
            { name: 'Aquatic (+1)', description: 'Cannot drown, may speak, hear, and move full Pace when swimming.' },
            { name: 'Dehydration (-1)', description: "Cephalios must immerse themselves in water (salt or fresh) at least one hour out of every 24 hours. Those who don't are automatically Fatigued each day until they are Incapacitated. The day after that, they perish. Each hour spent recovering in sea water removes a level of Fatigue suffered from Dehydration." },
            { name: 'Magical Affinity (+3)', description: 'Cephalios with Arcane Background have an additional 10 Power Points. Those without may take two other Edges instead.' },
            { name: 'Outsider (Minor) (-1)', description: 'Cephalios are strange and mysterious beings even among the people of Illuvia. They subtract 2 from Persuasion rolls when dealing with other races.' }
        ],
        backgroundPosition: 'center 15%'
    },
    {
        id: 'corves',
        name: 'Corves',
        icon: Bird, 
        iconType: 'lucide',
        image: 'https://i.pinimg.com/1200x/c8/b9/34/c8b9346a3d48a17005c6fe70e4bd6a4d.jpg',
        tagline: 'Cunning opportunists with a knack for acquisition.',
        description: [
            "The crow-like Corves, also known as 'Tengu,' are known as a race of scavengers and irrepressible thieves. Covetous creatures predominantly motivated by greed, they are vain and easily won over with flattery.",
            "Deceptive, duplicitous, and cunning, Corves seek circumstances in which they can take advantage of the situation, often at the expense of others, including their own kind. They can be highly competitive, but impulsive and rash. Some claim their behavior is innate, while others believe their selfish mannerisms are cultural and developed as a learned adaptation that has enabled their people to endure through centuries of oppression.",
            "Many Corves scavenged for survival, scraping for food in the shadows of cities or living as subsistence hunters and gatherers in the wild. Their descendants now struggle to find their place in contemporary society, often competing against negative stereotypes or driven to embrace them, relying on thievery and swordplay to get by in a harsh and unforging world.", // Corrected typo: unforgiving
            "With little at home to leave behind, many Corves turn to a life of adventure seeking fame, fortune, and glory. A common Corves belief portrays a life on the road as a series of experiences and trials that form a path to enlightenment. Some take this to mean a path of spiritual empowerment; others view it as a way to perfect their arts or swordsmanship."
        ],
        features: [
            { name: 'Agile (+1)', description: 'Corves starts with Agility score of d6.' },
            { name: 'Frail (-1)', description: 'Corves have −1 Toughness due to their hollow bones.' },
            { name: 'Glide (+1)', description: "Corves uses their wings to glide from high places, they can jump and glide from up to double their Pace without taking damage. (12')" },
            { name: 'Greedy (-1)', description: "Corves are known to be greedy, seeking only fame, fortune and glory in their adventures. Though, their greediness don't overcome their senses, most of the time." },
            { name: 'Natural Weapon (Beak) (+1)', description: 'The Corves can use their beak as natural weapon that deals Strength + d4 damage.' },
            { name: 'Sneaky (+1)', description: 'They moves like the wind, their footsteps almost non-existent. Corves starts with Stealth at d6' }
        ],
        backgroundPosition: 'center 20%'
    },
        {
        id: 'dhampir',
        name: 'Dhampir',
        icon: Skull,
        iconType: 'lucide',
        image: 'https://i.pinimg.com/1200x/3b/4c/c0/3b4cc0fafb29090944afa1bbea26d67c.jpg',
        tagline: 'Tragic beauty, torn between mortal life and vampiric legacy.',
        description: [
            "The half-living children of vampires and human mothers, Dhampirs are beings of profound tragedy and mystery. Their conception is often shrouded in secrecy, with few mothers surviving childbirth or willing to speak of it.",
            "While some speculate they result from mortal-vampire unions, others believe they form when a pregnant woman suffers a vampire's bite. They are mortal, yet possess an elven-like longevity. They cannot naturally reproduce their own kind; their offspring are always human.",
            "Tall, slender, and possessing an unearthly, statuesque beauty, their features are often unnerving versions of their human parent's. Many have a ghastly pallor, especially in sunlight. Though they can often pass for human, their grace is unnaturally fluid, and all possess elongated incisors – sharp enough to draw blood, fueling a subtle, instinctual desire for sanguinary indulgence, though it offers no physical sustenance.",
            "In Illuvia, Dhampirs live in secrecy, as vampires are believed extinct in this age of advanced technology. Many Dhampirs denounce their vampiric origins and seek to understand their own existence, becoming living proof of a bygone era of shadow."
        ],
        features: [
            { name: 'Agile (+1)', description: 'Start with Agility d6 instead of d4. Maximum Agility becomes d12+1.' },
            { name: 'Attractive (+2)', description: 'Possess an alluring, graceful, and charismatic presence. Gain +1 to Performance and Persuasion rolls if the target is attracted to their general type (gender, species, etc.).' },
            { name: 'Light-Blindness (-2)', description: 'Sensitive to bright sunlight. Suffer -2 to all Trait rolls involving sight in bright light. As a free action, can make a Vigor roll to negate this penalty for their next sight-based action.' },
            { name: 'Night Vision (+1)', description: 'Ignore all penalties for any level of Illumination, seeing perfectly even in pitch darkness.' }
        ],
        backgroundPosition: 'center 20%'
    },
    {
        id: 'drow',
        name: 'Drow',
        icon: 'fluent-emoji-high-contrast:person-elf', 
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/c1/91/e7/c191e7a8aa5bb8a35c1e55e2588c10f4.jpg',
        tagline: 'Children of darkness with poison in their veins.',
        description: [
            "Descended from an earlier subrace of dark-skinned elves, the drow were banished from the surface world. Now they have built their own civilization in the depths of Ennys Ennore. Drows live in a matriarchal society, led by the High Matriarch.",
            "Unlike other elves, the drows are more violent in nature, though it's not uncommon to see Drow that just want to live a peaceful life, away from the harshness of the underground. Their body can generate poison, a trait that even the drows themselves don't know how it came about.",
            "Also called the dark elves, the drow have black skin that resembles polished obsidian and stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for white) in shades of lilac, silver, pink, red, and blue. They tend to be smaller and thinner than most elves."
        ],
        features: [
            { name: 'Agile (+1)', description: 'Drows are graceful and agile. They start with a d6 in Agility instead of a d4. This increases maximum Agility to d12 + 1.' },
            { name: 'Dark Vision (+1)', description: 'Drow can see in the dark a short distance, ignoring all illumination penalties and up to 2 points of penalties from invisibility or similar powers within 10" (20 yards) distant.' },
            { name: 'Light-Blindness (-2)', description: 'The drow is sensitive to sunlight due to hundred of years living underground. When they are in bright light, they suffer -2 to all Trait roll that involves sight. As a free action, the player can choose to roll Vigor to remove the penalty for their next action involving sight.' },
            { name: 'Outsider (Minor) (-1)', description: 'The drow is not well-liked amongst the surfacer. They have a hard time to blend in. They suffer -2 to all Persuasion roll.' },
            { name: 'Venomous (+1)', description: 'Drow has the ability to naturally generate poison from their body. They gain Ancestral Background (Gifted) and Smite with Poison Trapping.' }
        ],
        backgroundPosition: 'center 25%'
    },
    {
        id: 'duergar',
        name: 'Duergar',
        icon: 'game-icons:dwarf-face', 
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/8a/ca/e1/8acae1e270f853267b680b4a36fbe1b5.jpg',
        tagline: 'Exiled dwarves, embracing the power of Chronyte.',
        description: [
            "Exiled from the fortress of Hin Boldahr, the Duergar lives their lives in the underground, where they contracted with the magic of Chronyte. For generations, they harness this energy to their advantage, building a society for themselves. They naturally hate the dwarves for their unjustified exile.",
            "Duergar still consider themselves the only true dwarves, and the rightful heirs of all beneath the world's surface. In appearance, duergar resemble gray-skinned dwarves, bearded but bald, with cold, lightless eyes.",
            "They favor taking captives in battle over wanton slaughter, save for surface dwarves, who are slain without hesitation. Duergar view life as ceaseless toil ended only by death. Though few can be described as anything other than vile and cruel, duergar still value honor and rarely break their word."
        ],
        features: [
            { name: 'Duergar Magic (+3)', description: 'Living near the Chronyte crystal make their affinity with magic to be strong. They are gifted caster (gain Arcane Background (Gifted)) and have growth and invisibility as a starting power.' },
            { name: 'Light-Blindness (-2)', description: 'The duergar is sensitive to sunlight due to hundred of years living underground. When they are in bright light, they suffer -2 to all Trait roll that involves sight. As a free action, the player can choose to roll Vigor to remove the penalty for their next action involving sight.' },
            { name: 'Low-Light Vision (+1)', description: 'Duergar ignores penalties for Dim or Dark illumination (but not Pitch Darkness).' },
            { name: 'Racial Enemy (Dwarves) (-1)', description: 'Due to their exile, Duergar have a longtime vendetta against dwarves.' },
            { name: 'Reduced Pace (-1)', description: 'Duergar have reduced pace of -1, and running die of d4.' },
            { name: 'Tough (+2)', description: 'The Duergar are tough people, both physically and mentally due to living in harsh condition. They start with d6 Vigor and Toughness +1' }
        ],
        backgroundPosition: 'center 20%'
    },
    {
        id: 'essimia',
        name: 'Essimia',
        icon: 'emojione-monotone:gorilla', // Iconify string
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/98/7c/a9/987ca9b5de38bc07f14d0095f5f7036c.jpg',
        tagline: 'Born leaders with primate strength and human cunning.',
        description: [
            "One of many creatures from the depths of Pavlovyshka, and rare few that is deemed successful and is able to integrate to society after the raid of the infamous bio-engineering lab. Essima is a human-primate hybrid, possessing their strength, endurance and intelligence.", // Corrected typo: Essimia
            "They are known for their leadership through strength, discipline, and authoritative nature. Most Essimia don't like being a follower especially if the leader isn't from the same race as them. They value order, hierarchy, honor and strength in combat, be it physical or mental.",
            "Many Essimia are leaders of some sort of gangs or pirate crews. The less ambitious ones can be found leading establishments like taverns, inns, or fighting arenas. Others are content being followers preferably led by fellow Essimia, or becoming bodyguards and mercenaries with high payment."
        ],
        features: [
            { name: 'Apish Strength or Intellect (+3)', description: "Essimia are incredibly strong, starting with a d8 in Strength, increasing their maximum to d12 + 1. Or they can be incredibly Intelligent, making their starting attribute to be a d6 in Strength and Smarts, and their maximum attribute for both are d12 + 1." },
            { name: 'Big (-2)', description: "They cannot wear other races' armor or clothing. Food costs double listed price owing to their appetites, using equipment that is designed for smaller creatures give a -2 penalty to their rolls." },
            { name: 'Outsider (Minor) (-1)', description: 'Due to their intimidating appearance, Essimia have Outsider as a Minor Hindrance when interacting with other races.' },
            { name: 'Size (+2)', description: 'Essimia begin at Size +2, standing seven to eight feet tall. Thus, they also gain Toughness +2.' }
        ],
        backgroundPosition: 'center 20%'
    },
        {
        id: 'half-giant',
        name: 'Half-Giant (Goliath)',
        icon: 'game-icons:giant', // Iconify: placeholder for giant/large human
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/bd/d1/3e/bdd13e8bdc3d0359f16d4ed22e7dac91.jpg', // REPLACE WITH ACTUAL IMAGE
        tagline: 'Towering fey with tribal hearts and immense strength.',
        description: [
            "Standing over eight feet tall, Half-Giants, also known as 'Goliath,' are the largest of the more common fey races. Their skin ranges from nearly black to deep tan, with black hair and eyes of blue, green, or sometimes striking red.",
            "They often wear minimal tribal clothing in social settings, proud of their physical prowess, but prefer heavy armor in combat. Worship involves totem poles, believing depictions of power please the gods and protect their tribe.",
            "Most are neutral or chaotic good, driven by wanderlust, a desire to learn, or religious conviction to make the world safer, rarely by greed."
        ],
        features: [
            { name: 'Big (-2)', description: 'Subtract 2 when using equipment for smaller beings; cannot wear standard humanoid armor/clothing. Equipment, food, and clothing cost double.' },
            { name: 'Boneheaded (-1)', description: 'Relatively simple thinkers. Smarts rolls are made at −1.' },
            { name: 'Clueless (-2)', description: 'Reduce Common Knowledge and Notice rolls by one.' },
            { name: 'Naturally Competitive (-1)', description: 'Tendency to make a competition out of everything, always needing to prove something.' },
            { name: 'Outsider (Minor) (-1)', description: 'Intimidating appearance grants the Outsider (Minor) Hindrance with other races.' },
            { name: 'Size +3', description: "Towering at around 10’ tall, adding +3 to their Toughness." },
            { name: 'Very Strong (+2)', description: 'Start with Strength d8, maximum Strength d12+2.' },
            { name: 'Very Tough (+2)', description: 'Start with Vigor d8, maximum Vigor d12+2.' }
        ],
        backgroundPosition: 'center 20%' // Adjust as needed
    },
    {
        id: 'harelings',
        name: 'Harelings',
        icon: Rabbit, // Iconify
        iconType: 'lucide',
        image: 'https://i.pinimg.com/1200x/2b/2a/ee/2b2aeeb7752fb1ddda99df100deeb3a2.jpg', // REPLACE
        tagline: 'Witty, nimble performers with a spring in their step.',
        description: [
            "Another creation from Pavlovyshka, Harelings are hare-human hybrids known for their charisma. They are humorous, witty, cunning, persuasive, and sometimes deceptive—joyous performers who are surprisingly capable combatants.",
            "Bipedal with long feet and fur in various colors, they possess keen senses, powerful legs, boundless energy, and embody the spirit of freedom and travel.",
            "Many are performers, storytellers, or swindlers. Others enlist as scouts or spotters in military, mercenary, or pirate crews, fueled by their love for adventure and thrill-seeking. They are social creatures who love sharing grand tales."
        ],
        features: [
            { name: 'Burrow (+1)', description: 'Can burrow into loose earth at half normal Pace (cannot run). Can surprise opponents (opposed Stealth vs. Notice) for +2 attack/damage (+4 on a raise).' },
            { name: 'Frail (-1)', description: 'Toughness is reduced by -1.' },
            { name: 'Nimble Footwork (+2)', description: 'Start with Agility d6.' },
            { name: 'Size (-1)', description: 'Small creatures, reducing Size and Toughness by 1.' },
            { name: 'Social Creatures (+1)', description: 'Naturally good talkers. Gain +2 to Persuasion rolls.' }
        ],
        backgroundPosition: 'center 22%' // Adjust
    },
    {
        id: 'kobold',
        name: 'Kobold',
        icon: 'game-icons:lizardman', // Iconify: placeholder for small draconic/reptilian
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/29/d9/45/29d945db8603d25507fb38c0dd186bce.jpg', // REPLACE
        tagline: 'Small, scaly draconic beings, witty and resourceful.',
        description: [
            "Small, usually red-skinned and scaly, Kobolds display their draconic ancestry through the glint of their scales and their distinctive roars. Legends say they first emerged from Avandira near the lairs of the last Celestial Dragons, whom some still worship.",
            "Most Kobolds, however, have moved on from ancient dragon worship, focusing their energies on research and ingenuity. Their scale colors are typically rust, though some reflect chromatic or metallic dragon hues.",
            "A Kobold's cry can express a wide range of emotions, resonating with draconic power."
        ],
        features: [
            { name: 'Darkvision (+1)', description: 'Ignores illumination penalties and up to 2 points of penalties from invisibility/similar powers within 10" (20 yards).' },
            { name: 'Skilled (+2)', description: 'Survive through wits, creativity, and resourcefulness. Start with Common Knowledge d6 and gain 2 additional starting skill points.' },
            { name: 'Small (-1)', description: 'Small creatures, reducing Size and Toughness by 1.' },
            { name: 'Sneaky (+1)', description: 'Rely on stealth to survive. Start with Stealth d6.' },
            { name: 'Yellow (Major) (-2)', description: 'Meek creatures preferring traps and indirect combat. Suffer -2 to Fear checks and resisting Intimidation due to the Yellow (Major) Hindrance.' }
        ],
        backgroundPosition: 'center 22%' // Adjust
    },
    {
        id: 'marionette',
        name: 'Marionette',
        icon: 'mdi:robot-love-outline', 
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/f5/f7/84/f5f784770a559673dade021cadb4fc2c.jpg', // REPLACE
        tagline: 'Souls preserved in clockwork, forever bound to a performance.',
        description: [
            "Once simple puppets for entertainment, Marionettes evolved from leather and wood to intricate clockwork bodies housing preserved souls, typically human. Strings, once functional, are now often vestigial.",
            "Technological and arcane advancements allowed for voice modulation and eventually the insertion of recently deceased souls, granting sentience. This breakthrough repurposed them to preserve souls, who then continue the pursuits of their former lives.",
            "Marionettes retain most of the memories and personality of the soul within, be it an entertainer, soldier, or adventurer."
        ],
        features: [
            { name: 'Arcane Explosion (+1)', description: 'Due to unexplainable arcane magic at their core, gain Arcane Background (Gifted) as a starting Edge.' },
            { name: 'Can’t Swim (-1)', description: 'Lack buoyancy. Suffer -2 to Athletics (swimming) rolls, and each inch moved in water costs 3" of Pace.' },
            { name: 'Clockwork (-2)', description: 'Mechanical parts corrode. On a Critical Failure resisting a Test, become Stunned (not Shaken), standing lifeless. Must spend 1 hour every 2 days on maintenance or take Fatigue.' },
            { name: 'Construct (+3)', description: '+2 to recover from Shaken; ignore 1 Wound penalty; don’t breathe; immune to disease/poison. Wounds mended via Repair skill (1 hour/Wound, ignores Golden Hour).' },
            { name: 'Frail (-1)', description: 'Despite metal bodies, their structure and exposed core result in -1 Toughness.' },
            { name: 'Puppet Strings (+1)', description: 'Gain Elemental Manipulation power with a special ethereal strings gesture Trapping.' },
            { name: 'Size (-1)', description: 'Small, doll-like creatures (halfling-sized or smaller). Size and Toughness suffer a -1 penalty.' },
            { name: 'Performer (+2)', description: 'Innate ability for impressive performative acts. Gain +2 to Performance and Persuasion rolls.' }
        ],
        backgroundPosition: 'center 15%' // Adjust
    },
    {
        id: 'satyr',
        name: 'Satyr',
        icon: 'emojione-monotone:deer', // Iconify
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/f7/9a/25/f79a25e3d978686fe51047d0228e82e8.jpg', // REPLACE
        tagline: 'Joyful revelers from the Feywild, bringing merriment and resisting magic.',
        description: [
            "Originating from the Wyld Plains—a realm of pure emotion—Satyrs thrive on the energy of merriment. They resemble elves but have goatlike legs, cloven hooves, and ram or goat horns. Fey magic grants them innate abilities to perform, delight, and resist magical intrusions.",
            "They often wander to other planes, especially the Material Plane, to share the splendor of their home. Kind-hearted and peace-loving, their optimism can be contagious, though this is sometimes exploited.",
            "Satyrs on adventures typically seek new knowledge, cultures, or exciting people beyond the Wyld Plains."
        ],
        features: [
            { name: 'Naive (Minor) (-1)', description: 'Wide-eyed optimism can lead to bad judgment; often gives untrustworthy types the benefit of the doubt.' },
            { name: 'Natural Weapon (Horn) (+1)', description: 'Bulky horns deal Strength +d4 damage.' },
            { name: 'Pacifist (Minor) (-1)', description: 'Peace-loving; fights only in self-defense, preferring negotiation.' },
            { name: 'Reveler (+2)', description: 'Embodiment of revelry, naturally charming. Gain +2 to Persuasion and Performance rolls.' },
            { name: 'Toughness (+1)', description: 'Body covered with thick leather, granting +1 Toughness.' }
        ],
        backgroundPosition: 'center 22%' // Adjust
    },
    {
        id: 'tiefling',
        name: 'Tiefling',
        icon: 'game-icons:devil-mask', 
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/01/9c/b0/019cb0f3a3fc1a40296fe817d06f87b0.jpg', // REPLACE
        tagline: 'Fiendish scions, wrestling with heritage and choosing their own fate.',
        description: [
            "Simultaneously more and less than mortal, Tieflings are the offspring of humans and fiends. Their otherworldly blood often leads to them being shunned out of fear. Most never know their fiendish sire, the taint manifesting at birth or later in life.",
            "Despite their origins, Tieflings possess a human’s capacity for choice. While many embrace their dark heritage, others reject it. The power of their blood calls to fury and wrath, yet even the spawn of a succubus can become a saint.",
            "No two Tieflings look alike; their fiendish traits vary wildly—horns, tails, odd eyes, fangs, tiny wings, or even strange scents. These qualities often hearken to their specific fiendish ancestor, but the mix is unpredictable, ranging from oddly beautiful to utterly terrible."
        ],
        features: [
            { name: 'Conspicuous (Minor) (-1)', description: 'Varied appearances and unique fashion make individual Tieflings stand out, making them easier to identify.' },
            { name: 'Darkvision (+1)', description: 'Ignore illumination penalties up to 10” (20 yards).' },
            { name: 'Fiendish Sorcery (+2)', description: 'Gain the Arcane Background (Gifted) Edge and the Darkness power.' }
        ],
        backgroundPosition: 'center 25%' // Adjust
    },
    {
        id: 'undines',
        name: 'Undines (Sea Elf/Merfolk)',
        icon: Waves, 
        iconType: 'lucide',
        image: 'https://i.pinimg.com/736x/51/0c/09/510c09a41decd5ff713295d7ae911f36.jpg', // REPLACE
        tagline: 'Fluid beings of water, adaptable and community-focused.',
        description: [
            "Undines, also known as Sea Elves or Merfolk, have varied looks with distinctive colorations resembling bodies of deep water (pale blue, sea green, navy) or even sandy hues for those near desert oases. They might have fin-like ears, webbed hands/feet, coral growths, fish scales, tails, or bioluminescence.",
            "Some can change their skin to blend with humans or underwater terrain. Excellent swimmers, they breathe both air and water and often express deep connections to specific types of water. Their nature is fluid, with interests changing in phases; many seek structure to avoid stagnation.",
            "Undines adventure to defend their waters, learn of ancestors, or due to wanderlust/exile. Most settlements are on shores or floating ship-towns. They gravitate to neutrality, valuing community health over individuals."
        ],
        features: [
            { name: 'Aquatic (+1)', description: 'Cannot drown; may speak, hear, and move full Pace when swimming.' },
            { name: 'Dehydration (-1)', description: 'Must immerse in water (salt or fresh) at least 1 hour every 24 hours or become Fatigued daily until Incapacitated, then perish. Each hour in water removes a Fatigue level from Dehydration.' },
            { name: 'Water Affinity (+3)', description: 'Gain Arcane Background (Gifted) Edge and Elemental Manipulation (water trapping) & Bolt (ice trapping) powers.' },
            { name: 'Frail (-1)', description: 'Somewhat hollow bodies result in -1 Toughness.' },
            { name: 'Hesitant (Minor) (-1)', description: 'Harmonious and conservative, hesitates in stressful situations. Draw two Action Cards in combat, act on the lowest (Jokers used normally). Cannot take Level Headed or Quick Edges.' },
            { name: 'Elemental Resistance: Cold (+1)', description: 'Natural resistance to ice, cold, and water-based attacks. Toughness vs. such attacks and Trait rolls vs. those effects gain a +2 bonus.' }
        ],
        backgroundPosition: 'center 15%' // Adjust
    },
    {
        id: 'vulpess',
        name: 'Vulpess (Kitsune)',
        icon: 'game-icons:fox-head',
        iconType: 'iconify',
        image: 'https://i.pinimg.com/1200x/d7/9b/d1/d79bd1d40b298bbd31c74f9895584b82.jpg', // REPLACE
        tagline: 'Fox spirits in mortal guise, warning of a future imbalance.',
        description: [
            "Unlike Pavlovyshka creations, Vulpess are native to the Yuen continent, manifestations of the fox spirits there. Foreseeing nature's destruction by unchecked progress, their Goddess sent parts of herself as the Vulpess to blend with mortals and warn of this dark future.",
            "In her vision, trees and flowers yield to steel skyscrapers, fireflies and lanterns to cold neon, fresh air to smoke, and humans merge with machines, playing at godhood.",
            "In Yuen, they are known as 'Kitsune'."
        ],
        features: [
            { name: 'Curious (Major) (-2)', description: 'Driven to explore every mystery, often leading to trouble or new adventures.' },
            { name: 'Darkvision (+1)', description: 'Superior vision in dark/dim conditions (see in dim as bright, dark as dim, shades of gray) up to 60 feet. Ignore illumination penalties.' },
            { name: 'Natural Weapon (Bite, Fox Form) (+1)', description: 'In fox form, their bite deals Strength +d4 damage.' },
            { name: 'Vulpess Magic (+3)', description: 'Attuned to magic, learning illusion and shapeshifting to fox-form early. Gain Arcane Background (Gifted) Edge.' } // You might want to specify which powers they start with if AB(Gifted) implies choices. Usually it means they pick from a list or have specific starting powers. For now, it just grants the Edge.
        ],
        backgroundPosition: 'center 25%' // Adjust
    }
];