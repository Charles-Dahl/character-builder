import { useCharacter } from "@/utility/character"
import Figure from "./figure"

const Movement = () => {
    const { movement } = useCharacter()
    return (
        <Figure label="Movement">{movement}</Figure>
    )
}

export default Movement