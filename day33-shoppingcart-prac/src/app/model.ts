export interface User {
    name: string
    address: string
    email: string
    phone: number
    express?: boolean
    delivery: string
    items: Item[]
    total?: number
}

export interface Item {
    item: string
    quantity: number
    price: number
}