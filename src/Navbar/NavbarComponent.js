import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = () =>{

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Exam</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/createProduct">Create Product</Nav.Link>
                    <Nav.Link as={Link} to="/createDelivery">Create delivery </Nav.Link>
                    <Nav.Link as={Link} to="/allData">All data</Nav.Link>
                    <Nav.Link as={Link} to="/allProducts">See all products</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}