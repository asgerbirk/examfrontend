import {useQuery} from "react-query";
import {getAllProducts} from "../API/fetchData";
import {Table} from "react-bootstrap";
import {useState} from "react";

export const AllProducts = () =>{

    const {data, isLoading, isError} = useQuery("products", getAllProducts)

    const [search, setSearch] = useState("")


    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
    }

    console.log(data)


    return(
        <>
            <div className={"container"}>
                <input
                    type="text"
                    placeholder="Søg..."
                    onChange={(event) =>{
                        setSearch(event.target.value)
                    }}
                />
            </div>

        <div className={"container"}>
            <div className='py-4'>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* eslint-disable-next-line array-callback-return */}
                    {(data?.data.filter((valid) => {
                        if (search ===""){
                            return valid
                    }else if (valid.name.toLowerCase().includes(search.toLowerCase())){
                            return valid
                        }}).map((product) => (
                            <tr key={product.id}>
                                <td> {product.id} </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.weight}</td>
                            </tr>
                        )))}
                    </tbody>
                </Table>
            </div>
        </div>

        </>
    )
}


