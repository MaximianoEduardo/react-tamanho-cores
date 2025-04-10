export interface IVtexItens {
    productID: number;
    name: string;
    salesChannel: string;
    skus: ISKU[];

}

export interface ISKU {
    sku: number;
    dimensions: IDimension
}

export interface IDimension{
    Tamanho: string;
    COR: string
}
