// src/lib/components/data/hindrancesData.ts

export type HindranceType = 'Minor' | 'Major' | 'Minor/Major';

export interface Hindrance {
	id: string; // Unique identifier (e.g., 'bitter')
	name: string;
	type: HindranceType;
	description: string[]; // Array of paragraphs
	// Hindrances usually don't have "requirements" like Edges, but you could add a 'sourcebook' or 'notes' field if needed.
	image?: string; // Optional image for the card
}

// --- COLOR MAPPING FOR HINDRANCE TYPES ---
// Using Tailwind CSS classes
export const hindranceTypeColors: Record<HindranceType, { bg: string; text: string; border: string; shadowColor: string }> = {
    Minor:         { bg: 'bg-primary-950 dark:bg-primary-950',      text: 'text-primary-100',   border: 'border-primary-600 dark:border-primary-700', shadowColor: 'rgba(37, 99, 235, 0.7)' /* primary 600 */ },
    Major:         { bg: 'bg-secondary-500 dark:bg-secondary-600',  text: 'text-white', border: 'border-secondary-600 dark:border-secondary-700', shadowColor: 'rgba(234, 88, 12, 0.7)' /* secondary 600 */ },
    'Minor/Major': { bg: 'bg-tertiary-800 dark:bg-tertiary-800',     text: 'text-tertiary-100',   border: 'border-tertiary-600 dark:border-tertiary-700', shadowColor: 'rgba(13, 148, 136, 0.7)' /* tertiary 600 */ }
};

const placeholderImage = 'https://i.pinimg.com/1200x/0b/c6/4c/0bc64cd89ad567be76ae26ecf25d3295.jpg'; // Same placeholder as Edges for now

