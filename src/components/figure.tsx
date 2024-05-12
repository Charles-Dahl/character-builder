import Inline from "@/components/library/inline"
import Stack from "@/components/library/stack"
import { ReactNode } from "react"
import styles from "./figure.module.css"

interface FigureProps {
    children?: ReactNode
    label: string
}

const Figure = ({ children, label }: FigureProps) => {
    return (
        <Stack>
            <Inline className={styles.figure}>{children}</Inline>
            <Inline className={styles.label}>{label}</Inline>
        </Stack>
    )
}

export default Figure