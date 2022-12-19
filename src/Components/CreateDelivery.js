import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {getAllDeliveries, getAllProducts} from "../API/fetchData";
import {useQuery} from "react-query";

export const CreateDelivery = () =>{

    const [productOrder, setProductOrder] = useState({
        quantity:"",
        delivery:[{
            id:""
        }],
        product:[{
            id:""
        }],
    })



const {quantity, delivery,product} = productOrder;

    let navigate = useNavigate();

    const {data:deliveries, isLoading, isError} = useQuery("deliveries", getAllDeliveries);

    const {data:products} = useQuery("products", getAllProducts);

    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
    }

    const onInputChange = (e) => {
        setProductOrder({...productOrder,[e.target.name]:e.target.value})
    }

    const handleDelivery = (event) =>{
        const name = event.target.name;

        setProductOrder(prevState =>{
            return{
                ...prevState,
                delivery: {[name]: event.target.value}
            }
        })
    }

    const productHandle = (event) =>{
        const name = event.target.name;

        setProductOrder(prevState =>{
            return{

                ...prevState,
                product: {[name]: event.target.value}

            }
        })
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        await axios.post("http://localhost:8080/api/v1/productOrders", productOrder)
        console.log(productOrder)
        navigate("/allData")

    }

    return(<div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Create delivery</h2>
                    <form onSubmit={onSubmit}>

                        <div className="mb-3">
                            <label  className="form-label">
                                Quantity products
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="quantity"
                                value={quantity}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">
                                Select a delivery
                            </label>
                            <select value={delivery.id} className="form-control" name="id" onChange={(e) => handleDelivery(e)}>
                                {
                                    deliveries?.data.map((delivery, i) => <option key={i} value={delivery.id}> {delivery.id} : Destination: {delivery.destination} </option>)
                                }
                            </select>
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">
                                Select a product
                            </label>
                            <select value={product.id} className="form-control" name="id" onChange={(e) => productHandle(e)}>
                                {
                                    products?.data.map((product, i) => <option key={i} value={product.id}> {product.id} : Name {product.name} : Price {product.price} : Weight {product.weight}</option>)
                                }
                            </select>
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/allData">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )


}