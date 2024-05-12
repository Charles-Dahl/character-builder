import Inline from "@/components/library/inline"
import { useCharacter } from "@/utility/character"
import styles from "./details.module.css"
import Stack from "./library/stack"

const Details = () => {
    const { characterName, level, mainClass, subclass, proficiencyBonus, race, background, playerName, size } = useCharacter()
    return (
        <Inline className={styles.container}>
            <div className={styles['banner-start']}>
                <Inline>Level {level}</Inline>
                <Stack>
                    <Inline>{mainClass}</Inline>
                    <Inline className={styles.subclass}>{subclass}</Inline>
                </Stack>
                <Inline>{proficiencyBonus} Proficiency Bonus</Inline>
            </div>
            <Inline className={styles['character-name']}>{characterName}</Inline>
            <div className={styles['banner-end']}>
                <Inline>{race}</Inline>
                <Inline>{background}</Inline>
                <Inline>{playerName}</Inline>
            </div>
        </Inline>
    )
}

export default Details