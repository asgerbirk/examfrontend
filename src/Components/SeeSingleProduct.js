import {getProductById, updateProduct} from "../API/fetchData";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const SeeSingleProduct = () => {

    const [product, setProduct] = useState({
        name:"",
        price:"",
        weight:""
    })

    const {id} = useParams();

    const{name,price,weight} = product;

    let navigate = useNavigate();

    const onInputChange = (e) => {
        setProduct({...product,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        loadProduct().then(r => console.log(r));
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(product,id)
        navigate("/allProducts")
    }

    const loadProduct = async () => {
        const result = await getProductById(id)
        setProduct(result.data)
    };


     return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">New product</h2>
                    <form onSubmit={onSubmit}>

                        <div className="mb-3">
                            <label  className="form-label">
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
                            <label  className="form-label">
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
                            <label  className="form-label">
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
                        <Link className="btn btn-outline-danger mx-2" to="/allProducts">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>

    )
}