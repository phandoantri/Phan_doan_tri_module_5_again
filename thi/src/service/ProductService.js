import axios from "axios";

export const findAll= async ()=>{
    try {
        const result=await axios.get("http://localhost:8080/products?_sort=cost&_order=desc")
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const deleteProduct=async (id)=>{
    try {
        await axios.delete(`http://localhost:8080/products/${id}`)
    }catch (e) {
      console.log(e)
    }
}
export const findById=async (id)=>{
    try {
        const result=await axios.get(`http://localhost:8080/products/${id}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const updateProduct=async (id,product)=>{
    try {
        await axios.put(`http://localhost:8080/products/${id}`,product)
    }catch (e) {
        console.log(e)
    }
}
export const createProduct=async (product)=>{
    try {
        await axios.post("http://localhost:8080/products",product)
    }catch (e) {
        console.log(e)
    }
}