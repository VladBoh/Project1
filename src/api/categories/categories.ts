import { getQueryParamString } from "@/utils/get-query-param-string";
import { api } from "..";
import { Category, CategoryQueryParams } from "./categories.type";
import { Product } from "../products/products.types";

export const categoriesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], Partial<CategoryQueryParams>>({
            query: (queryParams) => {
                const queryParamsString = getQueryParamString(queryParams);
                return `/categories?${queryParamsString}`;
            },
        }),
         getSingleCategory: builder.query<Category, number>({
            query: (id) => `/categories/${id}`,
         }),
         getAllProductsByCategory: builder.query<Product[],number>({
            query: (id) => `/categories/${id}/products`,
           })
    }),
});

export const { useGetCategoriesQuery , useGetSingleCategoryQuery , useGetAllProductsByCategoryQuery} = categoriesApi;
