import { ADD_PRODUCT, DECREMENT, INCREMENT } from "./actionTypes";
import initialState from "./initialState";

const productListReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            return state.map((product) => {
                if(product.id !== action.payload){
                    return product;
                }

                return {
                    ...product,
                    quantity: product.quantity + 1,
                    selected: true
                }
            })

        case INCREMENT:
            return state.map((product) => {
                if(product.id !== action.payload){
                    return product;
                }
    
                return {
                    ...product,
                    quantity: product.quantity + 1,
                }
            })

        case DECREMENT:
            return state.map((product) => {
                if(product.id !== action.payload){
                    return product;
                }
        
                return {
                    ...product,
                    quantity: product.quantity - 1,
                }
            })

        default:
            return state;
    }
}

export default productListReducer;