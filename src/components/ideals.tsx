import Card from "@/components/card"
import { useCharacter } from "@/utility/character"

const Ideals = () => {
    const { ideals } = useCharacter()
    return (
        <Card label="Ideals">
            <p style={{ fontSize: "x-small" }}>{ideals}</p>
        </Card>
    )
}

export default Ideals