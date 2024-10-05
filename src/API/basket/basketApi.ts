import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_JSON } from "../constants.ts";
import { ProductType } from "../products/productsAPI.ts";


export type productAndCountType = ProductType&{count:number}


export const basketAPI = createApi({
    reducerPath: 'basketAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL_JSON }),
    tagTypes: ['CART_CONTENTS'],
    endpoints: (builder) => ({
        getCartContents: builder.query<productAndCountType[], void>({
            query: () => ({
                url: 'cartsProducts',
            }),
            providesTags: (result) => ['CART_CONTENTS'],
        }),
        getCartContent: builder.query<productAndCountType, number>({
            query: (id) => ({
                url: `cartsProducts/${id}`,
            }),
            
        }),
        addCartContent: builder.mutation<void, productAndCountType>({
            query: (cartContent) => ({
                url: 'cartsProducts',
                method:'POST',
                body: {...cartContent,id:`${cartContent.id}`},
        
            }),
           invalidatesTags:['CART_CONTENTS'],
        }),
        deleteCartContent: builder.mutation<void, number>({
            query: (id) => ({
                url: `cartsProducts/${id}`,
                method:'DELETE',
                
        
            }),
           invalidatesTags:['CART_CONTENTS'],
        }),
        changeCartContentCount: builder.mutation<void, {id:string,cart:productAndCountType}>({
            query: ({id,cart}) => ({
                url: `cartsProducts/${id}`,
                method:'PUT',
                body:{...cart},
                
        
            }),
           invalidatesTags:['CART_CONTENTS'],
        }),
    }),


});

