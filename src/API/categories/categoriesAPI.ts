import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { BASE_URL } from "../constants.ts";





export const categoriesAPI = createApi({
    reducerPath: 'categoriesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCategories: builder.query<categorieType[], void>({
            query: () => ({
                url: 'categories',
            }),
        }),
        getCategorieById: builder.query<categorieType, number>({
            query: (id) => ({

                url: `categories/${id}`,



            }),
        }),
    }),


});

export type categorieType = {
    id: number,
    name: string,
    image: string,
}