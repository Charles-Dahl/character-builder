'use client'

import { Ability } from "@/utility/abilities";
import AbilityScore from "@/components/ability-score";
import Inline from "@/components/library/inline";
import Stack from "@/components/library/stack";
import Attacks from "@/components/attacks";

const AbilityBlock = () => {
  return (
    <Inline>
      <Stack>
        <div></div>
        <Inline>
          <Attacks />
          <Stack>
            <AbilityScore ability={Ability.strength} />
            <AbilityScore ability={Ability.dexterity} />
          </Stack>
        </Inline>
      </Stack>
      <AbilityScore ability={Ability.constitution} />
      <AbilityScore ability={Ability.intelligence} />
      <AbilityScore ability={Ability.wisdom} />
      <AbilityScore ability={Ability.charisma} />
    </Inline>
  )
}

export default AbilityBlock;