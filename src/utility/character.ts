import { createContext, useContext } from "react"
import { Ability } from "@/utility/abilities"
import { Attack } from "@/utility/attacks"
import { signedNumber } from "@/utility/library/number"
import { Trait } from "@/utility/traits"
import { Size } from "@/utility/size"
import { Dice } from "@/utility/dice"

export interface Character {
  playerName: string,
  characterName: string,
  class: string,
  background: string,
  race: string,
  size: Size,
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
}

export const character: Character = {
  playerName: 'Charles',
  characterName: 'Feeblethorp',
  class: 'Psi Warrior Fighter',
  background: 'Entertainer',
  race: 'Forest Gnome',
  size: Size.small,
  hitDice: Dice.d10,
  level: 5,
  proficiencyBonus: 3,
  abilityScores: {
    [Ability.strength]: 12,
    [Ability.dexterity]: 16,
    [Ability.constitution]: 14,
    [Ability.intelligence]: 16,
    [Ability.wisdom]: 8,
    [Ability.charisma]: 10,
  },
  saves: {
    [Ability.strength]: true,
    [Ability.dexterity]: false,
    [Ability.constitution]: true,
    [Ability.intelligence]: false,
    [Ability.wisdom]: false,
    [Ability.charisma]: false,
  },
  skills: {
    [Ability.strength]: {
      Athletics: true,
    },
    [Ability.dexterity]: {
      Acrobatics: true,
      "Sleight of Hand": false,
      Stealth: false,
    },
    [Ability.constitution]: {},
    [Ability.intelligence]: {
      Arcana: false,
      History: false,
      Investigation: false,
      Nature: false,
      Religion: false,
    },
    [Ability.wisdom]: {
      "Animal Handling": false,
      Insight: false,
      Medicine: false,
      Perception: true,
      Survival: false,
    },
    [Ability.charisma]: {
      Deception: false,
      Intimidation: false,
      Performance: true,
      Persuasion: false,
    },
  },
  attacks: [
    {
      label: "Scimitar",
      damageType: "Slashing",
      modifier: Ability.dexterity,
      onHit: (modifier) => `1d6${signedNumber.format(modifier)}`,
      range: "Melee",
    },
    {
      label: "Dagger x 6",
      damageType: "Piercing",
      modifier: Ability.dexterity,
      onHit: (modifier) => `1d4${signedNumber.format(modifier)}`,
      range: "20/60",
    },
    {
      label: "Longbow",
      modifier: Ability.dexterity,
      onHit: (modifier) => `1d8${signedNumber.format(modifier)}`,
      range: "150/600",
    },
    {
      label: "Net",
      modifier: Ability.dexterity,
      onHit: () => `Restrained if <= Large`,
      range: "5/15",
    },
  ],
  traits: [
    {
      label: "Darkvision",
      description: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern colour in darkness only shades of grey.",
    },
    {
      label: "Gnome Cunning",
      description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
    },
    {
      label: "Speak with Small Beasts",
      description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts",
    },
    {
      label: "Second Wind",
      description: "On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
      frequency: "Short Rest",
      charges: 1,
    },
    {
      label: "Action Surge",
      description: "On your turn, You can take one additional action on top of your regular action and a possible bonus action",
      frequency: "Short Rest",
      charges: 1,
    },
    {
      label: "Thrown Weapon Fighting",
      description: "You can draw a throwing weapon as part of the attack you make with the weapon. In addition, when you hit with a ranged weapon you gain a +2 bonus to the damage roll.",
    },
    {
      label: "Observant",
      description: `If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips. You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores.`,
    },
  ],
}

export const CharacterContext = createContext<Character>(character)

export const useCharacter = () => {
  return useContext(CharacterContext)
}

export const useModifierValue = (modifier: Ability) => {
  const { abilityScores } = useCharacter()
  return (abilityScores[modifier] - 10) / 2
}