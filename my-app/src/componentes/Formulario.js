import React from "react";

class FormularioGasto extends React.Component {


// vamos a crear los refs para el formulario

nombreGasto = React.createRef();
cantidadGasto = React.createRef();


crearGasto= (e)=>{
	e.preventDefault();
	// crear el objeto con los datos

	const gasto = {

		nombreGasto:this.nombreGasto.current.value,
		cantidadGasto:this.cantidadGasto.current.value,
		
	}

	//console.log(gasto);
	//agregrlo y enviarlos al padre por props
	this.props.agregarGasto(gasto);


	//resetear el formulario
	e.currentTarget.reset();

}


	render(){


		return(

			<form onSubmit={this.crearGasto} >
			    <h2>Agrega tus gastos aqui</h2>
			    <div className="campo">
			        <label>Nombre Gasto</label>
			        <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
			    </div>

			    <div className="campo">
			        <label>Cantidad</label>
			        <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
			    </div>

			    <input className="button-primary u-full-width" type="submit" value="Agregar" />
			</form>



			);
	}
}

export default FormularioGasto ;