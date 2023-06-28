import {CREATE_POST, GET_ALL_POST} from "../action/types";

const initialState=[];
const postReducer=(posts=initialState,action)=>{
    const {type,payload}=action
    switch (type) {
        case GET_ALL_POST:
            return payload;
        case CREATE_POST:
            return [payload,...posts];
        default:
            return posts;
    }
}
export default postReducer;