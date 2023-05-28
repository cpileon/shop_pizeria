import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../Mycontext";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Carrito = () =>{
    const { datapizza, setDatapizza, pedido, setPedido, generarPedido } = useContext(MyContext)
    return(
        <>
        <Container >
            <h3 className="mt-3">¡Chequea tu pedido!</h3>
            {pedido.map((pizza, i)=>(
                <div key={pizza.id}>
                    {i+1} Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)} Cantidad: {pizza.cantidad}
                    </div>
            ))}
            <div className="d-flex justify-content-between">
                <Link to="/"><Button className="btn btn-secondary">Volver</Button></Link>
                <Button>Confirmar pedido</Button>
            </div>
        </Container>

        </>
    )
};

export default Carrito;