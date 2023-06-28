import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducer";

const initialStore = {}
const middleware = [thunk]
const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...middleware)
)
export default store;