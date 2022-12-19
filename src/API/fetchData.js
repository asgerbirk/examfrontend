import axios from "axios"

export const getAllProducts= async () =>{
    return await axios.get("http://localhost:8080/api/v1/products")
}


export const createProduct= async (product) =>{
    return await axios.post("http://localhost:8080/api/v1/products",product)
}