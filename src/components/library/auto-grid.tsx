import { HTMLAttributes } from "react";
import styles from "./auto-grid.module.css"

interface AutoGridProps extends HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode,
}

const AutoGrid = ({ children, className, ...other }: AutoGridProps) => (
    <div {...other} className={[styles.container, className].join(' ')}>
        {children}
    </div>
)

export default AutoGrid;