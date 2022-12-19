import {useState} from "react";
import {createProduct} from "../API/fetchData";
import {Link, useNavigate} from "react-router-dom";

export const CreateProduct = () =>{

    const [product, setProduct] = useState({
        name:"",
        price:"",
        weight:""
    })

    const{name,price,weight} = product;

    let navigate = useNavigate();

    const onInputChange = (e) => {
        setProduct({...product,[e.target.name]:e.target.value})
    }


    const onSubmit = async (e) =>{
        e.preventDefault()
        await createProduct(product)
        console.log(product)
        navigate("/AllProducts")
    }


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">New product</h2>
                    <form onSubmit={onSubmit}>

                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Price" className="form-label">
                                Price in kr
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="price"
                                value={price}
                                onChange={(e) =>onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Weight" className="form-label">
                                Weight in grams
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                name="weight"
                                value={weight}
                                onChange={(e) =>onInputChange(e)}
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