import axios from "axios";

export const findAll=async ()=>{
    try {
        let result=await axios.get("http://localhost:8080/contact");
        return result.data;
    }catch (err) {
       console.log(err)
    }
}
export const getContactById=async (id)=>{
    try {
        let result=await axios.get(`http://localhost:8080/contact/${id}`);
        return result.data;
    }catch (err) {
        console.log(err)
    }
}
export const updateContact=async (id,contact)=>{
    try {
        await axios.put(`http://localhost:8080/contact/${id}`,contact)
    }catch (err) {
        console.log(err)
    }
}
export const createContact=async (contact)=>{
    try {
        await axios.post("http://localhost:8080/contact",contact);
    }catch (e) {
        console.log(e)
    }
}