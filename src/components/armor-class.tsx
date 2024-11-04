import { useCharacter, useModifierValue } from "@/utility/character"
import Figure from "./figure"
import { Ability } from "@/utility/abilities"

const ArmorClass = () => {
    const { baseArmor, armorModifier } = useCharacter()
    const modifierValue = useModifierValue(armorModifier)
    const finalValue = baseArmor + modifierValue

    return (
        <Figure label="Armor Class">{finalValue}</Figure>
    )
}

export default ArmorClass