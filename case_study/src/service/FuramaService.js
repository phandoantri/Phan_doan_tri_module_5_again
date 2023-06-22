import axios from "axios";

export const findAll=async ()=>{
    try {
        let result=await axios.get("http://localhost:8080/service");
        return result.data;
    }catch (err) {
        console.log(err)

    }
}
export const updateService=async (id,service)=>{
    try {
        await axios.put(`http://localhost:8080/service/${id}`,service)
    }catch (err) {
        console.log(err)
    }
}
export const getServiceById=async (id)=>{
    try {
        let result=await axios.get(`http://localhost:8080/service/${id}`);
        return result.data;
    }catch (err) {
        console.log(err)
    }
}
export const createService=async (service)=>{
    try {
      await axios.post("http://localhost:8080/service",service) ;
    }catch (err) {
        console.log(err)
    }
}