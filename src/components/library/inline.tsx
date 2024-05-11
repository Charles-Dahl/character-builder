import { HTMLAttributes } from "react";
import styles from "./inline.module.css"

export enum Gap {
    none = '0',
    fine = '1px',
    tiny = '0.3rem',
    small = '0.6rem',
    medium = '1rem',
    large = '1.5rem',
    xLarge = '3rem',
    xxLarge = '6rem',
}

interface InlineProps extends HTMLAttributes<HTMLSpanElement> {
    before?: React.ReactNode,
    children?: React.ReactNode,
    after?: React.ReactNode,
    gap?: string,
}

const Inline = ({ before, children, after, className, gap = Gap.fine, ...other }: InlineProps) => (
    <span {...other} style={{ gap }} className={[styles.container, className].join(' ')}>
        {before}
        {children}
        {after}
    </span>
)

export default Inline;