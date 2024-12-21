import { createContext, useContext } from "react"
import { Ability } from "@/utility/abilities"
import { Attack } from "@/utility/attacks"
import { signedNumber } from "@/utility/library/number"
import { Trait } from "@/utility/traits"
import { Size } from "@/utility/size"
import { Dice } from "@/utility/dice"
import { Item } from "@/utility/items"
export const character: Character = require('./emerryl.json')

export interface Character {
  playerName: string,
  characterName: string,
  mainClass: string,
  subclass: string,
  background: string,
  race: string,
  size: Size,
  movement: number,
  hitDice: Dice,
  level: number,
  proficiencyBonus: number,
  abilityScores: {
    [Ability.strength]: number,
    [Ability.dexterity]: number,
    [Ability.constitution]: number,
    [Ability.intelligence]: number,
    [Ability.wisdom]: number,
    [Ability.charisma]: number,
  },
  saves: {
    [Ability.strength]: boolean,
    [Ability.dexterity]: boolean,
    [Ability.constitution]: boolean,
    [Ability.intelligence]: boolean,
    [Ability.wisdom]: boolean,
    [Ability.charisma]: boolean,
  },
  skills: {
    [Ability.strength]: {
      Athletics: boolean,
    },
    [Ability.dexterity]: {
      Acrobatics: boolean,
      "Sleight of Hand": boolean,
      Stealth: boolean,
    },
    [Ability.constitution]: {},
    [Ability.intelligence]: {
      Arcana: boolean,
      History: boolean,
      Investigation: boolean,
      Nature: boolean,
      Religion: boolean,
    },
    [Ability.wisdom]: {
      "Animal Handling": boolean,
      Insight: boolean,
      Medicine: boolean,
      Perception: boolean,
      Survival: boolean,
    },
    [Ability.charisma]: {
      Deception: boolean,
      Intimidation: boolean,
      Performance: boolean,
      Persuasion: boolean,
    },
  },
  attacks: Attack[],
  traits: Trait[],
  items: Item[],
  proficiencies: string[],
  personality: string,
  ideals: string,
  bonds: string,
  flaws: string,
  armorModifier: Ability,
  baseArmor: number
}

