import {useQuery} from "react-query";
import {allProductOrders} from "../API/fetchData";
import {Table} from "react-bootstrap";
import {useState} from "react";

export const AllData = () =>{

    const {data, isLoading, isError} = useQuery("productOrders", allProductOrders);

    const [search, setSearch] = useState("")


    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
    }

    return (
        <>
            <div className={"container"}>
                <input
                    type="text"
                    placeholder="Search after destination"
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
                        <th>Quantity</th>
                        <th>Delivery id</th>
                        <th>Delivery Date</th>
                        <th>From ware house</th>
                        <th>Destination</th>
                        <th>Product name</th>
                        <th>Product price</th>
                        <th>Product weight</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(data?.data.filter((valid) => {
                        if (search ===""){
                            return valid
                        }else if (valid.delivery.destination.toLowerCase().includes(search.toLowerCase())){
                            return valid
                        }}).map((productOrder) => (
                        <tr key={productOrder.id}>

                            <td> {productOrder.id} </td>
                            <td>{productOrder.quantity}</td>

                            <td>{productOrder.delivery.id}</td>
                            <td>{productOrder.delivery.deliveryDate}</td>
                            <td>{productOrder.delivery.fromWareHouse}</td>
                            <td>{productOrder.delivery.destination}</td>

                            <td>{productOrder.product.name}</td>
                            <td>{productOrder.product.price}</td>
                            <td>{productOrder.product.weight}</td>

                        </tr>

                    )))}
                    </tbody>
                </Table>
            </div>
        </div>
        </>
    )
}