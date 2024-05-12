'use client'

import Inline from "@/components/library/inline"
import Stack from "@/components/library/stack"
import { Ability } from "@/utility/abilities"
import { useCharacter, useModifierValue } from "@/utility/character"
import { signedNumber } from "@/utility/library/number"
import styles from "./ability-score.module.css"

interface AbilityScoreProps {
    ability: Ability,
}

const AbilityScore = ({ ability }: AbilityScoreProps) => {
    const { abilityScores, saves, proficiencyBonus } = useCharacter()

    const modifierValue = useModifierValue(ability)
    const saveValue = modifierValue + (saves[ability] ? proficiencyBonus : 0)

    return <Stack className={styles['outer-box']}>
        <Inline className={styles.modifier}>{signedNumber.format(modifierValue)}</Inline>
        <Inline className={styles.value}>{abilityScores[ability]}</Inline>
    </Stack>
}

export default AbilityScore