import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../Mycontext";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


import Carrusel from "../components/Carrousel";
import Footer from "../components/Footer";


const Home = () => {
    const { datapizza, setDatapizza, pedido, setPedido, generarPedido } = useContext(MyContext)
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const pizzaPage = (name) => {
        console.log(name);
        navigate(`/detail/${name}`);
    }


    return(
        <>
            <Carrusel />
            <div className="menu d-flex justify-content-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-4 d-flex justify-content-center">
                {datapizza.map((pizza) =>(
                    <Card key={pizza.id} className="p-4 m-3 shadow" style={{width: '20rem'}}>
                        <Card.Title>Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</Card.Title>
                        <Card.Img src={pizza.img} />
                        <Card.Subtitle className="mt-2">Ingredientes</Card.Subtitle>
                        <hr />
                        <ul style={{listStyleType: "none"}}>
                            {pizza.ingredients.map((ingrediente, id)=>(<li key={id}><img src={`../../src/imgs/${ingrediente}.svg`} style={{width: 15}} /> {ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}</li>))}
                        </ul>
                        <div className="d-flex justify-content-between">
                            <Button className="btn btn-success" onClick={()=>pizzaPage(pizza.name)}>Ver más</Button>
                            <Button className="btn btn-danger" onClick={()=> generarPedido(pizza.id, pizza.name, pizza.desc, pizza.img, pizza.price)}>Agregar al carro</Button>
                        </div>
                    </Card>
                ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;