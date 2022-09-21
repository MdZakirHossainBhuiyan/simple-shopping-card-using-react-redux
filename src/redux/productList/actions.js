import { ADD_PRODUCT, DECREMENT, INCREMENT } from "./actionTypes"

export const addProduct = (id) => {
    return {
        type: ADD_PRODUCT,
        payload: id,
    }
}

export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: id,
    }
}

export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: id,
    }
}