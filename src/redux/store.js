import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

export const store = configureStore({
    reducer: {
        productData: productSlice.reducer
    }
})
