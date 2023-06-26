import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/posts");
        return result.data;
    } catch (err) {
        console.log(err)
    }
}
export const deleteById = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/posts/${id}`);
    } catch (err) {
        console.log(err);
    }
}
export const createPost = async (post) => {
    try {
        await axios.post("http://localhost:8080/posts", post);
    } catch (err) {
        console.log(err)
    }
}
export const findById=async (id)=>{
    try {
        const result=await axios.get(`http://localhost:8080/posts/${id}`);
        return result.data;
    }catch (err) {
       console.log(err)
    }
}
export const updatePost=async (id,post)=>{
    await axios.put(`http://localhost:8080/posts/${id}`,post);
}