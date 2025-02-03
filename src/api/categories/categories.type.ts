export interface Category {
    id: number,
    name: string,
    image:string,
}

export interface CategoryQueryParams {
    offset?: number;
    limit?: number;
}
