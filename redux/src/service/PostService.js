import request from "../http-common"

const findAll = () => {
    return request.get("/posts")
}
const createPost = (post) => {
    return request.post("/posts", post)
}
const postService = {
    findAll,
    createPost
}
export default postService;