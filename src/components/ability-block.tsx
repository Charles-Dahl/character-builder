'use client'

import { Ability } from "@/utility/abilities";
import AbilityScore from "@/components/ability-score";
import Inline from "@/components/library/inline";
import Stack from "@/components/library/stack";
import Attacks from "@/components/attacks";
import AbilityExtended from "./ability-extended";
import { useCharacter } from "@/utility/character";

const AbilityBlock = () => {
  return (
    <Inline>
      <Attacks />
      <Stack>
        <AbilityExtended ability={Ability.strength} />
        <AbilityExtended ability={Ability.dexterity} />
      </Stack>
      <Stack>
        <AbilityExtended ability={Ability.constitution} />
        <AbilityExtended ability={Ability.intelligence} />
      </Stack>
      <Stack>
        <AbilityExtended ability={Ability.wisdom} />
        <AbilityExtended ability={Ability.charisma} />
      </Stack>
    </Inline>
  )
}

export default AbilityBlock;