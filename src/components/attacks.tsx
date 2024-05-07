import Inline from "@/components/library/inline";
import { Attack } from "@/utility/attacks";
import { useCharacter, useModifierValue } from "@/utility/character";
import { signedNumber } from "@/utility/library/number";
import styles from "./attacks.module.css"
import { Fragment } from "react";

const AttackDisplay = ({ label, damageType, modifier, range, onHit }: Attack) => {
    const { proficiencyBonus } = useCharacter()
    const modifierValue = useModifierValue(modifier)
    return (
        <Fragment key={label}>
            <Inline className={styles.item}>{label}</Inline>
            <Inline className={styles.item}>{signedNumber.format(modifierValue + proficiencyBonus)}</Inline>
            <Inline className={styles.item}>{onHit(modifierValue)} {damageType}</Inline>
            <Inline className={styles.item}>{range}</Inline>
        </Fragment>
    )
}

const Attacks = () => {
    const { attacks } = useCharacter()
    return (
        <div className={styles.container}>
            <Inline className={styles.header}>Attack</Inline>
            <Inline className={styles.header}>Hit</Inline>
            <Inline className={styles.header}>Effect</Inline>
            <Inline className={styles.header}>Range</Inline>
            {attacks.map(AttackDisplay)}
        </div>
    )
}

export default Attacks;