import { useContext } from "react";
import MyContext from "../../Mycontext";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';



const Home = () => {
    const { datapizza, setDatapizza } = useContext(MyContext)

    return(
        <>
            <Container className="menu row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {datapizza.map((pizza) =>(
                    <Card>
                        <Card.Title>Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</Card.Title>
                        <Card.Img src={pizza.img}/>
                        <Card.Subtitle>Ingredientes</Card.Subtitle>
                        <hr />
                        <ul>
                            {pizza.ingredients.map((ingrediente)=>(<li>{ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}</li>))}
                        </ul>
                        <div className="d-flex justify-content-between">
                            <Button>Ver más</Button>
                            <Button>Agregar al carro</Button>
                        </div>
                    </Card>
                ))}
            </Container>
        </>
    )
}
export default Home;