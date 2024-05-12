import styles from "./hit-points.module.css"
import Inline from "@/components/library/inline"
import Stack from "@/components/library/stack"
import { useCharacter } from "@/utility/character"
import { Gap } from "@/utility/library/spacing"
import Figure from "@/components/figure"

const HitPoints = () => {
    const { hitDice, level } = useCharacter()
    return (
        <Stack gap={Gap.small}>
            <Stack>
                <Inline className={styles.label}>Hit Points</Inline>
                <div className={styles.container}>
                    <Figure label="Current" />
                    <Figure label="Max">44</Figure>
                    <Figure label="Temp" />
                </div>
            </Stack>
            <Stack>
                <Inline className={styles.label}>Hit Dice</Inline>
                <Inline gap={Gap.small}>{hitDice}{[...Array(level)].map((element, index) => <input key={index} type="checkbox" />)}</Inline>
            </Stack>
        </Stack>
    )
}

export default HitPoints