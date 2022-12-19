import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";

export const CreateDeliveryVan = () => {
    const [delivery, setDelivery] = useState({
    deliveryDate:"",
        fromWareHouse:"",
        destination:"",
        van:[{
        id:""
        }]
    })



    const {deliveryDate, fromWareHouse,destination, van} = delivery;

    let navigate = useNavigate();

    const onInputChange = (e) => {
        setDelivery({...delivery,[e.target.name]:e.target.value})
    }

    const handleVan = (event) =>{
        const name = event.target.name;

        setDelivery(prevState =>{
            return{
                ...prevState,
                van: {[name]: event.target.value}
            }
        })
    }

    const onSubmit = async (e) =>{
        e.preventDefault()
        await axios.post("http://localhost:8080/api/v1/delivery", delivery)
        console.log(delivery)
        navigate("/")
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Create delivery</h2>
                    <form onSubmit={onSubmit}>

                        <div className="mb-3">
                            <label  className="form-label">
                                Date
                            </label>
                            <input
                                type={"date"}
                                className="form-control"
                                name="deliveryDate"
                                value={deliveryDate}
                                onChange={(e) =>onInputChange(e)}

                            />
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">
                                WareHouse
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="fromWareHouse"
                                value={fromWareHouse}
                                onChange={(e) =>onInputChange(e)}

                            />
                        </div>

                        <div className="mb-3">
                            <label  className="form-label">
                                Destination
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="destination"
                                value={destination}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                enter van id
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="id"
                                value={van.id}
                                onChange={(e) =>handleVan(e)}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )


}