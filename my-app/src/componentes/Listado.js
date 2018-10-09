import React from "react";
import Gasto from "./Gasto"

class Listado extends React.Component{
	
	render(){
		return(
			<div className="gastos-realizados">
			<h2>Gastos Realizados</h2>
			{Object.keys(this.props.gastos).map(key=>(

					<Gasto
						key={key}
						gasto={this.props.gastos[key]}
						
					/>


				))}

			

			</div>

			);
	}
}


export default Listado ;