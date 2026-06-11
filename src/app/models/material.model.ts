import { Purchase } from "./purchase.model";

export interface Material {
    id: string,
    name: string,
    description: string,
    type: string,
    price: number,
    purchases: Purchase[]
}