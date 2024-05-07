import { HTMLAttributes } from "react";
import styles from "./stack.module.css";

interface StackProps extends HTMLAttributes<HTMLSpanElement> {
    before?: React.ReactNode,
    children?: React.ReactNode,
    after?: React.ReactNode,
    align?: 'left' | 'right' | 'stretch',
}

const Stack = ({ before, children, after, className, align, ...other }: StackProps) => {
    return (
        <div {...other} className={[styles.container, className, ...[align && styles[align]]].join(' ')}>
            {before}
            {children}
            {after}
        </div>
    )
}

export default Stack;