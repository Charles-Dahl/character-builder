import { Ability } from "@/utility/abilities"
import { useModifierValue } from "@/utility/character"
import { signedNumber } from "@/utility/library/number"
import Figure from "./figure"

const Initiative = () => {
    const dexModifier = useModifierValue(Ability.dexterity)
    return (
        <Figure label="Initiative">{signedNumber.format(dexModifier)}</Figure>
    )
}

export default Initiative