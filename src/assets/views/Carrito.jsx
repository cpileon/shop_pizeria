import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../Mycontext";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Carrito = () =>{
    const { datapizza, setDatapizza, pedido, setPedido, generarPedido, valorTotal, setValorTotal } = useContext(MyContext)
    return(
        <>
        <Container >
            <h3 className="mt-3">¡Chequea tu pedido!</h3>
            <div>
                {pedido.map((pizza, i)=>(
                    <div className="row" key={pizza.id}>
                        <div className="col">
                            {i+1} 
                        </div>
                        <div className="col">
                            <img src={pizza.img} width={50} />
                        </div>
                        <div className="col">
                            Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                        </div>
                        <div className="col">
                            <strong>Precio:</strong> ${pizza.price.toLocaleString('en-US')}
                        </div>
                        Cantidad: {pizza.cantidad}
                    </div>
                ))}
                <h4>Total Pedido: ${valorTotal.toLocaleString('en-US')}</h4>
                <div className="d-flex justify-content-between">
                    <Link to="/"><Button className="btn btn-secondary">Volver</Button></Link>
                    <Button>Confirmar pedido</Button>
                </div>
            </div>
        </Container>

        </>
    )
};

export default Carrito;