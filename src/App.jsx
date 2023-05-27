import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './assets/data/pizzas.json'
//Contexto
import MyContext from './Mycontext';

//Componentes
import Navegacion from './assets/components/Navegacion'
import Carrusel from './assets/components/Carrousel';

//Views
import Home from './assets/views/Home';

function App() {
  //Crear nueva propiedad en los datos de las pizzas y 
  const pizzas = data.map(pizza => ({...pizza, cantidad: 0}));
  console.log(pizzas);
  const [datapizza, setDatapizza] = useState(pizzas);
  
  //Crear los datos para el provider
  const globalData = {datapizza, setDatapizza};


  return (
    <>
    <MyContext.Provider value = { globalData }>
      <BrowserRouter>
        <Navegacion />
        <Carrusel />
        <Routes>
          <Route path ="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
    </>
  )
}

export default App
