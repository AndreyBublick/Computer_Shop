import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesAPI } from "../API/categories/categoriesAPI.ts";
import { productsAPI } from "../API/products/productsAPI.ts";
import { productsSlice } from "./products/productsSlice.ts";
import { basketSlice } from "./basket/basketSlice.ts";
import { basketAPI } from "../API/basket/basketApi.ts";


const reducers = combineReducers({
  [productsSlice.reducerPath]:productsSlice.reducer,
  [basketSlice.reducerPath]:basketSlice.reducer,

  [categoriesAPI.reducerPath]: categoriesAPI.reducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
  [basketAPI.reducerPath]: basketAPI.reducer,
});

export const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(categoriesAPI.middleware,productsAPI.middleware,basketAPI.middleware);
  },
  
});



export type stateType = ReturnType<typeof store.getState>;




export type dispathType = typeof store.dispatch;

