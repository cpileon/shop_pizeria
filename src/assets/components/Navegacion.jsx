import { useContext } from 'react';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


import MyContext from '../../Mycontext';



const Navegacion = () => {
    const { valorTotal } = useContext(MyContext);

    return (
        <>
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand className='d-flex'>
                        <img
                        src="../../src/imgs/pizza.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                        />
                        <h5> Pizzería Mama Mía </h5>
                    </Navbar.Brand>
                    <Link to="/carrito">
                        <Button className='btn btn-outline-light btn-dark'>
                            <div className='d-flex'>
                                <h5 className='text-light m-1'> 🛒</h5>
                                <h5 className='text-light m-1'>${valorTotal.toLocaleString('en-US')}</h5>
                            </div>
                        </Button>
                    </Link>
                </Container>
            </Navbar>
        </>

    );
};

export default Navegacion;