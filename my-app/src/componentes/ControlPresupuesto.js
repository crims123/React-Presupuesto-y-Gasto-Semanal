import React from "react";
import Presupuesto from "./Presupuesto";
import Restante from "./Restante";

class ControlPresupuesto extends React.Component{


	

	render(){


		return(
			<div>
				<Presupuesto presupuesto={this.props.presupuesto} />
				<Restante restante={this.props.restante}/>
			</div>
			);
	}
}


export default ControlPresupuesto;