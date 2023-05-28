import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './assets/data/pizzas.json'
//Contexto
import MyContext from './Mycontext';

//Componentes
import Navegacion from './assets/components/Navegacion'

//Views
import Home from './assets/views/Home';
import Pizza from "./assets/views/Pizza";
import Carrito from "./assets/views/Carrito";

function App() {
  //Crear nueva propiedad en los datos de las pizzas y 
  const pizzas = data.map(pizza => ({...pizza, cantidad: 0}));
  const [datapizza, setDatapizza] = useState(pizzas);
  const [pedido, setPedido] = useState([]);

  //Función para agregar pizza al pedido
    const generarPedido = (id, name, desc, img, price) => {
      const itemPedido = {id, name, desc, img, price, cantidad: 1}
      console.log(itemPedido)
      setPedido([...pedido, {...itemPedido}])
      console.log("El pedido es:", pedido)
    }
  
  //Crear los datos para el provider
  const globalData = {datapizza, setDatapizza, pedido, setPedido, generarPedido};


  return (
    <>
    <MyContext.Provider value = { globalData }>
      <BrowserRouter>
        <Navegacion />
        <div style={{marginTop: 50}}>
          <Routes>
            <Route path ="/" element={<Home/>}/>
            <Route path ="/pizza/:name" element={<Pizza/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </MyContext.Provider>
    </>
  )
}

export default App