// export const character: Character = {
//   playerName: 'Charles',
//   characterName: 'Feeblethorp',
//   mainClass: 'Fighter',
//   subclass: 'Psi Warrior',
//   background: 'Entertainer',
//   race: 'Forest Gnome',
//   size: Size.small,
//   hitDice: Dice.d10,
//   level: 5,
//   proficiencyBonus: 3,
//   abilityScores: {
//     [Ability.strength]: 12,
//     [Ability.dexterity]: 16,
//     [Ability.constitution]: 14,
//     [Ability.intelligence]: 16,
//     [Ability.wisdom]: 8,
//     [Ability.charisma]: 10,
//   },
//   saves: {
//     [Ability.strength]: true,
//     [Ability.dexterity]: false,
//     [Ability.constitution]: true,
//     [Ability.intelligence]: false,
//     [Ability.wisdom]: false,
//     [Ability.charisma]: false,
//   },
//   skills: {
//     [Ability.strength]: {
//       Athletics: true,
//     },
//     [Ability.dexterity]: {
//       Acrobatics: true,
//       "Sleight of Hand": false,
//       Stealth: false,
//     },
//     [Ability.constitution]: {},
//     [Ability.intelligence]: {
//       Arcana: false,
//       History: false,
//       Investigation: false,
//       Nature: false,
//       Religion: false,
//     },
//     [Ability.wisdom]: {
//       "Animal Handling": false,
//       Insight: false,
//       Medicine: false,
//       Perception: true,
//       Survival: false,
//     },
//     [Ability.charisma]: {
//       Deception: false,
//       Intimidation: false,
//       Performance: true,
//       Persuasion: false,
//     },
//   },
//   attacks: [
//     {
//       label: "Scimitar",
//       damageType: "Slashing",
//       modifier: Ability.dexterity,
//       onHit: (modifier) => `1d6${signedNumber.format(modifier)}`,
//       range: "Melee",
//     },
//     {
//       label: "Dagger x 6",
//       damageType: "Piercing",
//       modifier: Ability.dexterity,
//       onHit: (modifier) => `1d4${signedNumber.format(modifier)}`,
//       range: "20/60",
//     },
//     {
//       label: "Longbow",
//       modifier: Ability.dexterity,
//       onHit: (modifier) => `1d8${signedNumber.format(modifier)}`,
//       range: "150/600",
//     },
//     {
//       label: "Net",
//       modifier: Ability.dexterity,
//       onHit: () => `Restrained if <= Large`,
//       range: "5/15",
//     },
//   ],
//   traits: [
//     {
//       label: "Psionic Power",
//       description: "Some of your powers expend the Psionic Energy die they use and you can't use a power if it requires you to use a die when your dice are all expended. Once per short rest, as a bonus action, you can regain one expended Psionic Energy die.",
//       frequency: "Long Rest",
//       charges: 6,
//     },
//     {
//       label: "Telekinetic Movement",
//       description: "As an action, you target one loose object that is Large or smaller or another willing creature you can see within 30 feet. You can move it up to 30 feet to an unoccupied space you can see. If it is a Tiny object, you can move it to or from your hand.",
//       frequency: "Short Rest or Psionic Die",
//       charges: 1,
//     },
//     {
//       label: "Psionic Strike",
//       description: "Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, dealing force damage to the target equal to the number rolled plus int modifier.",
//     },
//     {
//       label: "Second Wind",
//       description: "On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
//       frequency: "Short Rest",
//       charges: 1,
//     },
//     {
//       label: "Action Surge",
//       description: "On your turn, You can take one additional action on top of your regular action and a possible bonus action",
//       frequency: "Short Rest",
//       charges: 1,
//     },
//     {
//       label: "Thrown Weapon Fighting",
//       description: "You can draw a throwing weapon as part of the attack you make with the weapon. In addition, when you hit with a ranged weapon you gain a +2 bonus to the damage roll.",
//     },
//     {
//       label: "Protective Field",
//       description: "When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, and reduce the damage taken by the number rolled plus int modifier.",
//     },
//     {
//       label: "Darkvision",
//       description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern colour in darkness only shades of grey.",
//     },
//     {
//       label: "Harper",
//       description: `You have been recruited by the harpers, a secret organisation dedicated to preserving historical lore, maintaining balance and defending the innocent.`,
//     },
//     {
//       label: "Gnome Cunning",
//       description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
//     },
//     {
//       label: "Speak with Small Beasts",
//       description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.",
//     },
//     {
//       label: "Observant",
//       description: `If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips. You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.`,
//     },
//   ],
//   items: [
//     {
//       label: "Breastplate",
//       equipped: true,
//     },
//     {
//       label: "Cloak of Protection",
//       equipped: true,
//     },
//     {
//       label: "Shield",
//       equipped: false,
//     },
//     {
//       label: "Leather Armor",
//     },
//     {
//       label: "Backpack",
//     },
//     {
//       label: "Bedroll",
//     },
//     {
//       label: "Mess Kit",
//     },
//     {
//       label: "Tinderbox",
//     },
//     {
//       label: "Waterskin",
//     },
//     {
//       label: "50ft Rope",
//     },
//     {
//       label: "Torches",
//       quantity: 10,
//     },
//     {
//       label: "Days Rations",
//       quantity: 10,
//     },
//   ],
//   proficiencies: [
//     "Common",
//     "Gnomish",
//     "All Armor",
//     "Shields",
//     "Simple Weapons",
//     "Martial Weapons",
//     "Disguise Kit",
//   ],
//   personality: "I'll settle for nothing less than perfection.",
//   ideals: "Art should reflect the soul; It should come from within and reveal who we really are.",
//   bonds: "I am on a mission to retrieve something precious that was taken from me and exact my revenge.",
//   flaws: "I have trouble keeping my true feelings hidden. My Sharp tongue lands me in trouble.",
//   getArmorClass: (dexModifier: number) => dexModifier + 14,
//   getInitiative: (dexModifier: number) => dexModifier,
// }

export const CharacterContext = createContext<Character>(character)

export const useCharacter = () => {
  return useContext(CharacterContext)
}

export const useModifierValue = (modifier: Ability) => {
  const { abilityScores } = useCharacter()
  return Math.floor((abilityScores[modifier] - 10) / 2)
}