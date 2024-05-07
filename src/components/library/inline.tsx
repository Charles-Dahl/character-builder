import { HTMLAttributes } from "react";
import styles from "./inline.module.css"

interface InlineProps extends HTMLAttributes<HTMLSpanElement> {
    before?: React.ReactNode,
    children?: React.ReactNode,
    after?: React.ReactNode,
}

const Inline = ({ before, children, after, className, ...other }: InlineProps) => (
    <span {...other} className={[styles.container, className].join(' ')}>
        {before}
        {children}
        {after}
    </span>
)

export default Inline;