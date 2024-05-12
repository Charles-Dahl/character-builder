import { useCharacter, useModifierValue } from "@/utility/character"
import Figure from "./figure"
import { Ability } from "@/utility/abilities"
import { signedNumber } from "@/utility/library/number"

const Initiative = () => {
    const { getInitiative } = useCharacter()
    const dexModifier = useModifierValue(Ability.dexterity)
    return (
        <Figure label="Initiative">{signedNumber.format(getInitiative(dexModifier))}</Figure>
    )
}

export default Initiative