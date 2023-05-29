import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../Mycontext";

import Empty from "../components/Empty";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Carrito = () =>{
    const { pedido, valorTotal, addPizza, substractPizza } = useContext(MyContext);

    if(!pedido.length) return <Empty />;
    return(
        <>
        <Container className="p-4" >
            <h2 className="mb-4">¡Chequea tu pedido!</h2>
            <div>
                {pedido.map((pizza, i)=>(
                    <div className="row m-2 bg bg-light p-3 rounded shadow" key={pizza.id}>
                        <div className="col">
                            <h5><strong>{i+1}</strong></h5>
                        </div>
                        <div className="col">
                            <img src={pizza.img} width={50} />
                        </div>
                        <div className="col">
                           <strong> Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</strong>
                        </div>
                        <div className="col">
                            <strong>Precio:</strong> ${pizza.price.toLocaleString('en-US')}
                        </div>
                        <div className="col">
                            <strong>Cantidad:</strong> {" "} 
                            <Button onClick={()=>substractPizza(pizza.id, pizza.price)} className="pt-0 btn-sm"> - </Button> 
                            {" "}{pizza.cantidad}{" "}
                            <Button onClick={()=>addPizza(pizza.id, pizza.price)} className="pt-0 btn-sm"> + </Button>
                        </div>
                    </div>
                ))};
                <h3 className="m-3">Total Pedido: ${valorTotal.toLocaleString('en-US')}</h3>
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