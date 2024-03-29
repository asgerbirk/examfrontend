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

export const allProductOrders = async () =>{
    return await axios.get("http://localhost:8080/api/v1/productOrders")
}

export const getProductById = async (id) =>{
    return await axios.get(`http://localhost:8080/api/v1/products/${id}`)
}

export const updateProduct = async (product, id) => {
    return await axios.put(`http://localhost:8080/api/v1/products/${id}`, product).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err)
    })
}

