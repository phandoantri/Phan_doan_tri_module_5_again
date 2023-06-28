import postService from "../../service/PostService";
import {CREATE_POST, GET_ALL_POST} from "./types";

export const findAll = () => async (dispatch) => {
    try {
        const res = await postService.findAll();
        dispatch({
            type: GET_ALL_POST,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}
export const createPost = (post) => async (dispatch) => {
    try {
        const res = await postService.createPost(post);
        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}