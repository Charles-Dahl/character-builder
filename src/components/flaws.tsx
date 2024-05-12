import Card from "@/components/card"
import { useCharacter } from "@/utility/character"

const Flaws = () => {
    const { flaws } = useCharacter()
    return (
        <Card label="Flaws">
            <p style={{ fontSize: "x-small" }}>{flaws}</p>
        </Card>
    )
}

export default Flaws