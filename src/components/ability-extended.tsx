import { ReactNode } from "react"
import styles from "./ability-extended.module.css"
import { Ability } from "@/utility/abilities"
import AbilityScore from "@/components/ability-score"
import Stack from "@/components/library/stack"
import Inline from "@/components/library/inline"
import { useCharacter, useModifierValue } from "@/utility/character"
import { signedNumber } from "@/utility/library/number"

interface AbilityExtendedProps {
    ability: Ability
    children?: ReactNode
}

const AbilityExtended = ({ children, ability }: AbilityExtendedProps) => {

    const { skills, proficiencyBonus } = useCharacter()
    const modifierValue = useModifierValue(ability)

    return <div className={styles.container}>
        <AbilityScore ability={ability} />
        <Stack>
            {Object.entries(skills[ability]).map(([label, proficient]) =>
                <Inline key={label}>
                    <input type="checkbox" checked={proficient} readOnly />
                    <Inline>{signedNumber.format(modifierValue + (proficient ? proficiencyBonus : 0))}</Inline>
                    <Inline>{label}</Inline>
                </Inline>
            )}
        </Stack>
    </div>
}

export default AbilityExtended