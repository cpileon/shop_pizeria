import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

//Datos de JSON
import pizzas from './assets/data/pizzas.json';
//Contexto
import MyContext from './Mycontext';

//Componentes
import Navegacion from './assets/components/Navegacion';

//Views
import Home from './assets/views/Home';
import Pizza from "./assets/views/Pizza";
import Carrito from "./assets/views/Carrito";

function App() {
  //Crear nueva propiedad en los datos de las pizzas y 
  const [datapizza, setDatapizza] = useState(pizzas);
  const [pedido, setPedido] = useState([]);
  //Variable para calcular total en carrito
  const [valorTotal, setValorTotal] = useState(0);

  //Función para aumentar cantidad de pizza al pedido
    const addPizza = (id, price) =>{
        if (pedido.find((p) => p.id == id)){
          let cantUp = pedido.findIndex((p) => p.id == id);
          console.log("El producto ya está en el array en el índice: ", cantUp);
          pedido[cantUp].cantidad++;
          setValorTotal(valorTotal + price);
          alert(`Se agregó otra Pizza ${pedido[cantUp].name.charAt(0).toUpperCase() + pedido[cantUp].name.slice(1)} al carro.`);
        };
    };

  //Función para disminuir cantidad de pizza al pedido
    const substractPizza = (id, price) =>{
      let search = pedido.find((p) => p.id == id);
      console.log(search);
      if (search){
        let cantDown = pedido.findIndex((p) => p.id == id);
        console.log(cantDown);
        pedido[cantDown].cantidad--;
        setValorTotal(valorTotal - price);

        //confirmar que si es cantidad 0 se borre del Pedido
        if(search.cantidad == 0){
          pedido.splice(cantDown, 1);
        };
      };

      if(pedido.length == 0){
        alert("¡Tu carrito de compras ha quedado vacío!");
      }
    }

  //Función para agregar pizza al pedido
    const generarPedido = (id, name, desc, img, price) => {
      const itemPedido = {id, name, desc, img, price, cantidad: 1};
      console.log(itemPedido);

      //Comprobar que la piza ya está en el carro. Al identificarla, aumenta la cantidad en 1
      if(pedido.find((p) => p.id == id)){
        addPizza(id, price);

      } else {
        setPedido([...pedido, {...itemPedido}]);
        console.log("El pedido es:", pedido);
        setValorTotal(valorTotal + price);
        alert(`Se agregó una Pizza ${itemPedido.name.charAt(0).toUpperCase() + itemPedido.name.slice(1)} al carro.`);
      };
    };

  //Crear los datos para el provider
  const globalData = {datapizza, setDatapizza, pedido, setPedido, generarPedido, valorTotal, setValorTotal, addPizza, substractPizza};


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
  );
};

export default App;
