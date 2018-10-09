import React from "react";

class Restante extends React.Component{


	

	render(){


		return(
			
				<div className="alert alert-success">
				Restante ${this.props.restante} 
				
				</div>
			);
	}
}


export default Restante;