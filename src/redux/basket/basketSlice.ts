import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../API/products/productsAPI.ts";





const initialState = {

    cartContents: [] as ProductType[],

};

export const basketSlice = createSlice({
    name:'basketSlice',
    initialState: initialState,
    selectors:{
        getCartContents:(state)=>state.cartContents,
    },
    reducers:{
        addNewCart:(state,action:PayloadAction<ProductType>)=>{
            state.cartContents = [...state.cartContents,action.payload];
        },
        deleteCartById:(state,action:PayloadAction<number>)=>{
            state.cartContents = state.cartContents.filter((product)=>{return product.id !== action.payload});
        },
    },
});