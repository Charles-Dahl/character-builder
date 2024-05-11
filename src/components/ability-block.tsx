'use client'

import { Ability } from "@/utility/abilities";
import styles from "./ability-block.module.css";
import AbilityExtended from "./ability-extended";

const AbilityBlock = () => {
  return (
    <div className={styles.container}>
      <AbilityExtended ability={Ability.strength} />
      <AbilityExtended ability={Ability.constitution} />
      <AbilityExtended ability={Ability.wisdom} />
      <AbilityExtended ability={Ability.dexterity} />
      <AbilityExtended ability={Ability.intelligence} />
      <AbilityExtended ability={Ability.charisma} />
    </div>
  )
}

export default AbilityBlock;