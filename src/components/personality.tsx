import Card from "@/components/card"
import { useCharacter } from "@/utility/character"

const Personality = () => {
    const { personality } = useCharacter()
    return (
        <Card label="Personality">
            <p style={{ fontSize: "x-small" }}>{personality}</p>
        </Card>
    )
}

export default Personality