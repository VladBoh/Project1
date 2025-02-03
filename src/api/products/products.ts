import { api } from "..";
import { getQueryParamString } from "@/utils/get-query-param-string";
import { Product, ProductsQueryParams } from "./products.types";

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], Partial<ProductsQueryParams>>({
      query: (queryParams) => {
        const queryParamsString = getQueryParamString(queryParams);
        return `/products?${queryParamsString}`;  
      },
    }),
    getSingleProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery , useGetSingleProductQuery } = productsApi;
