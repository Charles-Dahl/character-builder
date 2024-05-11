import AbilityScore from "@/components/ability-score"
import Stack from "@/components/library/stack"
import Skill from "@/components/skill"
import { Ability } from "@/utility/abilities"
import { useCharacter, useModifierValue } from "@/utility/character"
import { ReactNode } from "react"
import styles from "./ability-extended.module.css"

interface AbilityExtendedProps {
    ability: Ability
    children?: ReactNode
}

const AbilityExtended = ({ children, ability }: AbilityExtendedProps) => {

    const { skills, proficiencyBonus } = useCharacter()
    const modifierValue = useModifierValue(ability)

    return <div className={styles.container}>
        <div className={styles.score}><AbilityScore ability={ability} /></div>
        <div className={styles.label}>{ability}</div>
        <div className={styles.other}>{children}</div>
        <Stack className={styles.content}>
            {Object.entries(skills[ability]).map(([label, proficient]) =>
                <Skill key={label} label={label} proficient={proficient} value={modifierValue + (proficient ? proficiencyBonus : 0)} />
            )}
        </Stack>
    </div>
}

export default AbilityExtended