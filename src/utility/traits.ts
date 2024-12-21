export enum ActionType {
    "Action",
    "Bonus Action",
    "Reaction",
    "Passive",
    "Ritual",
}

export interface Trait {
    label: string,
    description: string,
    frequency?: string,
    charges?: number,
    type?: ActionType,
}