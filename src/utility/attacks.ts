import { Ability } from "./abilities";

export interface Attack {
    label: string,
    modifier: Ability,
    damageType?: string,
    range?: string,
    onHit: (modifier: number) => string,
}