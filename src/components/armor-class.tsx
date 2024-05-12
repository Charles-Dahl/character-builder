import { useCharacter, useModifierValue } from "@/utility/character"
import Figure from "./figure"
import { Ability } from "@/utility/abilities"

const ArmorClass = () => {
    const { getArmorClass } = useCharacter()
    const dexModifier = useModifierValue(Ability.dexterity)
    return (
        <Figure label="Armor Class">{getArmorClass(dexModifier)}</Figure>
    )
}

export default ArmorClass