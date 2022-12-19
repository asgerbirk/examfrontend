import {useQuery} from "react-query";
import {getAllDeliveries} from "../API/fetchData";
import {Table} from "react-bootstrap";

export const Home = ()=>{

    const {data, isLoading, isError} = useQuery("delivery", getAllDeliveries);


    if (isLoading){
        return <p>is loading</p>
    }

    if (isError){
        return <p>Error</p>
    }

    console.log(data)

    return (


            <div className={"container"}>
                <div className='py-4'>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Delivery Date</th>
                            <th>From ware house</th>
                            <th>Destination</th>
                            <th>Van id</th>

                        </tr>
                        </thead>
                        <tbody>
                        {(data?.data.map((delivery) => (
                            <tr key={delivery.id}>

                                <td> {delivery.id} </td>

                                <td>{delivery.deliveryDate}</td>
                                <td>{delivery.fromWareHouse}</td>
                                <td>{delivery.destination}</td>
                                <td>{delivery.van.id}</td>
                            </tr>

                        )))}
                        </tbody>
                    </Table>

                </div>
            </div>

    )
}