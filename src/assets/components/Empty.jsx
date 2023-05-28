import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Empty = () =>{
    return(
        <>
        <Container className='text-center p-4 d-flex flex-column justify-content-center align-items-center'>
            <h2>Tu carrito de compras está vacío</h2>
            <h3>¡Vuelve al menú para conocer las mejores pizzas del país!</h3>
            <img src="../../src/imgs/pizza.svg" width={100} className='m-4' />

            <Link to="/"><Button className="btn btn-secondary">Volver</Button></Link>

        </Container>

        </>
    );
};

export default Empty;