'use client'

import AbilityExtended from "@/components/ability-extended";
import ArmorClass from "@/components/armor-class";
import HitPoints from "@/components/hit-points";
import Initiative from "@/components/initiative";
import { Ability } from "@/utility/abilities";
import styles from "./ability-block.module.css";
import Attacks from "./attacks";
import Movement from "./movement";

const AbilityBlock = () => {
  return (
    <div className={styles.container}>
      <Attacks />
      <AbilityExtended ability={Ability.constitution}><HitPoints /></AbilityExtended>
      <AbilityExtended ability={Ability.wisdom} />
      <AbilityExtended ability={Ability.strength} >
        <div className={styles["figure-group"]}>
          <Movement />
        </div>
      </AbilityExtended>
      <AbilityExtended ability={Ability.dexterity}>
        <div className={styles["figure-group"]}>
          <ArmorClass />
          <Initiative />
        </div>
      </AbilityExtended>
      <AbilityExtended ability={Ability.intelligence} />
      <AbilityExtended ability={Ability.charisma} />
    </div>
  )
}

export default AbilityBlock;