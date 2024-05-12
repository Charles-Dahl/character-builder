import { HTMLAttributes } from "react";
import styles from "./inline.module.css"
import { Gap } from "@/utility/library/spacing";

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