export const hindrancesData: Hindrance[] = [
    {
        id: 'bitter',
        name: 'Bitter',
        type: 'Minor/Major',
        description: [
            "You have been hurt repeatedly by those you trusted, and it has become difficult for you to accept help.",
            "Other people attempting to heal this character suffer a −2 penalty to their roll. This applies to both mundane and magical healing. This does not affect natural healing rolls. As a Major Hindrance the penalty goes up to -4."
        ],
        image: placeholderImage
    },
    {
        id: 'clockwork-creep',
        name: 'Clockwork Creep',
        type: 'Major',
        description: [
            "The character feels the need to replace parts of his body with mechanical substitutes as an aesthetic statement or a show of wealth.",
            "Will spend inordinate amounts of money (at least 50% of his earnings) on the design, development and production of particularly elaborate prosthetics. The character will collect a series of prosthetics, based on design, complexity and accessories. This obsession with mechanical limbs is considered in very poor taste among all levels of society."
        ],
        image: placeholderImage
    },
    {
        id: 'conspicuous',
        name: 'Conspicuous',
        type: 'Minor',
        description: [
            "For whatever reason, this character tends to attract attention and stick in peoples’ minds. They might fidget or stutter a lot, sweat excessively (smelling strongly of garlic), gesticulate wildly while speaking at high volume, wear way too much hairspray and perfume which they constantly reapplies, or have some other kind of exaggerated mannerisms or nervous tics which make them hard to miss.",
            "Something about this decidedly unique individual is exceptionally distinctive and memorable. Witnesses usually remember them and can describe them to the cops.",
            "They suffers a –2 penalty to Stertiaryth when trying to blend into a crowd, witnesses can quickly identify them, and they are easily picked out in a police lineup unless they are taken great care to cover their shtick."
        ],
        image: placeholderImage
    },
    {
        id: 'guilty-conscience',
        name: 'Guilty Conscience',
        type: 'Minor/Major',
        description: [
            "When this softy commits a crime, they are full of adrenaline and instinct kicks in. However, they are fully aware that what they’re doing is wrong after they has some time to reflect on it.",
            "As a Minor Hindrance, their conscience often gets the best of them, and in these instances, they feels compelled to right a wrong they previously committed or allowed to take place. It’s hard to let go of the past, and this character flaw of hers is going to catch up to you sooner or later.",
            "As a Major Hindrance, when they commits a particularly heinous act, the DM receives a Benny that he must use against them. This is limited to once per session."
        ],
        image: placeholderImage
    },
    {
        id: 'helpless',
        name: 'Helpless',
        type: 'Minor/Major',
        description: [
            "You once stood helpless as great harm befell a loved one, and that paralysis sometimes returns when an ally is in a dire position.",
            "As a Minor Hindrance, whenever this character sees an ally suffers a Wound, he is Distracted. As a Major Hindrance, the character is also Vulnerable."
        ],
        image: placeholderImage
    },
    {
        id: 'heavy-sleeper',
        name: 'Heavy Sleeper',
        type: 'Minor',
        description: [
            "A thunderstorm from Hell itself doesn’t wake this Dozing Doolie. Once he drops off, he must make a Notice roll (−4) to wake up. He also suffers a −4 penalty to Vigor rolls made to stay awake."
        ],
        image: placeholderImage
    },
    {
        id: 'loner',
        name: 'Loner',
        type: 'Major',
        description: [
            "You’re that one cool guy with a facial tattoo who plays by his own rules and lives his own life his own way. Apart from being anti-social, you are not affected by any of the following:",
            "• Leadership and Social Edges used by other PCs and friendly NPCs to help you. You can still be Distracted by someone with the Retort Edge, for example.",
            "• You don’t receive the Gang Up bonus.",
            "Luckily, after spending some time in the company of the others, you stop being a massive… pain. You can, with the GM discretion remove one of the effect once you reach a new rank, making it a Minor Hindrance."
        ],
        image: placeholderImage
    },
    {
        id: 'lyin-eyes',
        name: "Lyin' Eyes",
        type: 'Minor',
        description: [
            "Lies just don’t come easy to this hero. That sounds all good and noble, but often causes problems when dealing with more nefarious types. A hero with this Hindrance suffers a −1 penalty to all Intimidation and Persuasion rolls where lies—even little ones— must be told.",
            "Worse, if your hero plans to make money playing poker, the penalty also applies to bluffing. That’s −1 to your Gambling rolls in a poker or faro game as well."
        ],
        image: placeholderImage
    },
    {
        id: 'meticulous',
        name: 'Meticulous',
        type: 'Minor',
        description: [
            "You plan and prepare everything in detail, and aren’t good at improvising when things don’t go as planned.",
            "This character suffers −4 penalty on untrained skill rolls instead of the usual −2."
        ],
        image: placeholderImage
    },
    {
        id: 'patient-of-bedlam', // Corrected typo from Bediam
        name: 'Patient of Bedlam',
        type: 'Major',
        description: [
            "In the past your character was in a mental hospital. He may have come there on his own, suffering from some sort of mental disorder, or he may have been sent there by relatives.",
            "Depending on the circumstances under which he was committed, the character could very well have had no mental illness. The time spent within the walls of this institution did not have a positive impact on the character. He receives -2 to Persuasion and -2 to all Spirit rolls."
        ],
        image: placeholderImage
    },
    {
        id: 'self-taught',
        name: 'Self-Taught',
        type: 'Minor/Major',
        description: [
            "The character learned all he knows from frequent visits to the local library, or from chatting up to gurus.",
            "All his knowledge-based rolls are done at -1, -2 at Major (excluded Common Knowledge rolls). This Hindrance can be taken only if a character has at least d6 in any one knowledge-based Skill."
        ],
        image: placeholderImage
    },
    {
        id: 'technophobia',
        name: 'Technophobia',
        type: 'Major',
        description: [
            "Your character is terrified of new technologies. A simple trip on a clockwork tram can be a tremendous stress for him. In order to use a clockwork or arcane device the character must perform a successful Spirit check. If the Game Master decides, you may need to make this check if your character is in the same room with a large clockwork machinery.",
            "If your character fights with an opponent who uses arcane or clockwork weapons, you should also perform a Spirit check. If unsuccessful, your character is Shaken and must perform a Vigor check to overcome the effects of being Shaken. If this Vigor check is failed, he cannot overcome his fear and succumbs to intense trembling, resulting in the character suffering Fatigue until the end of the scene."
        ],
        image: placeholderImage
    },
    {
        id: 'tenderfoot',
        name: 'Tenderfoot',
        type: 'Major',
        description: [
            "Every little ol’ cut and scrape makes your cowpoke cry for mama. As long as he has at least one Wound, he suffers an additional −1 penalty to all his actions (so a hero with two Wounds would suffer a −3, for example, although −3 is still the maximum).",
            "A hero with this Hindrance can’t take the All Riled Up Edge."
        ],
        image: placeholderImage
    },
    {
        id: 'the-usual-suspect',
        name: 'The Usual Suspect',
        type: 'Major',
        description: [
            "This scoundrel’s reputation as a criminal precedes him and he is well known to law enforcement. He is regularly the subject of harassment and surveillance from law enforcement.",
            "When a crime is committed in the city, the cops show up and have questions for him. It doesn’t matter whether he had anything to do with the crime or not."
        ],
        image: placeholderImage
    },
    {
        id: 'trigger-happy',
        name: 'Trigger Happy',
        type: 'Minor',
        description: [
            "This violent individual has a well-earned reputation for shooting first and asking questions later. They receives a –1 penalty to Persuasion, except in situations where the threat of violence is helpful.",
            "If they attempts to intimidate someone by waving a gun at them and rolls a natural 1 on the Trait die the gun \"accidentally\" goes off; make an immediate Shooting attack against the target as a free action."
        ],
        image: placeholderImage
    },
    {
        id: 'unruly-relation',
        name: 'Unruly Relation',
        type: 'Minor/Major',
        description: [
            "One of this character’s relatives or friends has a knack for getting themselves in trouble, and this often reflects poorly on him. Perhaps he has a sibling with a drug habit, a teenage son or daughter who shoplifts for attention, an alcoholic uncle with a predisposition for violence, or a business associate that keeps bringing heat on him while he tries to maintain a pristine reputation or fly under the radar.",
            "As a Minor Hindrance the relative is usually just an inconvenience and embarrassment, while as a Major Hindrance, their actions cause frequent problems and risks seriously jeopardizing his career. Should the relative meet a sudden and untimely end, replace Unruly Relation with another appropriate Hindrance."
        ],
        image: placeholderImage
    },
    {
        id: 'upstanding-citizen',
        name: 'Upstanding Citizen',
        type: 'Major',
        description: [
            "This unlucky soul once lived a healthy life, but through bad luck or a series of bad decisions, they ended up on the wrong side of the law. They aren’t suited to this life.",
            "When it comes to committing crimes, they do all the wrong things. The only way out now is in a casket.",
            "This character suffers –2 to any Trait rolls while committing and/or assisting a crime. What counts a crime is determined by the DM."
        ],
        image: placeholderImage
    },
    {
        id: 'wisecracker',
        name: 'Wisecracker',
        type: 'Minor',
        description: [
            "This clown is the joker of the group which makes him a likable member of the Crew, but he lacks a bit of tact. He has this annoying habit of cracking a joke whenever a Crew member tries to scare or insult someone.",
            "His joke has the unfortunate effect of dissipating the tension. As a result, any time one of his Crew members initiates a Test based on Intimidation or Taunt and the jokester is able to understand the conversation, his unfortunate need to comment causes them a –2 penalty to their roll."
        ],
        image: placeholderImage
    }
];