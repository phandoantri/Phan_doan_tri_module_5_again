import axios from "axios";

export const findAll=async ()=>{
    try {
        const result=await axios.get("http://localhost:8080/typeProduct")
        return result.data
    }catch (e) {
        console.log(e)
    }
}