import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants.ts";

export enum categoryNames {
    Others,
};

type categoryType = {
    "id": number,
    "name": categoryNames,
    "image": string,
};

export type ProductType = {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": categoryType,
    "images": string[],
};

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    tagTypes:['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductType[], void>({
            query: () => ({
                url:'products/',
            }),
            providesTags:(result) => ['Products'],
        }),
        getProduct: builder.query<ProductType, number>({
            query: (id) => ({
                url:`products/${id}`,
            }),
            /* providesTags:(result) => ['Products'], */
        }),
    }),
    
});