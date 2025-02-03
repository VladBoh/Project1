export interface Product {
    id: number,
    title: string,
    price:number,
    description:string,
    category:string,
    images:string,
}

export interface ProductsQueryParams {
    offset?: number;
    limit?: number;
    title?: string;
}
