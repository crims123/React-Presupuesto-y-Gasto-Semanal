import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import {validarPresupuesto,revisarPresupuesto} from "./helpers/helpers"
import ControlPresupuesto from "./componentes/ControlPresupuesto";

class App extends Component {

state = {
   
    presupuesto:"",
    restante:"",
     gastos:{},
}


componentDidMount(){
this.obtenerPresupuesto();




}


 obtenerPresupuesto =()=>{
  let presupuesto = prompt("Cual es tu presupuesto");

  let resultado = validarPresupuesto(presupuesto);
  // verificamos si si retorna un presupuesto valido
  if (resultado) {
    this.setState(
          {
   
    presupuesto:presupuesto, //actualizamos le presupuesto que ingresamos al presupuesto inicial
    restante:presupuesto, // creamos un estado llamado restante que es el dinero qe nos queda
                            // como acabamos de empezar es igual a nuestro presupuesto inicial
     
              }

      )
  }
  else {
    // si no es valido le volvemos a decir que ejecute la funcion
    this.obtenerPresupuesto();
  }
}




// agregamos un nuevo gasto al state
agregarGasto =gasto=>{

  // gasto = variable que crea el primer objeto --- gastos = variable que maneja los estados
  // creamos una copia del state actual y lo almacenamos en gastos osea
  // creamos una constante llamada gastos que lo q va a hacer es copiar las popirdades del objeto 
  // cada vez q q creemos uno y luego las va a hacer igual al estado actual osea gastos:{},
   const gastos = {...this.state.gastos} ;
   console.log(gastos);
  // agregamos el gasto al objeto del state creando uno con fecha cada vez q se cree
  // un objeto se va a crear uno con una fecha diferente

  gastos[`gasto${Date.now()}`] = gasto;


this.restarPresupuesto (gasto.cantidadGasto);

  // ahora cabiamos el estado en el primer estado
  this.setState(
            {
   
              gastos:gastos, //actualizamo los gastos del estado inicial por el nuevo gasto con fecha
              // esto nos va a crear un objeto diferente cada vez que le demos al boton y nos va a quedar
              // estados diferentes cada vez
          }
    )

  }


// creamos una funcion llamada restar presupuesto y con esa funcion traemos el valor de cada gasto
  
restarPresupuesto =cantidad=>{

let restar =Number(cantidad);  // usamos number para transformarlo a tipo number
// creamos una variable igual al estado anctual de restante
let restante = this.state.restante;
// despues la restamos
restante =restante-restar;
console.log(restante);
// ya por ultimo actualizamos el estado

this.setState(
    {
      restante:restante,
    }
  )
}

  render() {
    return (
      <div className="App Container">
       
       <Header titulo="Gasto Semanal"></Header>
          
      <div className="contenido-principal contenido">
        <div className="row">

          <div className="one-half column" >
            <Formulario agregarGasto={this.agregarGasto} />

          </div>
          <div className="one-half column" >
            <Listado gastos={this.state.gastos} />
            <ControlPresupuesto
            presupuesto={this.state.presupuesto} restante={this.state.restante}
            />
          </div>

        </div>
      </div>
      
      </div>
    );
  }
}

export default App;
