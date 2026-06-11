export interface Purchase {
    id: string,
    materialId: string
    supplierId: string    
    quantity: number    
    price: number
    date: string
    materialName?: string
    materialType?: string
}