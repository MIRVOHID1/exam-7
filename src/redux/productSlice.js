import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: JSON.parse(localStorage.getItem("Product")) ||[],
    liked: JSON.parse(localStorage.getItem("Liked")) ||[]
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product.unshift(action.payload)
            localStorage.setItem("Product", JSON.stringify(state.product))
        },
        addLikedProduct: (state, action) => {
            state.liked.unshift(action.payload)
            localStorage.setItem("Liked", JSON.stringify(state.liked))
        },
        removeProduct: (state, action) => {
            localStorage.setItem("Product", JSON.stringify(state.product.filter((product) => product.id == action.id)))       
            state.product.filter((product) => product.id == action.id)
        },
        removeLiked: (state, action) => {
            localStorage.setItem("Product", JSON.stringify(state.liked.filter((liked) => liked.id == action.id)))       
            state.liked.filter((liked) => liked.id == action.id)
        }
    }
})

export const { addProduct, addLikedProduct , removeProduct, removeLiked } = productSlice.actions

export { productSlice }  

