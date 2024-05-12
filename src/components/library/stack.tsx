import { HTMLAttributes } from "react";
import styles from "./stack.module.css";
import { Gap } from "@/utility/library/spacing";

interface StackProps extends HTMLAttributes<HTMLSpanElement> {
    before?: React.ReactNode,
    children?: React.ReactNode,
    after?: React.ReactNode,
    align?: 'left' | 'right' | 'stretch',
    gap?: string,
}

const Stack = ({ before, children, after, className, align, gap = Gap.fine, ...other }: StackProps) => {
    return (
        <div {...other} style={{ gap }} className={[styles.container, className, ...[align && styles[align]]].join(' ')}>
            {before}
            {children}
            {after}
        </div>
    )
}

export default Stack;