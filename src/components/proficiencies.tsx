import { useCharacter } from "@/utility/character"
import Stack from "@/components/library/stack"
import Inline from "@/components/library/inline"
import Card from "@/components/card"
import { Gap } from "@/utility/library/spacing"
import styles from "./proficiencies.module.css"

const Proficiencies = () => {
    const { proficiencies } = useCharacter()
    return (
        <Card label="Proficiencies">
            <Stack align="left" gap={Gap.none}>
                {proficiencies.map((proficiency) => <Inline className={styles.item}>{proficiency}</Inline>)}
            </Stack>
        </Card>
    )
}

export default Proficiencies