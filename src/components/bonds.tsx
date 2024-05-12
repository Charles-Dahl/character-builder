import Card from "@/components/card"
import { useCharacter } from "@/utility/character"

const Bonds = () => {
    const { bonds } = useCharacter()
    return (
        <Card label="Bonds">
            <p style={{ fontSize: "x-small" }}>{bonds}</p>
        </Card>
    )
}

export default Bonds