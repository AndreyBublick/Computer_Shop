
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../API/products/productsAPI";
import { stateType } from "../store.ts";


const initialState = {
    products: [] as ProductType[],
    productsAfterFilter: [] as ProductType[],

};
/* 
enum filterBy {
    cost = 'COST',
}
 */

const getProducts=  (state:typeof initialState) => state.products;

const getProductsAfterFilter = createSelector([getProducts, (state:typeof initialState, price: number) => price], (products, price) => {
    return products.filter((item) => { return item.price < price }); 
});





export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: initialState,
    selectors: ({
        getProducts: getProducts,
         getProductsAfterFilter: getProductsAfterFilter, 
    }),
    reducers: {
        filterProductsByCost: (state, { payload }: PayloadAction<number>) => {
            state.productsAfterFilter = state.products.filter((item) => { return item.price < payload });
        },
        addProducts: (state, { payload }: PayloadAction<ProductType[]>) => {
            state.products = payload;
        }
    },
});

