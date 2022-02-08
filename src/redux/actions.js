import { actionTypes } from "./constants"
export const setProducts =  (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products 
    }
}

export const selectedProduct = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export const addItemToCart = () => {
    console.log("object")
    return {
        type: actionTypes.ADD_TO_CART
    }
}