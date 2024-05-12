import Inline from "@/components/library/inline"
import { signedNumber } from "@/utility/library/number"
import { Gap } from "@/utility/library/spacing"
import styles from "./skill.module.css"

interface SkillProps {
    label: string,
    proficient: boolean,
    value: number,
}

const Skill = ({ label, proficient, value }: SkillProps) => {
    return (
        <Inline gap={Gap.tiny}>
            <input type="checkbox" checked={proficient} readOnly />
            <Inline className={styles.value}>{signedNumber.format(value)}</Inline>
            <Inline className={styles.label}>{label}</Inline>
        </Inline>
    )
}

export default Skill