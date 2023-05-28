import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../Mycontext";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



const Pizza = () =>{
    const { name } = useParams();
    const { datapizza, setDatapizza, pedido, setPedido, generarPedido } = useContext(MyContext)

    return(
        <Container>
        <div>
            {datapizza.filter(p => p.name === name).map((pizza)=>(
                <div className="row row-cols-md-2 row-cols-1" key={pizza.id}>
                    <div className="col p-4  text-center"><img src={pizza.img} style={{width: '80%'}} className="rounded"/></div>
                    <div className="col p-4">
                        <h3>Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</h3>
                        <hr></hr>
                        <p>{pizza.desc}</p>
                        <h4>Ingredientes</h4>
                        <ul style={{listStyleType: "none"}}>
                        {pizza.ingredients.map((ingrediente, id)=>(<li key={id}><img src={`../../src/imgs/${ingrediente}.svg`} style={{width: 15}} /> {ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}</li>))}                    </ul>
                        <h4>Precio: ${pizza.price.toLocaleString('en-US')}</h4>

                    <div className="d-flex justify-content-between">
                        <Link to="/"><Button className="btn btn-secondary">Volver</Button></Link>
                        <Button className="btn btn-danger" onClick={()=> generarPedido(pizza.id, pizza.name, pizza.desc, pizza.img, pizza.price)}>Agregar al carro</Button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        </Container>
    )
};

export default Pizza;