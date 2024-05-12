import { useCharacter } from "@/utility/character"
import Stack from "@/components/library/stack"
import Inline from "@/components/library/inline"
import { Item } from "@/utility/items"
import styles from "./items.module.css"
import Card from "@/components/card"
import { Gap } from "@/utility/library/spacing"

const ItemDisplay = ({ label, quantity, equipped }: Item) => {
    return <Inline>
        {quantity && <div className={styles.quantity}></div>}
        {label}
        {equipped && "★"}
    </Inline>
}

const Items = () => {
    const { items } = useCharacter()
    return (
        <Card label="Items">
            <Stack align="left" gap={Gap.none}>
                {items.map(ItemDisplay)}
            </Stack>
        </Card>
    )
}

export default Items