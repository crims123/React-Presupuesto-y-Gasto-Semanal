import React from "react";
import Restante from "./Restante";
class Gasto extends React.Component{


	

	render(){


	const {cantidadGasto,nombreGasto} =this.props.gasto;

		return(
			<li className="gastos">
			<p>
				{nombreGasto}
				<span className="gasto">$ {cantidadGasto} </span>
			</p>
			</li>

			);
	}
}


export default Gasto;