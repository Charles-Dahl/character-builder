import { ReactNode } from "react"
import styles from "./card.module.css"

interface CardProps {
    label: string
    children: ReactNode
}

const Card = ({ label, children }: CardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.label}>{label}</div>
            {children}
        </div>
    )
}

export default Card