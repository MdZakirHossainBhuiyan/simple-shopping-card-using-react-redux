import { combineReducers } from "redux";
import productListReducer from "./productList/productListReducer";

const rootReducer = combineReducers({
    addProductList: productListReducer
})

export default rootReducer;