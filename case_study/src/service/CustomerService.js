import axios from "axios";

export const findAll=async (page)=>{
    try {
        let result=await axios.get(`http://localhost:8080/customers?_page=${page}`);
        return result.data;
    }catch (err) {
        console.log(err)
    }
}
export const deleteCustomer=async (id)=>{
    try {
        let result=await axios.delete(`http://localhost:8080/customers/${id}`)
    }catch (err) {
        console.log(err)

    }
}
export const create=async (customer)=>{
    try {
        let result=await axios.post("http://localhost:8080/customers",customer)
    }catch (err) {
        console.log(err)

    }
}
export const updateCustomer=async (id,customer)=>{
    try {
        let result=await axios.put(`http://localhost:8080/customers/${id}`,customer)
    }catch (err) {
        console.log(err)
    }
}
export const getCustomerById=async (id)=>{
    try {
        let result=await axios.get(`http://localhost:8080/customers/${id}`);
        return result.data;
    }catch (err) {
        console.log(err)

    }
}
