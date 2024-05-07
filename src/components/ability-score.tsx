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
    const { abilityScores } = useCharacter()

    const modifierValue = useModifierValue(ability)

    return <Stack className={styles['outer-box']}>
        <Inline className={styles.label}>{ability}</Inline>
        <Inline className={styles.modifier}>{signedNumber.format(modifierValue)}</Inline>
        <Inline>{abilityScores[ability]}</Inline>
    </Stack>
}

export default AbilityScore