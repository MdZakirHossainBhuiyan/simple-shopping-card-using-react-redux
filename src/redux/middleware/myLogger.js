import { useSelector } from "react-redux";
import logger from "redux-logger";
import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {

    const state =  store.getState().addProductList;

    const firstProductQuantity =  (state[0].quantity)+1;
    const secondProductQuantity =  (state[1].quantity)+1;
    const thirdProductQuantity =  (state[2].quantity)+1;

    // console.log(`action: ${JSON.stringify(action)}`);
    // console.log(`before: ${JSON.stringify(store.getState())}`);

    // const upComingState = [action].reduce(rootReducer, store.getState());

    // console.log(`after: ${JSON.stringify(upComingState.addProductList)}`);

    //pass action
    //if(firstProductQuantity<=2 || secondProductQuantity<=5 || thirdProductQuantity<=3){
        return next(action);
    //}
}

export default myLogger;