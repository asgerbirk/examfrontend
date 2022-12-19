import axios from "axios"

export const getAllProducts= async () =>{
    return await axios.get("http://localhost:8080/api/v1/products")
}

export const getAllDeliveries= async () =>{
    return await axios.get("http://localhost:8080/api/v1/delivery")
}


export const createProduct= async (product) =>{
    return await axios.post("http://localhost:8080/api/v1/products",product)
}

export const createDelivery= async (delivery) =>{
    return await axios.post("http://localhost:8080/api/v1/delivery",delivery)
}

export const allDeliveries = async () =>{
    return await axios.get("http://localhost:8080/api/v1/delivery")
}

export const allProductOrders = async () =>{
    return await axios.get("http://localhost:8080/api/v1/productOrders")
}