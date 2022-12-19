import {useQuery} from "react-query";
import {getAllProducts} from "../API/fetchData";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

export const AllProducts = () =>{

    const {data, isLoading, isError} = useQuery("products", getAllProducts)

    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
    }

    console.log(data)


    return(
        <div className={"container"}>
            <div className='py-4'>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>Click to see and edit the product</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(data?.data.map((product) => (
                            <tr key={product.id}>
                                <td> {product.id} </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.weight}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary mx-2"
                                        to={`/seeSingleProduct/${product.id}`}>Edit</Link>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </Table>
            </div>
        </div>


    )
}


