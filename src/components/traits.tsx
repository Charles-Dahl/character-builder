import AutoGrid from "@/components/library/auto-grid"
import Inline from "@/components/library/inline"
import { useCharacter } from "@/utility/character"
import { Trait } from "@/utility/traits"
import styles from "./traits.module.css"

const TraitDisplay = ({ label, description, charges = 0, frequency }: Trait) => {
    return (
        <div key={label} className={styles.item}>
            <Inline className={styles.label}>{label}</Inline>
            <Inline className={styles.description}>{description}</Inline>
            <Inline className={styles.charges}>{[...Array(charges)].map((element, index) => <input key={index} type="checkbox" />)}</Inline>
            <Inline className={styles.frequency}>{frequency}</Inline>
        </div>
    )
}

const Traits = () => {
    const { traits } = useCharacter()
    return (
        <AutoGrid className={styles.grid}>
            {traits.map(TraitDisplay)}
        </AutoGrid>
    )
}

export default Traits