import { actionTypes } from "./constants"
const initialState =  {
    products : [],
    product: {},
    cart: []
}
export const productReducer = (state= initialState, {type,payload}) => {

    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: payload};

        case actionTypes.SELECTED_PRODUCT:
            return {...state, product:{...payload}};

        case actionTypes.ADD_TO_CART:
            console.log("add to cart")
            return {...state, cart:[...state.cart,{...state.product}]}
        default: 
            return state;
    }

}